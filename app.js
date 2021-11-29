var intialPrice = document.querySelector("#intial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");

function calculateProfitAndLoss(intial, quantity, current){

    if(intial > current){
        var loss = (intial-current)* quantity;
        var lossPercentage = (loss/intial) * 100;
        showOutput(`Hey the loss is"+${loss}+"and the percentage is"+${lossPercentage}`);
    }else if(current > intial){
        var profit = (current - intial) * quantity;
        var proftPercentage = (profit/intial) * 100;
        showOutput(`Hey the profit is ${profit} and the percent is ${proftPercentage}`);
    }else{
        showOutput("No Pain no Gain, No Gain No Pain");
    }

}

function submitHandler(){
    var ip = Number(intialPrice.value);
    var qty = Number(stockQuantity.value);
    var current = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty, current);
}

function showOutput(message){
    outputBox.innerHTML = message;
    
}
submitBtn.addEventListener("click", submitHandler);