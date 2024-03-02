import { dbank } from "../../declarations/dbank";
window.addEventListener("load", async function() {
  update();
});

document.querySelector("form").addEventListener("submit",async function(event){
    event.preventDefault();
    console.log("submitted");

    const button=event.target.querySelector("#submit-btn");

    const amountTopUp=parseFloat(document.getElementById("input-amount").value);
    console.log(amountTopUp);
    button.setAttribute("disabled",false);
    if (document.getElementById("input-amount").value.length!=0){
        await dbank.topUp(amountTopUp);//top up the amount
    }

    const amountWithdrawl=parseFloat(document.getElementById("withdrawal-amount").value);
    console.log(amountWithdrawl);
    if(document.getElementById("withdrawal-amount").value.length!=0){
        await dbank.withdraw(amountWithdrawl);
    }

     update();
    
    document.getElementById("input-amount").value="";//clear the value
    document.getElementById("withdrawal-amount").value="";//clear the value
    
    button.removeAttribute("disabled");//re-enable the button
});


async function update(){
    const currentValue= await dbank.checkBalance();
    document.getElementById("value").innerText=Math.round(currentValue*100)/100;
}