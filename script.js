let brandsData = [
    {
        name: "УРАЛ",
        description: "Высокая проходимость, работа в суровых погодных условиях - это отличительная черта автомобилей УРАЛ.",
        imgUrl: "img/small_logo/ural.png",
    },
    {
        name: "ГАЗ",
        description: "Завод с более, чем 90-летней историей. Представляет широкий модельный ряд малотоннажных и среднетоннажных автомобилей, а также автобусов",
        imgUrl: "img/small_logo/gaz.png",
    },
    {
        name: "ЗИЛ",
        description: "Около 8 млн грузовых автомобилей ЗИЛ было выпущено за время существования завода.",
        imgUrl: "img/small_logo/zil.png",
    },
    {
        name: "КАМАЗ",
        description: "Около трети большегрузных грузовиков на постсоветсткой территории – это КАМАЗ. КАМАЗами пользуются более чем в 80 странах мира.",
        imgUrl: "img/small_logo/kamaz.png",
    },
    {
        name: "МАЗ",
        description: "Одни из самых практичных и надежных тягачей, конечно же выпущены на автозаводе МАЗ. По соотношению цены и качества равныхим нет.",
        imgUrl: "img/small_logo/maz.png",
    },
    {
        name: "ПАЗ",
        description: "Производитель автобусов малого и среднего классов",
        imgUrl: "img/small_logo/paz.png",
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
    let urlBgImage = [
        '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
    ]

    let navHeader = document.querySelector('.nav_header');
    let navItems = navHeader.querySelectorAll('.nav-item');
    let brands = document.querySelector('.carBrands');
    let brandsItems = brands.querySelectorAll('img');
    let mainContent = document.querySelector('.main_content');
    let main = document.querySelector('main');
    let header = document.querySelector('header');
    let links = navHeader.querySelectorAll('.nav-item');  // ЛИшки header
    let contactPage = document.querySelector('.contact_page');
    let brandsPage = document.querySelector('.brands_page');
    let salePage = document.querySelector('.sale_page');
    let footer = document.querySelector('footer');
    let spanFeedback = document.querySelector('.feedback_form');
    let startForm = document.querySelector('.form-control');
    let gallery = document.querySelector('.sale_gallery');
    let brandsWrapper = document.querySelector('.brands_wrapper'); 



    /* смена фоновой картинки при наведении на категории из левого aside */
    brands.addEventListener('mouseover', changeMainBackgroundImg);
    brands.addEventListener('mouseout', function () {
        main.style.background = 'url(img/scheme/1.png) no-repeat center';
    });

    function changeMainBackgroundImg(e) {
        if (e.target.tagName == "IMG") {
            let number = e.target.parentNode.dataset.key;
            main.style.background = `url(img/scheme/${urlBgImage[number]}) no-repeat center`;
        }
    }
    /* ---------------------------------- */

    let headerHeight = (header.clientHeight + header.clientTop * 2);
    let footerHeight = (footer.clientHeight + footer.clientTop * 2);
    main.style.height = window.innerHeight - headerHeight + 'px';
    main.style.marginTop = headerHeight + 'px';
    brandsPage.style.height = window.innerHeight - headerHeight + 'px';
    salePage.style.height = window.innerHeight - headerHeight + 'px';
    contactPage.style.height = window.innerHeight - headerHeight - footerHeight + 'px';
    /* ----------------------------------- */

    /* переход к активному разделу */
    if (window.location.hash != '') {
        scrollToId(window.location.hash);
    }
    navHeader.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-item')) {
            e.preventDefault();
            let link = e.target.childNodes[1];
            scrollToId(link.hash);
        }
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            let link = e.target;
            scrollToId(link.hash);
        }
    })
    function scrollToId(id) {
        let links = navHeader.querySelectorAll('.nav-link');
        for (let i = 0; i < links.length; i++) {
            links[i].parentNode.classList.remove('active_link');
            if (links[i].hash === id) { links[i].parentNode.classList.add('active_link') };
        };
        let target = document.querySelector(id);
        let styles = window.getComputedStyle(target); // выдает все css свойства объекта
        let pos = target.getBoundingClientRect().top + window.pageYOffset - header.clientHeight - parseFloat(styles.marginTop);
        //let pos = target.offsetTop - menu.clientHeight; - не совсем корректный вариант, так как offsetTop определяется не от начала страницы, а от начала родительского узла 
        window.scrollTo({ // функция скроллинга
            top: pos,  // здесь указываем до какого уровня
            behavior: "smooth"// плавный
        })
    }
    /* ------------------------------- */


    window.addEventListener('scroll', function () {

        let btn = document.querySelector('.toUp');
        let posBtn = btn.getBoundingClientRect().top + window.pageYOffset;

        if (posBtn > window.innerHeight) {
            btn.classList.add('vis');
        }
        else {
            btn.classList.remove('vis');
        }

        btn.addEventListener('click', function () {
            window.scrollTo({
                top: -main.clientHeight,
                behavior: "smooth"
            })
        })


        for (let i = links.length - 1; i >= 0; i--) {
            let link = links[i];
            let header = document.querySelector(link.childNodes[1].hash);
            let posit = window.pageYOffset;
            let headerPos = header.getBoundingClientRect().top + window.pageYOffset;//
            if (posit > (headerPos - window.innerHeight / 2)) {
                navHeader.querySelector('.active_link').classList.remove('active_link');
                navHeader.querySelector('.active_a').classList.remove('active_a');
                link.classList.add('active_link');
                link.childNodes[1].classList.add('active_a');
                break;
            }
        }

    })

    spanFeedback.addEventListener('click', function () {
        startForm.focus();
    })

    var map;
    var marker;
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


    for (let i = 0; i < saleData.length; i++) {
        let item = document.createElement('div');
        item.classList.add('gallery_item');
        let name = document.createElement('p');
        name.classList.add('gallery_item_name');
        name.innerHTML = saleData[i].name;
        item.appendChild(name);
        let serial = document.createElement('p');
        serial.classList.add('serial_number');
        serial.innerHTML = "Серийный номер: " + saleData[i].serialNumber;
        item.appendChild(serial);
        let picture = document.createElement('img');
        picture.src = `${saleData[i].imgUrl}`
        item.appendChild(picture);
        let basePrice = document.createElement('div');
        basePrice.classList.add('base_price');
        basePrice.innerHTML = saleData[i].basePrice + ' руб.';
        item.appendChild(basePrice);
        let finalPrice = document.createElement('div');
        finalPrice.classList.add('final_price');
        finalPrice.innerHTML = saleData[i].finalPrice + ' руб.';
        item.appendChild(finalPrice);
        gallery.appendChild(item);
    }
    let btnRight = document.createElement('button');
    btnRight.classList.add('toRight');
    btnRight.title = "Предыдущая";
    gallery.appendChild(btnRight);

let saleCards = document.querySelectorAll('.gallery_item');
let btnLeft = document.querySelector('.toLeft');


let key = [0, 1, 2, 3, 4];

saleCards.forEach((el, i) => {
    console.log(key.includes(i))
    if (!key.includes(i)) {
        el.style.display = "none";
    }
})

btnLeft.addEventListener('click', function(){
    btnRight.style.display = "block";
    btnLeft.style.display = "block";
    let key1 = key.map(el => el=el-1);
    key = key1;
     console.log(key);  
     saleCards.forEach((el, i) => {
        el.style.display = "flex";
        if (!key.includes(i)) {
            el.style.display = "none";
        }
    })
    if (key[0] < 1) {
        console.log("test");
        btnLeft.style.display = "none";
        
    }

})


btnRight.addEventListener('click', function(){
    
    btnRight.style.display = "block";
    btnLeft.style.display = "block";
    

let key1 = key.map(el => el=el+1);
   key = key1;
    console.log(key);
    
saleCards.forEach((el, i) => {
    el.style.display = "flex";
    if (!key.includes(i)) {
        el.style.display = "none";
    }
})
console.log (key[key.length-1]);
    console.log(saleCards.length-1);
    if (key[key.length-1] == saleCards.length-1) {
        console.log("test");
        btnRight.style.display = "none";
        
    }
})


for (let i = 0; i < brandsData.length; i++) {
    let item = document.createElement('div');
        item.classList.add('brand_item');
        let brandWrap1 = document.createElement('div');
        brandWrap1.classList.add('brand_wrap1');
        item.appendChild(brandWrap1);
        let name = document.createElement('p');
        name.classList.add('brand_name');
        name.innerHTML = brandsData[i].name;
        brandWrap1.appendChild(name);
        let description = document.createElement('p');
        description.classList.add('brand_description');
        description.innerHTML = brandsData[i].description;
        brandWrap1.appendChild(description);
        let brandWrap2 = document.createElement('div');
        brandWrap2.classList.add('brand_wrap2');
        item.appendChild(brandWrap2);
        let picture = document.createElement('img');
        picture.classList.add('brand_logo');
        picture.src = `${brandsData[i].imgUrl}`
        brandWrap2.appendChild(picture);
        let btnPrice = document.createElement('button');
    btnPrice.classList.add('price');
    btnPrice.title = "Скачать прайс-лист";
    btnPrice.innerHTML = "Прайс-лист";
    brandWrap2.appendChild(btnPrice);
    brandsWrapper.appendChild(item);
    
    
}
    
   
    
        /*  отправка формы код не оттестирован */
    /* const ajaxSend = async (formData) => {
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
        }); */
})
/*  отправка формы код не оттестирован */



