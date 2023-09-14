 let search = $("#search");
 let searchWrapper = $('.search-wrapper');

 search.on('focus',function(){
    searchWrapper.css({
        width:'98%',
        border:'2px solid #36AFFE'
    })
 })
 search.on('focusout',function(){
    searchWrapper.css({
        width:'90%',
        border:'2px solid transparent'
    })
 })


$('.menu_icons').click(function(){
  document.querySelector('header nav').classList.toggle('active');
  document.querySelector('.menu_icons').classList.toggle('activ')
})

console.log(document.querySelector('.contact').offsetHeight);