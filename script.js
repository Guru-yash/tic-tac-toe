console.log('WELCOME TO TIC TAC TOE WORLD');

let turn="X";
let num="1";
let gameover=false;

const changenum =()=>
{
    return num === "1"? "2":"1"
}

const changeturn = ()=>
{
    return turn === "X"? "0":"X"
}

const checkWin=()=>
{
    let boxt = document.getElementsByClassName('boxt');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxt[e[0]].innerText === boxt[e[1]].innerText) &&
           (boxt[e[2]].innerText === boxt[e[1]].innerText) &&
           (boxt[e[0]].innerText !== "")){

            document.querySelector('.info').innerText = boxt[e[0]].innerText + " Won";
            gameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "100px"

           }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxt = element.querySelector('.boxt');
    element.addEventListener('click' ,()=>{
        if(boxt.innerText === ''){
            boxt.innerText=turn;
            turn=changeturn();
            num=changenum();
            checkWin();
            if(!gameover)
            {document.getElementsByClassName("info")[0].innerText="Player "+ num + ":  "+ turn;}
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxt');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn="X";
    num="1";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Player "+num+": "+ turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
})
