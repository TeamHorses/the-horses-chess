$(document).ready(function(){ //El método ready está esperando a que la página cargue para ejecutarse la función anónima//

    const $board = $('#board'); // La constante $board sera igual al ID del elemento html: board, es decir que lo selecciona para futuras operaciones  //

    for (let i = 0; i < 64; i++) {
        const $cell = $('<div>');               // La  constante $cell será igual a una creación div sin añadirse aún //
        const row = Math.floor(i / 8);          //La constante row será igual al entero mas cercano de i / 8//
        const col = i % 8;                      // La constante col será igual al sobrante de i / 8 //

        const isWhite = (row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1);   //Aquí se declara una constante para determinar si la celda es blanca mediante operadores. Al final la constante 'isWhite' será verdadera o falsa //
        $cell.addClass(isWhite ? 'white' : 'black'); //Aquí se añadirá una clase a la variable que creamos llamada $cell, sin embargo, la case que será añadida dependerá si "iswhite" es verdadero o es falso. Si es verdadero, se añadirá la clase "white", de lo contrario, se añadirá "black"//

        $cell.addClass(`cell cell-${row}-${col}`); //Luego se añadirán las clases cell y cell con las clases de css dependiendo la columna y la fila//
        $board.append($cell);  //El append sirve para agregar elementos html luego del selector. En este caso estamamos añadiendo un div ($cell), después del elemento de apertura del tablero de ajedrez. Es decir: <div id='board'> *nuevo elemento html* </div>  )//
    }
})