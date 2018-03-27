
function getNote() {
  let element = document.createElement( 'div' );
  element.classList.add( 'note' );  
  return element;
}

function addNoteToBoard( note ) {
  document.querySelector( '#board' ).appendChild( note );  
}

function showNewNoteForm () {
  document.querySelector("#overlay").classList.add('active');
}

document.querySelector("#pen").addEventListener( 'click', showNewNoteForm );

function submitNewNoteForm ( ) {
  var text = document.querySelector('#new-note-text').value;
  document.querySelector('#new-note-text').value = "";
  createNewNote ( text );
  document.querySelector("#overlay").classList.remove('active');
}

document.querySelector("#new-note-add").addEventListener( 'click', submitNewNoteForm );

/* zadania */

function createNewNote(text = "dokupić więcej karteczek") {
    const newNoteElement = getNote();
    newNoteElement.innerHTML = text;
//    newNoteElement.classList.add('red-text');
    addNoteToBoard(newNoteElement);
}

createNewNote('Moja nowa notatka');

function timeoutTest() {
    console.log('testujemy');
}

setTimeout(timeoutTest, 10000);

function makeItImportant() {
    let notes = document.querySelectorAll('.note');
    for(let i = 0; i < notes.length; i++) {
        notes[i].classList.add('red-text');
    }  
}

setTimeout(makeItImportant, 5000);

//const hiNote = createNewNote('Cześć!');

setTimeout(function() {
    createNewNote('Cześć!');
}, 2000);

setTimeout(function() {
    createNewNote('Marta');
}, 2000);

/* dodatkowe */

function createNoteWithDoneBtn() {
    const noteWithBtn = getNote();
    noteWithBtn.innerHTML = 'notatka z buttonem';
    const closeBtn = document.createElement('button');
    const btnX = document.createTextNode('X');
    closeBtn.appendChild(btnX);
    noteWithBtn.appendChild(closeBtn);
    addNoteToBoard(noteWithBtn);
}

//createNoteWithDoneBtn();
