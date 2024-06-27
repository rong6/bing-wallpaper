document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: './images/2024-06-21.jpg', name: '蓝色水面上的渔船航拍图，郴州市，湖南省，中国 (© Haitong Yu/Getty images)' },
        { src: './images/2024-06-22.jpg', name: '亚马逊雨林，巴西 (© Claus Meyer/plainpicture)' },
        { src: './images/2024-06-23.jpg', name: '达卡环形交叉路口的鸟瞰图，孟加拉国 (© Azim Khan Ronnie/Amazing Aerial Agency)' },
        { src: './images/2024-06-24.jpg', name: '克里穆图的火山口湖，弗洛勒斯岛，印度尼西亚 (© Shane P. White/Minden Pictures)' },
        { src: './images/2024-06-25.jpg', name: '火浪岩层，火焰谷州立公园，内华达州，美国 (© Clint Losee/Tandem Stills + Motion)' },
        { src: './images/2024-06-26.jpg', name: '考氏鳍竺鲷与海葵，蓝碧海峡，北苏拉威西，印度尼西亚 (© Constantinos Petrinos/NPL/Minden Pictures)' },
        { src: './images/2024-06-27.jpg', name: '黄昏时分的圣母百花大教堂，佛罗伦萨，意大利 (© Elena Pueyo/Getty Images)' },
        
    ];

    const createImageElement = (image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item', 'fade-in');

        const img = document.createElement('img');
        if (index < 6) {
            img.src = image.src;
        } else {
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
            if (!img.src) {
                img.src = img.getAttribute('data-src');
            }
            openLightbox(image);
        });
    };

    images.forEach((image, index) => createImageElement(image, index));

    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector('img');
                    img.src = img.getAttribute('data-src');
                    entry.target.classList.add('visible');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        if (index >= 6) {
            lazyLoad(item);
        } else {
            item.classList.add('visible');
        }
    });

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
