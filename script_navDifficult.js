window.addEventListener('load', function () {
    let navHeader = document.querySelector('.nav_header');
    let header = document.querySelector('header');
    let links = navHeader.querySelectorAll('.nav-item'); 
    let navFooter = document.querySelector('.nav_footer');

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

    
    navFooter.addEventListener('click', function (e) {
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
})


