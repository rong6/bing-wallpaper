import requests
import datetime
import os

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
