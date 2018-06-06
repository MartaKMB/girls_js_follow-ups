document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input');
    const itemsList = document.querySelector('ul');
    const addBtn = document.querySelector('add-btn');
    
    function addElementToList() {
        let inputValue = input.value;
        let listElement = document.crea('li');
        itemsList.appendChild(listElement);
        listElement.textContent(inputValue);
    }
    
    document.addEventListener('click', addElementToList);
}