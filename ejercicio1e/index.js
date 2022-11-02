'use strict'

    const bodyContent = document.body;

for (let i = 1; i < 1001; i++) {

    const newButton= document.createElement('button');
    const buttonContent = document.createTextNode(i + ' '+ 'botón');
    newButton.appendChild(buttonContent);
    
    bodyContent.appendChild(newButton)

    function mouseOver(){
        newButton.innerHTML = i + ' ' + 'botóN';
    }
    function mouseOut(){
        newButton.innerHTML = i + ' ' + 'botón';
    }

    newButton.addEventListener('mouseover', mouseOver)
    newButton.addEventListener('mouseout', mouseOut)
}