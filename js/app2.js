import "../css/app2.css";
import $ from "jquery";

const $title = $('.title');
const $content = $('.content');

$title.on('click','li', (e) => {
    let $li = $(e.currentTarget);
    $li.addClass('selected').siblings().removeClass('selected');

    let index = $li.index();

    $content.children().eq(index).addClass('active').siblings().removeClass('active');
});

$title.children().eq(0).trigger('click')

