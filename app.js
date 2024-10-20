let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function (){
    if(started==false)
    {
        started=true;
        console.log("game is started");

        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);

}
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;


    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}
function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>
        {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        Rest();
    }
}
function btnPress(){

    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}

function Rest()
{
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}