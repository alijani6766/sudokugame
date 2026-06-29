// encoding: utf-8

let solution=[

[5,3,4,6,7,8,9,1,2],

[6,7,2,1,9,5,3,4,8],

[1,9,8,3,4,2,5,6,7],

[8,5,9,7,6,1,4,2,3],

[4,2,6,8,5,3,7,9,1],

[7,1,3,9,2,4,8,5,6],

[9,6,1,5,3,7,2,8,4],

[2,8,7,4,1,9,6,3,5],

[3,4,5,2,8,6,1,7,9]

];


let puzzle=[];

let selected=null;



function startGame(level){


document.getElementById("menu").style.display="none";

document.getElementById("game").style.display="block";



puzzle=JSON.parse(JSON.stringify(solution));



let remove;


if(level=="easy")
remove=35;


if(level=="medium")
remove=45;


if(level=="hard")
remove=55;



while(remove>0){

let r=Math.floor(Math.random()*9);

let c=Math.floor(Math.random()*9);


if(puzzle[r][c]!=0){

puzzle[r][c]=0;

remove--;

}

}



createBoard();


}





function createBoard(){


let board=document.getElementById("board");

board.innerHTML="";


for(let r=0;r<9;r++){


for(let c=0;c<9;c++){


let cell=document.createElement("div");


cell.className="cell";


cell.dataset.row=r;

cell.dataset.col=c;



if(puzzle[r][c]!=0){

cell.innerHTML=puzzle[r][c];

cell.classList.add("fixed");

}


cell.onclick=function(){

selectCell(cell);

}



board.appendChild(cell);


}


}


}





function selectCell(cell){


selected=cell;


let row=cell.dataset.row;

let col=cell.dataset.col;


document.querySelectorAll(".cell")
.forEach(x=>{

x.classList.remove("selected");
x.classList.remove("highlight");

});



cell.classList.add("selected");



document.querySelectorAll(".cell")
.forEach(x=>{


if(x.dataset.row==row || x.dataset.col==col)

x.classList.add("highlight");


});

}





function setNumber(num){


if(!selected)
return;



if(selected.classList.contains("fixed"))
return;



selected.innerHTML=num;


}





function checkGame(){


let cells=document.querySelectorAll(".cell");


let win=true;



cells.forEach(cell=>{


let r=cell.dataset.row;

let c=cell.dataset.col;



if(cell.innerHTML!=solution[r][c])

win=false;



});



if(win)

alert("آفرین! حل شد ??");

else

alert("هنوز اشتباه داری");



}