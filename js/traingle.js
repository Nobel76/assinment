// triangle

document.getElementById('btn-calculate').addEventListener('click', function(){
   
    const inputField = document.getElementById('input-fieldOne');
    const newInputFieldString = inputField.value;
const newInputField = parseInt(newInputFieldString);

// emty :
inputField.value = '';
if(isNaN(newInputField)){
    alert("please entry the number");
    return;
}
// same input 2 
// i am sorry i can't  common function use-

const inputFieldTwo = document.getElementById('input-fieldTwo');
const newInputFieldStringTwo = inputFieldTwo.value;
const newInputFieldTwo = parseFloat(newInputFieldStringTwo);
// emty
inputFieldTwo.value = '';

const totalArea = newInputField * newInputFieldTwo;
const total = totalArea * 0.5;

// area input
const inputFieldAreaElement = document.getElementById('total-area');
const inputFieldAreaString = inputFieldAreaElement.innerText;
const inputFieldArea = parseFloat(inputFieldAreaString);
inputFieldAreaElement.innerText = total;

});

// delete button==

document.getElementById('btn-dele').addEventListener('click', function(){

const element = document.getElementById('total-area');
element.parentNode.removeChild(element);
})


// blog button add

document.getElementById('btn-blog').addEventListener('click', function(){
    console.log('click')
    window.location.href ='question.html';
});
document.getElementById('check-btn').addEventListener('click', function(){
    alert('sorry i cant work')
})
