var language;

function setDefaultLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
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
        contentType: "application/json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (lang) {
            language = lang;
            setTranslate();
        }
    });
}

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
    $('.js-title-muvo').text(language.title_muvo);
    $('.js-muvo').text(" "+language.muvo);
    $('.js-title-mimegafono').text(language.title_mimegafono);
    $('.js-mimegafono').text(" "+language.mimegafono);
    $('.js-title-21ss').text(language.title_21ss);
    $('.js-21ss').text(" "+language.ssgaming);
    
}

setDefaultLanguage();