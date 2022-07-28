let haveCalculated = false;

function showValue(num)  { //Shows the calc value as it changes.
    if (haveCalculated == false) {
        document.getElementById("calc-result").value+=num;
    } else {
        document.getElementById("calc-result").value = ""
        document.getElementById("calc-result").value+=num;
        haveCalculated = false; 
    }

}

function solveValue()  {
    let x = document.getElementById("calc-result").value
    let y = eval(x)
    document.getElementById("calc-result").value = y
    haveCalculated = true;

}

function clearValue()  {
    document.getElementById("calc-result").value = "";
}

function deleteValue() {
    let input = document.getElementById("calc-result");
    input.value = input.value.slice(0, input.value.length - 1);
  }


function historyValues() {
  
}

let colors = ["red", "blue", "green", "purple", "white", ""];
let colorIndex = 0;

function changeCalculatorColor() {
    let col = document.getElementById("button-colour");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
}


