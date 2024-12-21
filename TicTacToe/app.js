let boxes = document.querySelectorAll(".btn")
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true
let count =0
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log('');
        if (turn0) {
            btn.innerText = "O"
            turn0 = false
        }
        else {
            btn.innerText = 'X'
            turn0 = true
        }
        btn.disabled = true
        count++
       let iswinner= calcWinner();
       if(count===9 && !iswinner){
        gameDraw();
       }
    })
})
const calcWinner = () => {
    for (let pattern of winpattern) {
        let var1 = boxes[pattern[0]].innerText
        let var2 = boxes[pattern[1]].innerText
        let var3 = boxes[pattern[2]].innerText
        if (var1 != "" && var2 != "" && var3 != "") {
            if (var1 === var2 && var2 === var3) {
                showwinner(var1);
            }
        }
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes()
}
const enableboxes = () => {
    for (btn of boxes) {
        btn.disabled = false;
        btn.innerText = "";
    }
};
const resetgame = () => {
    turn0 = true
    count = 0
    enableboxes()
    msgContainer.classList.add("hide");

};
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);