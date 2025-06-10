// Handles language selection and localization
let configDump, linesetDump;

function getCountryFlag(cc) {
    if (cc.length !== 2) return cc;
    function risl(chr) {
        return String.fromCodePoint(0x1F1E6 - 65 + chr.toUpperCase().charCodeAt(0));
    }
    return risl(cc[0]) + risl(cc[1]);
}

function dropDownFlipper() {
    let display = $(".languageList").css("display");
    display = display === "none" ? "block" : "none";
    $(".languageList").css("display", display);
}

function languageSetter(language) {
    localStorage.setItem("lang", language);
    location.reload();
}

function applyLanguage() {
    $.getJSON("languages/config.json").done(langConfigArray => {
        let language;
        configDump = langConfigArray;
        let setLang = localStorage.getItem("lang");
        language = setLang ? setLang : "English";

        const pageName = window.location.pathname.split('/').pop();
        let pageIndex = 0;
        if (pageName.indexOf('censor') !== -1) pageIndex = 1;
        else if (pageName.indexOf('decensor') !== -1) pageIndex = 2;
        else if (pageName.indexOf('faq') !== -1) pageIndex = 3;

        configDump.forEach(item => {
            if (item["name"] === language) {
                $(".languageSelector span").text(getCountryFlag(item["country-code"]));
                $.getJSON(`languages/${item["filename"]}`).done(lang => {
                    linesetDump = lang[pageIndex]["lineset"];
                    switch (pageIndex) {
                        case 0:
                            $(".title").text(linesetDump[0]);
                            $(".censorText").text(linesetDump[1]);
                            $(".decensorText").text(linesetDump[2]);
                            $(".content span:nth-child(1)").text(linesetDump[3]);
                            $(".content span:nth-child(2)").text(linesetDump[4]);
                            $(".content span:nth-child(3)").text(linesetDump[5]);
                            $(".content span:nth-child(4)").text(linesetDump[6]);
                            $(".content span:nth-child(5)").text(linesetDump[7]);
                            $(".navigationContainer a:nth-child(1)").text(linesetDump[8]);
                            $(".navigationContainer a:nth-child(2)").text(linesetDump[9]);
                            $(".navigationContainer a:nth-child(3)").text(linesetDump[10]);
                            $(".navigationContainer a:nth-child(4)").text(linesetDump[11]);
                            $(".versionContainer a:nth-child(1)").text(linesetDump[12]);
                            $(".versionContainer a:nth-child(2)").text(linesetDump[13]);
                            $(".versionContainer a:nth-child(3)").text(linesetDump[14]);
                            break;
                        case 1:
                            $(".uploadText").text(linesetDump[0]);
                            $(".fileDistinction").text(linesetDump[1]);
                            $("#textMod1").text(linesetDump[2]);
                            $("#textMod2").text(linesetDump[3]);
                            $("#textMod3").text(linesetDump[4]);
                            $("#textMod4").text(linesetDump[5]);
                            $("#textStyle1").text(linesetDump[6]);
                            $("#textStyle2").text(linesetDump[7]);
                            $("#textStyle3").text(linesetDump[8]);
                            $("#textStyle4").text(linesetDump[9]);
                            $("#textStyle5").text(linesetDump[10]);
                            $("#textMod5").text(linesetDump[11]);
                            $("#textDataInput").val(linesetDump[12]);
                            $(".zoomDialog .ui-dialog-title").text(linesetDump[13]);
                            $(".helpDialog .ui-dialog-title").text(linesetDump[14]);
                            $(".wall-of-text p").replaceWith(`<p>${linesetDump[15]}<br><br>${linesetDump[16]}<br><br>${linesetDump[17]}<br><br>${linesetDump[18]}<br><br>${linesetDump[19]}<br><br>${linesetDump[20]}<br><br>${linesetDump[21]}</p>`);
                            $(".toolboxDialog .ui-dialog-title").text(linesetDump[22]);
                            $("#addToolButton").prop("title", linesetDump[23]);
                            $("#toolRotateText").text(linesetDump[24]);
                            $("#addTextButton").text(linesetDump[25]);
                            $("#toolScaleText").text(linesetDump[26]);
                            $(".zoomTitle").text(linesetDump[27]);
                            $("#zoomStatus").text(linesetDump[28]);
                            $("#keyText").text(linesetDump[30]);
                            $("#keyHelpText").text(linesetDump[31]);
                            $("#filenameInputLabel").text(linesetDump[32]);
                            $("#undoButton").text(linesetDump[33]);
                            $("#redoButton").text(linesetDump[34]);
                            $("#downloadButton").text(linesetDump[35]);
                            $("[aria-describedby='fileTooBig'] .ui-dialog-title").text(linesetDump[36]);
                            $("[aria-describedby='notAnImage'] .ui-dialog-title").text(linesetDump[36]);
                            $("[aria-describedby='resTooLarge'] .ui-dialog-title").text(linesetDump[37]);
                            $("[aria-describedby='imageContainsPayload'] .ui-dialog-title").text(linesetDump[37]);
                            $("[aria-describedby='loading'] .ui-dialog-title").text(linesetDump[38]);
                            $("#notAnImage").text(linesetDump[39]);
                            $("#resTooLarge").text(linesetDump[40]);
                            $("#imageContainsPayload").text(linesetDump[41]);
                            $("#fileTooBig").text(linesetDump[42]);
                            $("#loading").text(linesetDump[43]);
                            $("[aria-describedby='fileTooBig'] .ui-button").text(linesetDump[45]);
                            $("[aria-describedby='notAnImage'] .ui-button").text(linesetDump[45]);
                            $("[aria-describedby='resTooLarge'] .ui-button").text(linesetDump[44]);
                            $("[aria-describedby='imageContainsPayload'] .ui-button").text(linesetDump[44]);
                            $(".helpDialog .ui-button").text(linesetDump[44]);
                            $("[aria-describedby='textModal'] .ui-button").text(linesetDump[46]);
                            $("[aria-describedby='textModal'] .ui-dialog-title").text(linesetDump[25]);
                            $(".navigationContainer a:nth-child(1)").text(linesetDump[49]);
                            $(".navigationContainer a:nth-child(2)").text(linesetDump[50]);
                            $(".navigationContainer a:nth-child(3)").text(linesetDump[51]);
                            $(".navigationContainer a:nth-child(4)").text(linesetDump[52]);
                            $(".versionContainer a:nth-child(1)").text(linesetDump[53]);
                            $(".versionContainer a:nth-child(2)").text(linesetDump[54]);
                            $(".versionContainer a:nth-child(3)").text(linesetDump[55]);
                            break;
                        case 2:
                            $(".uploadText").text(linesetDump[0]);
                            $(".fileDistinction").text(linesetDump[1]);
                            $("#keyText").text(linesetDump[2]);
                            $("#keyHelpText").text(linesetDump[3]);
                            $("#decensorButton").text(linesetDump[4]);
                            $("[aria-describedby='notAnImage'] .ui-dialog-title").text(linesetDump[5]);
                            $("[aria-describedby='notBetterCensorshipImage'] .ui-dialog-title").text(linesetDump[5]);
                            $("[aria-describedby='passwordIncorrect'] .ui-dialog-title").text(linesetDump[5]);
                            $("[aria-describedby='dataPayloadCorrupted'] .ui-dialog-title").text(linesetDump[5]);
                            $("[aria-describedby='loading'] .ui-dialog-title").text(linesetDump[6]);
                            $("#notAnImage").text(linesetDump[7]);
                            $("#notBetterCensorshipImage").text(linesetDump[8]);
                            $("#passwordIncorrect").text(linesetDump[9]);
                            $("#dataPayloadCorrupted").text(linesetDump[10]);
                            $("#loading").text(linesetDump[11]);
                            $("[aria-describedby='notAnImage'] .ui-button").text(linesetDump[13]);
                            $("[aria-describedby='notBetterCensorshipImage'] .ui-button").text(linesetDump[13]);
                            $("[aria-describedby='resTooLarge'] .ui-button").text(linesetDump[13]);
                            $("[aria-describedby='imageContainsPayload'] .ui-button").text(linesetDump[13]);
                            $(".navigationContainer a:nth-child(1)").text(linesetDump[14]);
                            $(".navigationContainer a:nth-child(2)").text(linesetDump[15]);
                            $(".navigationContainer a:nth-child(3)").text(linesetDump[16]);
                            $(".navigationContainer a:nth-child(4)").text(linesetDump[17]);
                            $(".versionContainer a:nth-child(1)").text(linesetDump[18]);
                            $(".versionContainer a:nth-child(2)").text(linesetDump[19]);
                            $(".versionContainer a:nth-child(3)").text(linesetDump[20]);
                            break;
                        case 3:
                            $(".FAQHeading").text(linesetDump[0]);
                            $(".faqItemHeading.faq1").text(linesetDump[1]);
                            $("p.faqItemDescription.faq1").replaceWith(`<p class="faqItemDescription faq1">${linesetDump[2]}</p>`);
                            $(".faqItemHeading.faq2").text(linesetDump[3]);
                            $("p.faqItemDescription.faq2").replaceWith(`<p class="faqItemDescription faq2">${linesetDump[4]}</p>`);
                            $(".faqItemHeading.faq3").text(linesetDump[5]);
                            $("p.faqItemDescription.faq3").replaceWith(`<p class="faqItemDescription faq3">${linesetDump[6]}</p>`);
                            $(".faqItemHeading.faq4").text(linesetDump[7]);
                            $("p.faqItemDescription.faq4").replaceWith(`<p class="faqItemDescription faq4">${linesetDump[8]}</p>`);
                            $(".faqItemHeading.faq5").text(linesetDump[9]);
                            $("p.faqItemDescription.faq5").replaceWith(`<p class="faqItemDescription faq5">${linesetDump[10]}</p>`);
                            $(".faqItemHeading.faq6").text(linesetDump[11]);
                            $("p.faqItemDescription.faq6").replaceWith(`<p class="faqItemDescription faq6">${linesetDump[12]}</p>`);
                            $(".faqItemHeading.faq7").text(linesetDump[13]);
                            $("p.faqItemDescription.faq7").replaceWith(`<p class="faqItemDescription faq7">${linesetDump[14]}</p>`);
                            $(".navigationContainer a:nth-child(1)").text(linesetDump[15]);
                            $(".navigationContainer a:nth-child(2)").text(linesetDump[16]);
                            $(".navigationContainer a:nth-child(3)").text(linesetDump[17]);
                            $(".navigationContainer a:nth-child(4)").text(linesetDump[18]);
                            $(".versionContainer a:nth-child(1)").text(linesetDump[19]);
                            $(".versionContainer a:nth-child(2)").text(linesetDump[20]);
                            break;
                    }
                });
            }
            $(".languageSelector .languageList").append(`\n                <div class="lang-item" onclick="languageSetter('${item["name"]}')">\n                    ${getCountryFlag(item["country-code"])}\n                </div>\n            `);
        });
    });
}

$(document).ready(applyLanguage);
