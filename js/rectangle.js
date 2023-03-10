
document.getElementById('rectangle-btn').addEventListener('click', function(){
   console.log('click')
    const inputField = document.getElementById('input-rec');
    const newInputFieldString = inputField.value;
const newInputField = parseInt(newInputFieldString);
inputField.value = '';
if(isNaN(newInputField)){
    alert("please entry the number");
    return;
}
const inputFieldTwo = document.getElementById('input-rec-one');
const newInputFieldStringTwo = inputFieldTwo.value;
const newInputFieldTwo = parseFloat(newInputFieldStringTwo);
inputFieldTwo.value = '';

const totalArea = newInputField * newInputFieldTwo;


// area input
const inputFieldAreaElement = document.getElementById('total-area-two');
const inputFieldAreaString = inputFieldAreaElement.innerText;
const inputFieldArea = parseFloat(inputFieldAreaString);
inputFieldAreaElement.innerText = totalArea;


});