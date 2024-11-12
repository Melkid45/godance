function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}



$('.option__item').on('click', function(e){
    $(this).toggleClass('active')
    
    $(this).parent().next('button').removeAttr('disabled')
})
$('.choose__item').on('click', function(e){
    $(this).addClass('active')
    $('.choose__item').not(this).removeClass('active')
    let index = $(this).parent('div').parent().index()
    $('.section')[index].classList.add('dshow')
    setTimeout(() => {
        $('.section')[index + 1].classList.add('show')
        $('.main__ellipse').addClass('active')
    }, 500);
    $('.header__toggle').each(function(e){
        $(this).removeClass('active')
    })
})
$('.main__body-first-block-item').on('click', function(e){
    let index = $(this).parent('div').parent().index()
    $('.section')[index].classList.add('dshow')
    setTimeout(() => {
        $('.section')[index + 1].classList.add('show')
        $('.main__ellipse').addClass('active')
    }, 500);
    $('.header__toggle').each(function(e){
        $(this).removeClass('active')
    })
})
$('.option__button').on('click', function(e){
    let index = $(this).parent('div').index()
    $('.section')[index].classList.add('dshow')
    setTimeout(() => {
        $('.section')[index + 1].classList.add('show')
        $('.main__ellipse').addClass('active')
    }, 500);
    $('.header__toggle').each(function(e){
        $(this).removeClass('active')
    })
})

$('.banner__btn').on('click', function(e){
    let index = $(this).parent('div').index()
    $('.section')[index].classList.add('dshow')
    setTimeout(() => {
        $('.section')[index + 1].classList.add('show')
    }, 500);
    $('.main__ellipse').removeClass('active')
    let col = 0
    let step = $(this).parent('div').attr('data-tab')
    $('.header__body-line span').each(function(e){
        if (step > col){
            $(this).addClass('show')
        }
        col++
    })
    $('.header__body-top-step span').text($(this).parent('div').attr('data-tab'))
    $('.header__toggle').each(function(e){
        $(this).addClass('active')
    })
})

$('.header__body-top-back').on('click', function(e){
    $('.section').each(function(e){
        if($(this).hasClass('show') && !$(this).hasClass('dshow')){
            if ($(this).hasClass('main__body-banner')){
                $('.main__ellipse').removeClass('active')
            }
            if ($(this).hasClass('main__body-option')){
                setTimeout(() => {
                    $('.main__ellipse').addClass('active')
                }, 500);
            }
            console.log($(this).index())
            let index = $(this).index()
            localStorage.setItem('index', index)
        }
    })
    let indexSection = localStorage.getItem('index')
    $('.section')[indexSection].classList.remove('show')
    setTimeout(() => {
        $('.section')[indexSection - 1].classList.remove('dshow')
        $('.section')[indexSection - 1].classList.remove('dshow')
    }, 500);
})