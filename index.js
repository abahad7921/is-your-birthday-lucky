const dob = document.querySelector("#dob");
const luckyno = document.querySelector("#luckyno");
const checkBtn = document.querySelector("#check");
const message = document.querySelector("#message-box");


function getSum(dob){

    let sum = 0;
    const dt = dob.replaceAll("-","");

    for(let i=0;i<dt.length;i++)
    {
        sum = sum + Number(dt.charAt(i));
    }

    return sum;
}

function hideMessage(){
    message.style.display = "none"; //change the display value to none everytime the button is clicked
}

function showErrorMessage(string){
    message.style.display = "block";
    message.innerText = string;
}
checkBtn.addEventListener('click',()=>{
   
    hideMessage();
    const sum = getSum(dob.value);

    if(sum % Number(luckyno.value) == 0)
    {
        console.log("your birthday is lucky");
        showErrorMessage("your birthday is lucky 🚀")

    }
    else{
        console.log("your birthday is not lucky");
        showErrorMessage("your birthday is not lucky")
    }

});