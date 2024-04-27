let Button = document.getElementById('btn');
let todoContainer = document.getElementById('todoContainer');
let Input = document.getElementById('inputField');


Button.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value="";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";

    })
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);

    })

})
