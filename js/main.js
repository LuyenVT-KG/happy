$('body').addClass("loaded");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
var getLang = document.getElementById('languages');

if (!localStorage.getItem('language')) {
    localStorage.setItem('language', "vi-VN");
}
if (localStorage.getItem('language')) {
    if (localStorage.getItem('language') === 'vi-VN') {
        if (document.querySelector('.option-language.language-en img.languageActive')) {
            document.querySelector('.option-language.language-en img.languageActive').classList.remove('languageActive');

        }
        document.querySelector('.option-language.language-vi img').classList.add('languageActive');

    }
    if (localStorage.getItem('language') === 'en-US') {
        document.querySelector('.option-language.language-vi img.languageActive').classList.remove('languageActive');
        document.querySelector('.option-language.language-en img').classList.add('languageActive');

    }
}


let arrayLabel = [];
Object.keys(labels).forEach(key => {

    arrayLabel.push(key)
});


function setElementHomeLang(language, element) {

    if (language === 'vi-VN') {
        $("#" + element).html(labels[element]["vi-VN"]).attr("title", labels[element]["vi-VN"]);
        if (element === 'UP_COURSES_CB001' ||
            element === 'UP_COURSES_VT002' ||
            element === 'UP_COURSES_QS001') {
            $("#" + element).html(labels[element]["vi-VN"]['name']).attr("title", labels[element]["vi-VN"]['name']);
            $("#" + element + "_startDate").html(labels[element]["vi-VN"]['startDate']).attr("title", labels[element]["vi-VN"]['startDate']);
        }
        if (element === 'UP_COURSES_CB001_SMALL_1' ||
            element === 'UP_COURSES_VT002_SMALL_1' ||
            element === 'UP_COURSES_QS001_SMALL_1') {
            $("#" + element).html(labels[element]["vi-VN"]['name']).attr("title", labels[element]["vi-VN"]['name']);
            $("#" + element + "_startDate").html(labels[element]["vi-VN"]['startDate']).attr("title", labels[element]["vi-VN"]['startDate']);
        }

    }
    if (language === 'en-US') {
        $("#" + element).html(labels[element]["en-US"]).attr("title", labels[element]["en-US"]);
        if (element === 'UP_COURSES_CB001' ||
            element === 'UP_COURSES_VT002' ||
            element === 'UP_COURSES_QS001') {
            $("#" + element).html(labels[element]["en-US"]['name']).attr("title", labels[element]["en-US"]['name']);
            $("#" + element + "_startDate").html(labels[element]["en-US"]['startDate']).attr("title", labels[element]["en-US"]['startDate']);
        }
        if (element === 'UP_COURSES_CB001_SMALL_1' ||
            element === 'UP_COURSES_VT002_SMALL_1' ||
            element === 'UP_COURSES_QS001_SMALL_1') {
            $("#" + element).html(labels[element]["en-US"]['name']).attr("title", labels[element]["en-US"]['name']);
            $("#" + element + "_startDate").html(labels[element]["en-US"]['startDate']).attr("title", labels[element]["en-US"]['startDate']);
        }
    }
}

arrayLabel.map((element, index) => {
    setElementHomeLang(localStorage.getItem('language'), element);
})

let arrayCourseList = [...courseList];

function setCourse(language, element, index) {

    $("#course_list").append(`
    <tr id=${index}>
        <td>${element.code}</td>
        <td>
            ${element.name[language]}
        </td>
        <td class="text-align-right">
            ${new Date(element.startDate).toLocaleDateString(language)}
        </td>
        <td class="text-align-right">
            ${new Date(element.endDate).toLocaleDateString(language)}
        </td>
        <td class="text-align-right">
            ${element.fee[language]}
            
        </td>
        <td>
            <div class='d-grid gap-2'>
                <button class='btn btn-success btn-lg' >
                    <i class='far fa-check-square'></i>
                </button >
            </div >
        </td > 
    </tr>

    `);
    $(`.body-table-${index}`).append(`
        
            <div class="table-name-course">${element.code}</div>
            <div class="table-name-course">
                ${element.name[language]}
            </div>
            <div class="table-name-course">
                ${new Date(element.startDate).toLocaleDateString(language)}
            </div>
            <div class="table-name-course">
                ${new Date(element.endDate).toLocaleDateString(language)}
            </div>
            <div class="table-name-course">
                ${element.fee[language]}
            </div>
            <div class="table-name-course">

            <div class='d-grid gap-2'>
                <button class='btn btn-success btn-lg' >
                    <i class='far fa-check-square'></i>
                </button >
            </div >

            </div>
        
    `)

}
function replaceCourse(language, element, index) {
    $(`#${index}`).replaceWith(`
        <tr id=${index}>
            <td>${element.code}</td>
            <td>
                ${element.name[language]}
            </td>
            <td class="text-align-right">
                ${new Date(element.startDate).toLocaleDateString(language)}
            </td>
            <td class="text-align-right">
                ${new Date(element.endDate).toLocaleDateString(language)}
            </td>
            <td class="text-align-right">
                ${element.fee[language]}
            </td>
            <td>
                <div class='d-grid gap-2'>
                    <button class='btn btn-success btn-lg' >
                        <i class='far fa-check-square'></i>
                    </button >
                </div >
            </td > 
        </tr>
    
    `);

    $(`.body-table-${index}`).replaceWith(`
        <td class="body-table-${index}">
                <div class="table-name-course">${element.code}</div>
                <div class="table-name-course">
                    ${element.name[language]}
                </div>
                <div class="table-name-course">
                    ${new Date(element.startDate).toLocaleDateString(language)}
                </div>
                <div class="table-name-course">
                    ${new Date(element.endDate).toLocaleDateString(language)}
                </div>
                <div class="table-name-course">
                    ${element.fee[language]}
                </div>
                <div class="table-name-course">

                <div class='d-grid gap-2'>
                    <button class='btn btn-success btn-lg' >
                        <i class='far fa-check-square'></i>
                    </button >
                </div >

                </div>
        </td>
    `)



}
arrayCourseList.map((element, index) => {
    setCourse(localStorage.getItem('language'), element, index);
})

getLang.onclick = (e) => {

    if (document.querySelector('.option-language img.languageActive')
        && e.target.closest('.option-language img')) {
        document.querySelector('.option-language img.languageActive').classList.remove('languageActive');

        localStorage.setItem('language', e.target.closest('.option-language').dataset.lang);
        e.target.closest('.option-language img').classList.add('languageActive');

        arrayLabel.map((element, index) => {
            setElementHomeLang(localStorage.getItem('language'), element);
        })
        for (var i = 0; i < arrayCourseList.length; i++) {
            replaceCourse(localStorage.getItem('language'), arrayCourseList[i], i);
        }


    }

}


