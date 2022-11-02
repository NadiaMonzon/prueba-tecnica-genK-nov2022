'use strict'

    const bodyContent = document.body;

for (let i = 1; i < 11; i++) {

    const newButton= document.createElement('button');
    const buttonContent = document.createTextNode(i + ''+ 'botón');
    newButton.appendChild(buttonContent);
    
    bodyContent.appendChild(newButton)
    
}