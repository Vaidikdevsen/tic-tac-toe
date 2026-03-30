let box = document.querySelectorAll('.box');
let rst = document.querySelector('#rst');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let darklight = document.querySelector('#dark-light');
let icon = document.querySelector('#dark-light i');

let turnO = true;
let turnX = false;
rst.disabled = true
msgcontainer.classList.add('hide');

let arr =[[0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
];

box.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box clicked');
        if(turnO === true){
            // Handle O's turn
            box.innerHTML = 'O';
            turnO = false;
            turnX = true;
        }
        else if(turnX === true){
            // Handle X's turn
            box.innerHTML = 'X';
            turnX = false;
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () => {
    box.forEach((box) => {
        box.disabled = true;
    })};

const enableBoxes = () => {
    box.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    })};

const showWinner = (winner) => { 
    msg.innerText = winner + ' wins!';
    msgcontainer.classList.remove('hide');
    disableBoxes();
    rst.disabled = false;
}

const checkWinner = () => {
    for (let pattern of arr) {

        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return; // stop further checking
            }
        }
    }
};
const resetgame = () => {
    turnO =true
    turnX = false;
    msgcontainer.classList.add('hide');
    enableBoxes();
    rst.disabled = true;

};

rst.addEventListener('click', resetgame);

darklight.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
     if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});