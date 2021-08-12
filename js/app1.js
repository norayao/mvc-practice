import "../css/app1.css";
import $ from "jquery";

const $add = $('#add');
const $minus = $('#minus');
const $multiply = $('#multiply');
const $divide = $('#divide');
const $number = $('#number');

// loading value from local storage or initializing
const local_storage = localStorage.getItem('n');
$number.text(local_storage || 100);

$add.on('click', () => {
    let add_value = parseInt($number.text()) + 1;
    localStorage.setItem('n', add_value);
    $number.text(add_value);
});

$minus.on('click', () => {
    let minus_value = parseInt($number.text()) - 1;
    localStorage.setItem('n', minus_value);
    $number.text(minus_value);
});

$multiply.on('click', () => {
    let multiply_value = parseInt($number.text()) * 2;
    localStorage.setItem('n', multiply_value);
    $number.text(multiply_value);
});

$divide.on('click', () => {
    let divide_value = parseInt($number.text()) / 2;
    localStorage.setItem('n', divide_value);
    $number.text(divide_value);
})