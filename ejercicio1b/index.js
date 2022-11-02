'use strict'

const newButton= document.createElement('button');
const buttonContent = document.createTextNode('1 botón');
newButton.appendChild(buttonContent);

const bodyContent = document.body;
bodyContent.appendChild(newButton)

function mouseOver(){
    newButton.innerHTML = '1 botóN';
}
function mouseOut(){
    newButton.innerHTML = '1 botón';
}


newButton.addEventListener('mouseover', mouseOver)
newButton.addEventListener('mouseout', mouseOut)
