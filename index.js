


const tictactoeElement = [
    [document.querySelector('.js-00'),document.querySelector('.js-01'),document.querySelector('.js-02')],
    [document.querySelector('.js-10'),document.querySelector('.js-11'),document.querySelector('.js-12')],
    [document.querySelector('.js-20'),document.querySelector('.js-21'),document.querySelector('.js-22')]
];

const resultElement = document.querySelector('.js-result')

let tictactoe = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]



let winner = '';

reset();
console.log(tictactoeElement);
console.log(tictactoe);

function reset(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            document.querySelector(".js-"+String(i)+String(j)).src = "images/Blank.png";
        }
    }
    tictactoe = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    winner = '';
    resultElement.textContent = winner;
}

function play(row, column){
    if(winner != ''){
        return
    }
    if(!tictactoe[row][column]){
        tictactoe[row][column] = 1;
        tictactoeElement[row][column].src='images/Circle.png';

        check();
        computer();
        check();
    }

}


function computer(){
    if(winner != ''){
        return
    }

    let count = 0;
    while(true){
        count++;
        if(count > 50){
            break;
        }
        row = Math.floor(Math.random()*3);
        column = Math.floor(Math.random()*3);
    
        if(!tictactoe[row][column]){
            tictactoe[row][column] = -1;
            tictactoeElement[row][column].src = 'images/Cross.png';
            console.log(tictactoe);
            return
        }
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(!tictactoe[row][column]){
                tictactoe[row][column] = -1;
                tictactoeElement[row][column].src = 'images/Cross.png';
                console.log(tictactoe);
                return
            }
        }
    }
}

function check(){

    //console.log(tictactoe);

    //console.log("we're adding " + tictactoe[0][0] + " with " + tictactoe[0][1] + " with " + tictactoe[0][2] + " which gives us = " + String(Number(tictactoe[0][0])+Number(tictactoe[0][1])+Number(tictactoe[0][2])))

    if(winner != ''){
        return;
    }

    let end = true;
    let temp = 0;
    for(let i = 0; i < 3; i++){
        temp = tictactoe[i][0]+tictactoe[i][1]+tictactoe[i][2];
        if(temp===3){
            winner = 'You win';
        }
        if(temp===-3){
            winner = 'You lose';
        }
        temp = tictactoe[0][i]+tictactoe[1][i]+tictactoe[2][i];
        if(temp===3){
            winner = 'You win';
        }
        if(temp===-3){
            winner = 'You lose';
        }
        for(let j = 0; j < 3; j++){
            if(tictactoe[i][j] == 0){
                end = false
            }
        }
    }
    temp = tictactoe[0][0]+tictactoe[1][1]+tictactoe[2][2];
    if(temp===3){
        winner = 'You win';
    }
    if(temp===-3){
        winner = 'You lose';
    }
    temp = tictactoe[2][0]+tictactoe[1][1]+tictactoe[0][2];
    if(temp===3){
        winner = 'You win';
    }
    if(temp===-3){
        winner = 'You lose';
    }
    
    if(end && winner == ''){
        winner = 'Draw'
    }
    
    if(winner != ''){
        resultElement.textContent = winner;
    }


}
