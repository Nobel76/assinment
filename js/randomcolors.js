const allColors = document.getElementById('all-colors')
allColors.addEventListener('mouseover', generateAllColors)

function generateAllColors(){
    let hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    allColors.style.backgroundColor = hex;
};
