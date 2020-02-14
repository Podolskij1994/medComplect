$(document).ready(function() {
    // $('.partners--slider__list').slick({

    // });





    const searchBarCatalog = document.querySelector('.searchBar--catalog'),
            searchBarCatalogBottomBar = document.querySelector('.searchBar--catalog__bottomBar');

    searchBarCatalog.addEventListener('click', () =>{
        searchBarCatalog.classList.toggle('searchBar--catalog_active');
        searchBarCatalogBottomBar.classList.toggle('searchBar--catalog__bottomBar_active');
    })

    
})