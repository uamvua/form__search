const formWrap = $('.form__wrap');
const formTabsContent = $('.form__tabs-content');
const clear = document.querySelector('#clear');
const formCheckbox = document.querySelectorAll('.form__checkbox');
const formCheckCount = document.querySelectorAll('.form__check-count');
const formCheckText = document.querySelectorAll('.form__chek-text');
const formItemInput = document.querySelectorAll('.form__item-input');
const formCheck = document.querySelectorAll('.form__check');
const inputLocality = document.querySelector('#input-locality');
const inputTract = document.querySelector('#input-tract');
const inputSnt = document.querySelector('#input-snt');
const inputCottage = document.querySelector('#input-cottage');
var count = 0;

$(document).ready(function() {
    formWrap.on('click', '.form__tabs-item', function() {
        formWrap.find('.active').removeClass('active');
        $(this).addClass('active');
        formTabsContent.eq($(this).index()).addClass('active');
    });
});

for (let i=0; i<formCheckbox.length; i++) {
    formCheckbox[i].addEventListener('change', function() {
        if (formCheckbox[i].checked==true) {
            count=count+parseInt(formCheckCount[i].innerHTML);
            console.log(count);
        }
        
        if (formCheckbox[i].checked==false) {
            count=count-parseInt(formCheckCount[i].innerHTML);
            console.log(count);
        }
    })
}

clear.addEventListener('click', function(e) {
    e.preventDefault();
    for (let i=0; i<formCheckbox.length; i++) {
        if (formCheckbox[i].checked==true) {
            formCheckbox[i].checked=false;    
        }
    }
    console.clear();
    count = 0;
});

function isMatching(full, chunk) {
    const res = (full.toLowerCase().indexOf(chunk.toLowerCase()) != -1) ? true : false;

    return res;
}

function search(input) {
    input.addEventListener('keyup', function() {
        const value = input.value
        for (let i=0; i<formCheckText.length; i++) {
            if (input.nextElementSibling.contains(formCheckText[i])) {
                if (!isMatching(formCheckText[i].innerText, value)) {
                    formCheckText[i].closest('li').style.display = 'none';
                } else {
                    formCheckText[i].closest('li').style.display = 'flex';
                };
            }
        }        
    });
}

search(inputLocality);
search(inputTract);
search(inputSnt);
search(inputCottage);