const input = document.querySelector('.guest_name');
const button = document.querySelector('.add_btn');
let guestName;

const removeBtn = document.querySelector('.remove_btn');
const cookieName= 'guestName';

function getName() {
    guestName = input.value;
//    console.log(guestName);
    localStorage.setItem('guestName', guestName);
}

function displayName() {
    if(localStorage.getItem('guestName')) {
    input.value = localStorage.getItem('guestName');
    }
}

function removeCookie() {
    localStorage.removeItem('guestName');
}

//displayName();

button.addEventListener('click', getName);
removeBtn.addEventListener('click', removeCookie);
