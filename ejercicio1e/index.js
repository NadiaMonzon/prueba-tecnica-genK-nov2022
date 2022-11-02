'use strict'

    const bodyContent = document.body;

for (let i = 1; i < 1001; i++) {

    const newButton= document.createElement('button');
    const buttonContent = document.createTextNode(i + ' '+ 'botón');
    newButton.appendChild(buttonContent);
    
    bodyContent.appendChild(newButton)

    function changeTheLetterOnMouseOver(){
        newButton.innerHTML = '1 botóN';
    }
    function changeTheLetterOnMouseOut(){
        newButton.innerHTML = '1 botón';
    }
    
    
    newButton.addEventListener('mouseover', changeTheLetterOnMouseOver)
    newButton.addEventListener('mouseout', changeTheLetterOnMouseOut)
}