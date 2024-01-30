

reset();

let tictactoeElement = [
    [document.querySelector('.js-00'),document.querySelector('.js-01'),document.querySelector('.js-02')],
    [document.querySelector('.js-10'),document.querySelector('.js-11'),document.querySelector('.js-12')],
    [document.querySelector('.js-20'),document.querySelector('.js-21'),document.querySelector('.js-22')]
];
let tictactoe = array(3).fill(array(3).fill(false))

console.log(tictactoeElement);

function reset(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            document.querySelector(".js-"+String(i)+String(j)).src = "images/Blank.png";
        }
    }
}

function play(row, column){
    let temp = document.querySelector(".js-"+String(row)+String(column)).src = "images/Blank.png";


   /*  if (temp.src === "http://127.0.0.1:5500/images/Blank.png"){
        temp.src="images/Circle.png"
        computer();
    } */
}


function computer(){

    while(true){

        row = Math.floor(Math.random()*3);
        column = Math.floor(Math.random()*3);
    
        if(tictactoeElement[row][column].src=== 'http://127.0.0.1:5500/images/Blank.png'){
            tictactoeElement[row][column].src = 'images/Cross.png';
            return
        }

    }

        
}


