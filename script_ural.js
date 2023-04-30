window.addEventListener('load', function () {
    
    let header = document.querySelector('header');
    let uralPage = document.querySelector('.wrapper_ural');
    let headerHeight = (header.clientHeight + header.clientTop * 2);
    uralPage.style.height = window.innerHeight - headerHeight + 'px';
    uralPage.style.marginTop = headerHeight + 'px';




});