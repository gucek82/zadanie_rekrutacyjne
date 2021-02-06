import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './scss/index.scss'
import $ from 'jquery'
import video from '../public/inc/filmik.mp4';


$(window).on("scroll", function(){
    if(window.innerWidth >= 992 && window.pageYOffset > 0 )
    $('.logo_container').addClass('fixed')
    else {
        $('.logo_container').removeClass('fixed')
    } 
    if(window.innerWidth < 992 && window.pageYOffset > 0 ) {
        $('header').addClass('fixed')
    }  else {
        $('header').removeClass('fixed')
    } 
})


