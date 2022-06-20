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
    $('.js-intro').text(language.intro);
    $('.js-start-us').text(language.startus);
    $('.js-software').text(language.software);
}

setDefaultLanguage();