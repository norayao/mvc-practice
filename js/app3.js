import '../css/app3.css'
import $ from 'jquery'

const $figure = $('#app3 .figure')

$figure.on('click', ()=>{
    $figure.toggleClass('active')
})