let reset_btn=document.querySelector('#reset-btn')
let boxes=document.querySelectorAll('.box')
let score=document.querySelector('.score')
let winner=document.querySelector('.winner')
let new_btn=document.querySelector('#new-btn')
let turnO= true
let mode='white'
let mode_btn=document.querySelector("#mode")

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
all=[0,1,2,3,4,5,6,7,8]
boxes.forEach((box)=>{
   box.addEventListener('click',()=>{
    if(turnO){
        console.log(boxes.indexOf(box))
        box.innerText='O'
        turnO=false
    }
    else{
        box.innerText='X'
        turnO=true
    }
    box.disabled=true
    checkwinner()
   })
})
const checkwinner=()=>{
    for(let pattern of winpattern){
            let pos1value=boxes[pattern[0]].innerText
            let pos2value=boxes[pattern[1]].innerText
            let pos3value=boxes[pattern[2]].innerText
        if(pos1value!='' && pos2value!='' && pos3value!=''){
            if(pos1value===pos2value && pos2value===pos3value){
                showwinner(pos1value)
                disableboxes()
            }
        }
    }
}
const showwinner=(x)=>{
    console.log('Helo')
    winner.innerText=`Congratulation , Winner is ${x}`
    score.classList.remove('hide')
    console.log('Helo')

}
const resetgame=()=>{
    turnO=true
    enableboxes()
    score.classList.add('hide')
   
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
new_btn.addEventListener('click',resetgame)
reset_btn.addEventListener('click',resetgame)