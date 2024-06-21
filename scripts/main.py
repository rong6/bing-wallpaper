import requests
import datetime
import os

image_path: str = "null"
enable_logs: bool = bool(os.getenv("ENABLE_ERROR_LOGS"))


def try_get():
    global image_path
    # 请求API获取数据
    response = requests.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
    data = response.json()

    # 提取图片链接并替换分辨率
    url_base = data['images'][0]['url']
    link = f"https://www.bing.com{url_base}".replace('1920x1080', 'UHD')

    # 下载图片
    image_response = requests.get(link)
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    image_path = f'./images/{today}.jpg'

    # 确保目录存在
    os.makedirs('./images', exist_ok=True)

    # 将图片保存到指定路径
    with open(image_path, 'wb') as file:
        file.write(image_response.content)

    print(f"Image saved to {image_path}")
    # raise Exception("wtf")


def main():
    count = 0
    global enable_logs
    while True:
        try:
            try_get()


        except Exception as e:

            print(f"[{count}]Error: {e} - Failed to download image, retrying...")
            count += 1
            if count >= 10 and enable_logs:
                log_path = f"./images/error-{datetime.datetime.now().strftime('%Y-%m-%d %H-%M-%S')}.txt"
                with open(log_path, 'w') as file:
                    file.write(f"Error when downloading image: {str(e)}")
                print(f"[{count}] Error: {e} - Failed to download image, saved error log as {log_path}")
                break
            elif count >= 10:
                print(f"[{count}] Error: {e} - Failed to download image,exiting...")
                break
        else:
            print(f"Downloaded image in {count} attempt(s).")
            break


if __name__ == "__main__":
    main()
