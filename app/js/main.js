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



$('.main__body-option-block-item').on('click', function(e){
    $(this).addClass('active')
    $('.main__body-option-block-item').not(this).removeClass('active')
    $(this).parent().next('button').removeAttr('disabled')
})

$('.main__body-first-block-item').on('click', function(e){
    let index = $(this).parent('div').parent().index()
    $('.section')[index].classList.remove('show')
    $('.section')[index + 1].classList.add('show')
    $('.main__ellipse').addClass('active')
    $('.header__toggle').each(function(e){
        $(this).removeClass('active')
    })
})


$('.banner__btn').on('click', function(e){
    let index = $(this).parent('div').index()
    $('.section')[index].classList.remove('show')
    $('.section')[index + 1].classList.add('show')
    $('.main__ellipse').removeClass('active')
    let col = 0
    $('.header__body-line span').each(function(e){
        if (index+1 > col){
            $(this).addClass('show')
        }
        col++
    })
    $('.header__body-top-step span').text(index+1)
    $('.header__toggle').each(function(e){
        $(this).addClass('active')
    })
})