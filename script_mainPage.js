let urlBgImage = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
];

let brandsData = [
    {
        name: "УРАЛ",
        description: "Высокая проходимость, работа в суровых погодных условиях - это отличительная черта автомобилей УРАЛ.",
        imgUrl: "img/small_logo/ural.png",
        link: "ural.html"
    },
    {
        name: "ГАЗ",
        description: "Завод с более, чем 90-летней историей. Представляет широкий модельный ряд малотоннажных и среднетоннажных автомобилей, а также автобусов",
        imgUrl: "img/small_logo/gaz.png",
        link: "gaz.html"
    },
    {
        name: "ЗИЛ",
        description: "Около 8 млн грузовых автомобилей ЗИЛ было выпущено за время существования завода.",
        imgUrl: "img/small_logo/zil.png",
        link: "zil.html"
    },
    {
        name: "КАМАЗ",
        description: "Около трети большегрузных грузовиков на постсоветсткой территории – это КАМАЗ. КАМАЗами пользуются более чем в 80 странах мира.",
        imgUrl: "img/small_logo/kamaz.png",
        link: "kamaz.html"
    },
    {
        name: "МАЗ",
        description: "Одни из самых практичных и надежных тягачей, конечно же выпущены на автозаводе МАЗ. По соотношению цены и качества равныхим нет.",
        imgUrl: "img/small_logo/maz.png",
        link: "maz.html"
    },
    {
        name: "ПАЗ",
        description: "Производитель автобусов малого и среднего классов",
        imgUrl: "img/small_logo/paz.png",
        link: "paz.html"
    }

];


let saleData = [
    {
        name: "Карданный вал переднего моста УРАЛ0",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Редуктор охлаждения МАЗ1",
        serialNumber: 1231111,
        basePrice: 10000,
        finalPrice: 5000,
        imgUrl: "img/sale/2.jpg"
    },
    {
        name: "Редуктор заднего моста КАМАЗ3",
        serialNumber: 114564711,
        basePrice: 7000,
        finalPrice: 4500,
        imgUrl: "img/sale/3.jpg"
    },
    {
        name: "Карданный вал переднего моста3",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Карданный вал переднего моста4",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Карданный вал переднего моста УРАЛ5",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Карданный вал переднего моста МАЗ6",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Карданный вал переднего моста ЗИЛ7",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Карданный вал переднего моста8",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    },
    {
        name: "Карданный вал переднего моста9",
        serialNumber: 111111,
        basePrice: 15000,
        finalPrice: 12000,
        imgUrl: "img/sale/1.jpg"
    }

];



window.addEventListener('load', function () {
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let spansFeedback = document.querySelectorAll('.feedback_form');
    let brands = document.querySelector('.carBrands');
    let navHeader = document.querySelector('.nav_header');
    let links = navHeader.querySelectorAll('.nav-item'); 
    let burger = document.querySelector('.header_burger');
    let menu = document.querySelector('.nav_list');
    let showBtn = document.querySelector('.show_our_brands');

    let contactPage = document.querySelector('.contact_page');
    let brandsPage = document.querySelector('.brands_page');
    let salePage = document.querySelector('.sale_page');
    let footer = document.querySelector('footer');
    
    let startForm = document.querySelector('.form-control');
    let gallery = document.querySelector('.sale_gallery');
    let brandsWrapper = document.querySelector('.brands_wrapper');
    let winWidth = body.clientWidth;
    
    let navFooter = document.querySelector('.nav_footer');
    let logo = document.querySelector('.header_img');

    logo.classList.add('anim');
    


    /* Главная страница: смена фоновой картинки при наведении на категории из левого aside */
    brands.addEventListener('mouseover', changeMainBackgroundImg);
    brands.addEventListener('mouseout', function () {
        main.style.background = 'url(img/scheme/1.png) no-repeat center';
    });

    function changeMainBackgroundImg(e) {
        if (e.target.tagName == "IMG") {
            let number = e.target.dataset.key;
            main.style.background = `url(img/scheme/${urlBgImage[number]}) no-repeat center`;
        }
    }
    /* ---------------------------------- */

    /*Установка высоты главных блоков*/
    let headerHeight = (header.clientHeight + header.clientTop * 2);
    let footerHeight = (footer.clientHeight + footer.clientTop * 2);
    main.style.marginTop = headerHeight + 'px';
    main.style.height = window.innerHeight - headerHeight +'px';
    brandsPage.style.height = window.innerHeight - headerHeight + 'px';
    salePage.style.height = window.innerHeight - headerHeight + 'px';
    contactPage.style.height = window.innerHeight - headerHeight - footerHeight + 'px';
    
    /* ---------------------------------- */

    
    burger.addEventListener('click', function() {
        burger.classList.toggle('onActive');
        menu.classList.toggle('onActive');
        body.classList.toggle('lock');

    })

    
    /*Переход в форму*/
    spansFeedback.forEach((span) => {
        span.addEventListener('click', function () {
            startForm.focus();
        })
    })

    /*  отправка формы код не оттестирован */

        const ajaxSend = async (formData) => {
            const fetchResp = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });
            if (!fetchResp.ok) {
                throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
            }
            return await fetchResp.text();
        };
    
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const formData = new FormData(this);
    
                ajaxSend(formData)
                    .then((response) => {
                        console.log(response);
                        form.reset(); // очищаем поля формы 
                    })
                    .catch((err) => console.error(err))
            });
        }); 

    /*Заполнение раздела с Марками машин*/
    brandsData.forEach((brand) => {
        brandsWrapper.insertAdjacentHTML('beforeend', `
        <div class="brand_item">
            <div class="brand_wrap1">
                <p class="brand_name">${brand.name}</p>
                <p class="description">${brand.description}</p>
            </div>
            <div class="brand_wrap2">
                <img class="brand_logo" alt="запчасти для ${brand.name}" src=${brand.imgUrl}>
                <a class="brand_link" title="автозапчасти к автомобилям ${brand.name}" href=${brand.link}>Перейти на страницу ${brand.name}</a>
            </div>
        </div>`
        )
    })

    /*Показываем марки */
    if (winWidth < 750) {
        brandsWrapper.classList.add('brands_hide');
        showBtn.classList.remove('brands_hide');
    }
    showBtn.addEventListener('click', function() {
        console.log('test');
        if (brandsWrapper.classList.contains('brands_hide')) {
            brandsWrapper.classList.remove('brands_hide');
        } else {
            brandsWrapper.classList.add('brands_hide');
        }

        /*  if (brandsWrapper.appAnimated){
                return;
            }
            brandsWrapper.appAnimated = true;   //ключ помогает избежать даблкликов

            if (!brandsWrapper.classList.contains('brands_hide')) {  
                let animate = brandsWrapper.animate([
                    { height: brandsWrapper.clientHeight + 'px'},
                    { height: 0}
                ],  { duration: 500 });   
                animate.addEventListener('finish', function(){
                    brandsWrapper.classList.add('brands_hide');
                    brandsWrapper.appAnimated = false; 
                })          
            }

            else {
                brandsWrapper.classList.remove('brands_hide');
                let animate = brands_hide.animate([
                { height: 0 },
                { height: brands_hide.clientHeight + 'px'}
            ], { duration: 500 });
            animate.addEventListener('finish', function(){
                brandsWrapper.appAnimated = false; 
            })          
        }
    */
            
    }) 
    
    


    /*Заполнение карточек распродажи*/
    saleData.forEach((item) => {
        gallery.insertAdjacentHTML('beforeend', `
            <div class="gallery_item">
                <p class="gallery_item_name">${item.name}</p>
                <p class="serial_number">Серийный номер ${item.serial}</p>
                <img src="${item.imgUrl}" alt="${item.name}">
                <div class="base_price">${item.basePrice} руб.</div>
                <div class="final_price">${item.finalPrice} руб.</div>
            </div>
        `
        )
    });
    gallery.insertAdjacentHTML('beforeend', `
    <button class="toRight" title="Предыдущая"> </button>`);

    /*------------------------------------- */


    /*Переключение карточек распродажи в галерее*/
    let saleCards = document.querySelectorAll('.gallery_item');
    let btnLeft = document.querySelector('.toLeft');
    let btnRight = document.querySelector('.toRight');
    let key = [0, 1, 2, 3, 4];
    if (winWidth < 1050) {
        key.pop();
        key.pop();
    } 
    if (winWidth < 767) {  
        key.pop(); 
    }  
    if (winWidth < 520) {
        key.pop(); 
    }  

    saleCards.forEach((el, i) => {
        if (!key.includes(i)) {
            el.style.display = "none";
        }
    })
    
    window.addEventListener("resize", function(){
        winWidth = body.clientWidth;
        if ((winWidth < 1050) && (key.length == 5)) {
            key.pop();
            key.pop();   
        }
        if ((winWidth < 767) && (key.length >= 3)) {
            key.pop();
        }
        if ((winWidth < 520) && (key.length >= 2)) {
            key.pop();
        }
        if ((winWidth >= 520) && (key.length < 2)) {
            key.push(key[key.length-1] + 1);
        }
        if ((winWidth >= 767) && (key.length < 3)) {
            key.push(key[key.length-1] + 1);
            
        }
        if ((winWidth >= 1050) && (key.length < 5)) {
            key.push(key[key.length-1] + 1);
            key.push(key[key.length-1] + 1);
        }

        saleCards.forEach((el, i) => {
            if (!key.includes(i)) {
                el.style.display = "none";
            } else el.style.display = "block";
        })  
    });
    


    btnLeft.addEventListener('click', function () {
        btnRight.style.display = "flex";
        btnLeft.style.display = "flex";
        let key1 = key.map(el => el = el - 1);
        key = key1;
        saleCards.forEach((el, i) => {
            el.style.display = "flex";
            if (!key.includes(i)) {
                el.style.display = "none";
            }
        })

        if (key[0] < 1) {
            btnLeft.style.display = "none";
        }
    })

    btnRight.addEventListener('click', function () {
        btnRight.style.display = "flex";
        btnLeft.style.display = "flex";
        let key1 = key.map(el => el = el + 1);
        key = key1;
        saleCards.forEach((el, i) => {
            el.style.display = "flex";
            if (!key.includes(i)) {
                el.style.display = "none";
            }
        })

        if (key[key.length - 1] == saleCards.length - 1) {
            btnRight.style.display = "none";
        }
    })
    /*------------------------------------- */

    /*Вставка карты*/
    let map;
    let marker;
    function initMap() {
        map = new ymaps.Map("yandexmap", {
            center: [51.639713, 39.160725],
            zoom: 16
        });
        marker = new ymaps.Placemark([51.639713, 39.160725], {
            hintContent: 'Расположение',
            balloonContent: 'Это наша организация'
        });
        map.geoObjects.add(marker);
    }
    ymaps.ready(initMap);
    /*------------------------------------- */
})