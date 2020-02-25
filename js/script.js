$(document).ready(function() {
    $('.news--slider').slick({
        slidesToShow: 4,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },

        ]
    });

    $('.partners--slider__list').slick({
        slidesToShow: 3,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },

        ]
    });

    $('.about--recently__wrapper--list').slick({
        slidesToShow: 3,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },

        ]
    });
    $('.product--slider__slides').slick({
        slidesToShow: 3,
        prevArrow: '.arrow--left',
        nextArrow: '.arrow--right',
    });
    




    


    const showBackOfProductCart = function () {
        const   items = document.querySelectorAll('.recomend--item');

        items.forEach(item => {
            let btnShow = item.querySelector('.recomend--item__circles'),
                btnUnShow = item.querySelector('svg'),
                displayToShow = item.querySelector('.recomend--item__back');

            btnShow.addEventListener('click', event => {
                displayToShow.classList.add('fadeIn');
                displayToShow.classList.remove('fadeOut');
            });
            btnUnShow.addEventListener('click', event => {
                displayToShow.classList.remove('fadeIn');
                displayToShow.classList.add('fadeOut');
            });
        })
    }
    if (document.querySelectorAll('.recomend--item')) {
        showBackOfProductCart();
    }
    

    //Табы на странице продукт
    const aboutWrapper = document.querySelector('.about--wrapper');

    const tabsAbout = function () {
        const tabsBtn = document.querySelectorAll('.about--item'),
                    tabsWrapper = document.querySelector('.about--wrapper__bottom'),
                    tabs = tabsWrapper.querySelectorAll('.about--bottom__item');

        tabsBtn.forEach(item => {
            item.addEventListener('click', function (event) {
                tabs.forEach(item => item.classList.remove('about--bottom__item_active'));
                tabsBtn.forEach((item, i) => {
                    if (this === item) {
                        item.classList.add('about--item_active');
                        tabs[i].classList.add('about--bottom__item_active');
                    }
                    else {
                        item.classList.remove('about--item_active')
                    }
                    
                });
            })
        })
    }

    if (aboutWrapper) {
        tabsAbout();
    }

    const searchHeader = function () {

        //Кнопка поиск
        const    wrapper = document.querySelector('.searchBar--search'),
                    showBtn = wrapper.querySelector('.searchBar--search__button_show'),
                    unShowBtn = wrapper.querySelector('.searchBar--search__button_close'),
                    btnHidden = wrapper.querySelector('.searchBar--search__buttons'),
                    navVisibility = wrapper.querySelector('.searchBar--nav'),
                    input = wrapper.querySelector('.searchBar--search__input');

        showBtn.addEventListener('click', event => {
            showBtn.classList.add('fadeOut');
            showBtn.classList.remove('fadeIn');
            btnHidden.classList.add('fadeIn');
            btnHidden.classList.remove('fadeOut');
            navVisibility.classList.add('fadeOut');
            navVisibility.classList.remove('fadeIn');
            input.value = '';
        })

        unShowBtn.addEventListener('click', event => {
            showBtn.classList.remove('fadeOut');
            showBtn.classList.add('fadeIn');
            btnHidden.classList.remove('fadeIn');
            btnHidden.classList.add('fadeOut');
            navVisibility.classList.remove('fadeOut');
            navVisibility.classList.add('fadeIn');
        })
        //КАталог
        const searchBarCatalog = document.querySelector('.searchBar--catalog'),
                searchBarCatalogBottomBar = document.querySelector('.searchBar--catalog__bottomBar'),
                showRightBar = searchBarCatalogBottomBar.querySelectorAll('.searchBar--catalog__link_right');
                
        // const checkSearchBar = function () { 
        //     const target = event.target;
            
        //     if (!target.closest(".searchBar--catalog__bottomBar") && !target.matches('.searchBar--catalog')) {
        //         searchBarCatalogBottomBar.style.height = "";
        //         document.removeEventListener('click', checkSearchBar);
        //     }
        // }

        showRightBar[1].addEventListener('click', event => {
            let panel = event.target.querySelector('div');
            console.log(panel.dataset.height === panel.style.height, panel.style.height, panel.dataset.height);
            if (panel.style.height === panel.dataset.height) {
                panel.style.height = "";
            }
            else {
                panel.style.height = panel.dataset.height;
            }

        })
        
        searchBarCatalog.addEventListener('click', () =>{
            if (searchBarCatalogBottomBar.style.height === searchBarCatalogBottomBar.dataset.height && event.target.matches('.searchBar--catalog')) {
                searchBarCatalogBottomBar.style.height = "";
            }
            else {
                searchBarCatalogBottomBar.style.height = searchBarCatalogBottomBar.dataset.height;
                // document.addEventListener('click', checkSearchBar);
            }
            
        })


    }

    if (document.querySelector('.searchBar--search__button_show')) {
        searchHeader();
    }

    //МЕНЮХА

    const moveMenuBars = (menuSelector, menuCloseBtnSelector, activeClass) => {
        const menu = document.querySelector(menuSelector),
            menuCloseBtn = menu.querySelector('svg'),
            menuOpenBtn = document.querySelector(menuCloseBtnSelector);
        
        const toggleMenuClass = () => menu.classList.toggle(activeClass);

        menuCloseBtn.addEventListener('click', toggleMenuClass );
        menuOpenBtn.addEventListener('click', toggleMenuClass);
    };
    if (document.querySelector('.bars')) {
        moveMenuBars('.bars', '.header-menuIcon', 'bars_active')
    }
    //Показать скрыть текста на странице поиск
    const showText = function () {
        const wrapper = document.querySelector('.search--text'),
                    text = wrapper.querySelector('.search--text__text'),
                    showBtn = wrapper.querySelector('.search--text__show'),
                    hideBlock = wrapper.querySelector('.search--text__white');

        showBtn.addEventListener('click', event => {
            let target = event.target;
            if (target.textContent.trim() === 'Показать все') {
                text.style.height = 'auto';
                target.textContent = 'Скрыть';
                hideBlock.style.display = 'none';
            }
            else {
                text.style.height = '';
                target.textContent = 'Показать все';
                hideBlock.style.display = '';
            }
        })
    }

    if (document.querySelector('.search--text')){
        showText();
    }
})