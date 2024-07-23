document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: './images/2024-07-23.jpg', name: '迈索尼城堡，麦西尼亚州，希腊 (© Andrew Mayovskyy/Shutterstock)' },
        { src: './images/2024-07-22.jpg', name: '树上的中国小熊猫, 成都, 四川省, 中国 (© Jackyenjoyphotography/Getty Images)' },
        { src: './images/2024-07-21.jpg', name: '肯杜瓦村的木制渔船，桑给巴尔，坦桑尼亚 (© Lubos Paukeje/Alamy Stock Photo)' },
        { src: './images/2024-07-20.jpg', name: '月球 (© Victor Blum/Getty Images)' },
        { src: './images/2024-07-19.jpg', name: '河岸上的一只年轻美洲虎，潘塔纳尔，巴西 (© Tambako the Jaguar/Getty Images)' },
        { src: './images/2024-07-18.jpg', name: 'Coral reef in the Indian Ocean, Mayotte, France (© Gabriel Barathieu/Minden Pictures)' },
        { src: './images/2024-07-17.jpg', name: '德国中世纪城市罗滕堡 (© kanuman/Getty Images)' },
        { src: './images/2024-07-16.jpg', name: '斯卡拉布雷的新石器时代遗迹,奥克尼群岛,苏格兰 (© Paul Williams - FunkyStock/Getty Images)' },
        { src: './images/2024-07-15.jpg', name: '立石公园，神奈川县，日本 (© blew_s/Shutterstock)' },
        { src: './images/2024-07-14.jpg', name: '女王花园群岛的镰形真鲨，古巴 (© Christian Vizl/Tandem Stills + Motion)' },
        { src: './images/2024-07-13.jpg', name: '卡帕多西亚的童话烟囱和窑洞，土耳其 (© Storm Is Me/Shutterstock)' },
        { src: './images/2024-07-12.jpg', name: '雷尼尔山国家公园的野花，华盛顿州，美国 (© RomanKhomlyak/Getty Images)' },
        { src: './images/2024-07-11.jpg', name: '甘吉，西西里岛，意大利 (© Andrea Caruso/Amazing Aerial Agency)' },
        { src: './images/2024-07-10.jpg', name: '领簇舌巨嘴鸟，哥斯达黎加 (© Juan Carlos Vindas/Getty Images)' },
        { src: './images/2024-06-21.jpg', name: '蓝色水面上的渔船航拍图，郴州市，湖南省，中国 (© Haitong Yu/Getty images)' },
        { src: './images/2024-06-22.jpg', name: '亚马逊雨林，巴西 (© Claus Meyer/plainpicture)' },
        { src: './images/2024-06-23.jpg', name: '达卡环形交叉路口的鸟瞰图，孟加拉国 (© Azim Khan Ronnie/Amazing Aerial Agency)' },
        { src: './images/2024-06-24.jpg', name: '克里穆图的火山口湖，弗洛勒斯岛，印度尼西亚 (© Shane P. White/Minden Pictures)' },
        { src: './images/2024-06-25.jpg', name: '火浪岩层，火焰谷州立公园，内华达州，美国 (© Clint Losee/Tandem Stills + Motion)' },
        { src: './images/2024-06-26.jpg', name: '考氏鳍竺鲷与海葵，蓝碧海峡，北苏拉威西，印度尼西亚 (© Constantinos Petrinos/NPL/Minden Pictures)' },
        { src: './images/2024-06-27.jpg', name: '黄昏时分的圣母百花大教堂，佛罗伦萨，意大利 (© Elena Pueyo/Getty Images)' },
        { src: './images/2024-06-28.jpg', name: '诺曼底海岸的绍塞群岛，法国 (© Tuul & Bruno Morandi/Getty Images)' },
        { src: './images/2024-06-29.jpg', name: '宁哈根的山毛榉林，梅克伦堡-前波美拉尼亚州，德国 (© Martin Ruegner/Getty Images)' },
        { src: './images/2024-06-30.jpg', name: '乌布寺庙的石雕,巴厘岛,印度尼西亚 (© R. Schönebaum/plainpicture)' },
        { src: './images/2024-07-01.jpg', name: '菲斯加德灯塔，埃斯奎莫尔特港，科尔伍德，不列颠哥伦比亚省，加拿大 (© davemantel/Getty Images)' },
        { src: './images/2024-07-02.jpg', name: '意大利卡，桑蒂蓬塞的一座古罗马城市，塞维利亚，安达卢西亚，西班牙 (© Moses Palermo/Amazing Aerial Agency) ' },
        { src: './images/2024-06-03.jpg', name: '猫鼬家族 (© anetapics/Shutterstock)' },
        { src: './images/2024-06-04.jpg', name: '扎哈拉德拉谢拉，安达卢西亚，西班牙 (© Francesco Carovillano/eStock Photo)' },
        { src: './images/2024-06-05.jpg', name: '丹翠雨林的诺亚海滩，昆士兰州，澳大利亚 (© bjeayes/Getty Images)' },
        { src: './images/2024-06-06.jpg', name: '从康威河眺望康威城堡，威尔士 (© David Chapman/Alamy Stock Photo)' },
        { src: './images/2024-06-07.jpg', name: '越南安沛省木仓寨的水稻梯田 (© Kiatanan Sugsompian/Getty Images)' },
        { src: './images/2024-06-08.jpg', name: '野生蓝莓 (© Baac3nes/Getty Images) ' },
        { src: './images/2024-06-09.jpg', name: '阿根廷拉里奥哈省塔兰帕亚国家公园 (© Gonzalo Azumendi/Getty Images)' },
    ];

    const createImageElement = (image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item', 'fade-in');

        const img = document.createElement('img');
        if (index < 3) {
            img.src = image.src;
        } else {
            img.src = 'https://gitcode.net/rong6ya/myfiles/-/raw/master/img/tips.jpg';
            img.setAttribute('data-src', image.src);
        }
        img.alt = image.name;

        const name = document.createElement('div');
        name.classList.add('image-name');
        name.textContent = image.name;

        item.appendChild(img);
        item.appendChild(name);
        gallery.appendChild(item);

        // 灯箱
        img.addEventListener('click', () => {
            if (img.src === './xx.png') {
                img.src = img.getAttribute('data-src');
            }
            openLightbox(image);
        });
    };

    images.forEach((image, index) => createImageElement(image, index));

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const downloadLink = document.getElementById('download-link');
    const closeBtn = document.querySelector('.close');

    const openLightbox = (image) => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        caption.textContent = image.name;
        downloadLink.href = image.src;
        downloadLink.download = image.name;
    };

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.style.display = 'none';
        }
    });

    // 显示footer
    gallery.addEventListener('load', () => {
        document.getElementById('footer').style.display = 'block';
    }, true);
});
