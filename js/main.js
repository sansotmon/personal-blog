var language;

function setDefaultLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    if (localStorage.getItem('language') == 'es'){
        $('input[name="js-form-check-input"]').prop("checked", true);
    }
    getLanguage();
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage();
}

function getLanguage() {
    $.ajax({ 
        url:  './lang/' +  localStorage.getItem('language') + '.json',
        dataType: "json",
        success: function (lang) {
            language = lang;
            setTranslate();
        }
    });
}

$('input[name="js-form-check-input"]').on('change', function() {
    let isChecked = $(this).prop('checked');
    if(isChecked) {
        setLanguage('es');
    }else{
        setLanguage('en');
    }
});

function setTranslate() {
    $('.js-english').html(language.english);
    $('.js-spanish').html(language.spanish);
    $('.js-intro').text(language.intro);
    $('.js-start-us').text(language.start_us);
    $('.js-software').text(language.software);
    $('.js-startups').text(language.startups);
    $('.js-motivation').text(language.motivation);

    $('.js-title').text(language.title);
    $('.js-title-findpet').text(language.title_findpet);
    $('.js-findpet').text(" "+language.findpet);
    $('.js-title-ozon').text(language.title_ozon);
    $('.js-ozon').text(" "+language.ozon);
    $('.js-title-muvo').text(language.title_muvo);
    $('.js-muvo').text(" "+language.muvo);
    $('.js-title-mimegafono').text(language.title_mimegafono);
    $('.js-mimegafono').text(" "+language.mimegafono);
    $('.js-title-21ss').text(language.title_21ss);
    $('.js-21ss').text(" "+language.ssgaming);
    $('.js-books').text(language.books);
    $('.js-places').text(language.places);
    $('.js-created').text(language.created+" ");    
}

setDefaultLanguage();