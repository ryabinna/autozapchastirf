window.addEventListener('load', function() {
let urlBgImage = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
] 

let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav-item');

let brands = document.querySelector('.carBrands');
let brandsItems = brands.querySelectorAll('img');
let mainContent = document.querySelector('.main_content');
let main = document.querySelector('main');




brands.addEventListener('mouseover', action);
brands.addEventListener('mouseout', function() {
    main.style.background= 'url(img/scheme/1.png) no-repeat center';
}); 

function action(e){
    if (e.target.tagName == "IMG")
    {let number = e.target.parentNode.dataset.key;
    main.style.background=`url(img/scheme/${urlBgImage[number]}) no-repeat center`;}
}



nav.addEventListener('click', activated);

function activated(e){
    let activeItem
    if (e.target.tagName == "LI") {
        activeItem = e.target
    }
    else {
        activeItem = e.target.parentNode;
    }
     
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active_link') 
    }
    
    activeItem.classList.add('active_link')
}




let header = document.querySelector('header');
let headerContent = document.querySelector('.header_content');
let headerContentHeight = headerContent.clientHeight + headerContent.clientTop * 2;
let navHeight = nav.clientHeight + nav.clientTop * 2;
let headerHeight = headerContentHeight + navHeight;
let mainContentHeight = window.innerHeight - headerHeight;
mainContent.parentNode.style.height = mainContentHeight + 'px';
alert(window.screen.width);

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



