'use strict'

const newButton= document.createElement('button');
const buttonContent = document.createTextNode('1 botón');
newButton.appendChild(buttonContent);

const bodyContent = document.body;
bodyContent.appendChild(newButton)

function changeTheLetterOnMouseOver(){
    newButton.innerHTML = '1 botóN';
}
function changeTheLetterOnMouseOut(){
    newButton.innerHTML = '1 botón';
}


newButton.addEventListener('mouseover', changeTheLetterOnMouseOver)
newButton.addEventListener('mouseout', changeTheLetterOnMouseOut)
