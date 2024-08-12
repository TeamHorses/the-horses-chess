$(document).ready(function(){

    const $board = $('#board');

    for (let i = 0; i < 64; i++) {
        const $cell = $('<div>');

        $cell.addClass((Math.floor(i / 8) % 2 === i % 2) ? 'white' : 'black' );
        $board.append($cell);  
    }
})