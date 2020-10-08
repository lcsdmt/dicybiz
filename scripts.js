let body = document.getElementsByTagName("body")[0]

let makeDieBtn = document.createElement("button");
makeDieBtn.id = "DiceMaker";
makeDieBtn.innerText = "New Die";

let rollBtn = document.createElement("button");
rollBtn.id = "rollBtn";
rollBtn.innerText = "Roll";

let dieSumBtn = document.createElement("button");
dieSumBtn.id = "dieSumBtn";
dieSumBtn.innerText = "Sum";

let btnContainer = document.createElement("div");
btnContainer.id = "btnContainer";

let dieDiv = document.createElement("div");
dieDiv.id = "dieDiv"

let dieArr = [];
let sumArr = [];
let counter = 0;

btnContainer.appendChild(makeDieBtn);
btnContainer.appendChild(rollBtn);
btnContainer.appendChild(dieSumBtn);
body.appendChild(btnContainer);
// body.appendChild(divContainer);
body.appendChild(dieDiv);


class Die {
    constructor(value) {
        this.value = value;
        this.dice = document.createElement("div");
        this.dice.className = "dice";
        this.dice.id = counter;
        this.roll();
        dieDiv.appendChild(this.dice)
        dieArr.push(this)
        this.dice.addEventListener("click", () =>{
            this.roll();
        })
        this.dice.addEventListener("dblclick", () => {
            document.getElementById("dieDiv").removeChild(this.dice);
            let index = dieArr.indexOf(this);
            dieArr.splice(index,1);
        })
    }
    roll() {
        let ranVal = (Math.floor(Math.random() * 6) + 1)
        this.value = ranVal;
        this.dice.innerText = this.value
    }
};

makeDieBtn.addEventListener("click", () => {
    new Die();
});

rollBtn.addEventListener("click", () => {
    dieArr.forEach(dice => {
        dice.roll();
    })
});

dieSumBtn.addEventListener("click", () => {
    
    dieArr.forEach(dice => {
        sumArr.push(dice.value);
    }
    )
    
    let total = sumArr.reduce(function (a, b) {
        return a + b;
    }, 0);
    alert(`Total: ${total}`)
    sumArr = []
});