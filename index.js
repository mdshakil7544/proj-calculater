const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars =["%", "*", "/","", "-", "+", "="]
let output = "";

// Define function to calculate baased on button clicked.
const calculate = (btnValue) =>{
    if(btnValue === "=" && output !== ""){
        //if output has "%" replace with '/100' before evaluating.
        output = eval(output.replace("%","/100"));
    }else if (btnValue ==="AC"){
        output =""
    }else if (btnValue ==="DEL"){
        //if DEL button is remove the last characterr from the ooutput.
        output = output.toString().slice(0, -1);
    }else{
        ////output is empty and button is specialChars then return.
        if(output ==="" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value =output;
};

buttons.forEach(button =>{

    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});