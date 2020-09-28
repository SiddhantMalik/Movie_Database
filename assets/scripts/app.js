const addMovieModal =  document.getElementById('add-modal');
const addButton = document.querySelector('header button')
const finalAddButton = document.body.children[1].children[1].children[1];
const cancelButton = document.body.children[1].children[1].children[0];
const backdrop = document.getElementById('backdrop');


function functionCancelButtonClickHandler(){
  functionMovieModalToggle();
  functionBackdropToggle()
}

function functionAddButtonClickHandler(){
  functionMovieModalToggle();
  functionBackdropToggle()
}

function functionMovieModalToggle(){
  addMovieModal.classList.toggle('visible');
  
}

function functionBackdropToggle(){
backdrop.classList.toggle('visible');
}

addButton.addEventListener("click", functionAddButtonClickHandler);
cancelButton.addEventListener("click", functionCancelButtonClickHandler);


