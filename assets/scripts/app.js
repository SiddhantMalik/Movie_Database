const addMovieModal =  document.getElementById('add-modal');
const addButton = document.querySelector('header button')
const finalAddButton = document.body.children[1].children[1].children[1];
const cancelButton = document.body.children[1].children[1].children[0];
const backdrop = document.getElementById('backdrop');


const functionCancelButtonClickHandler = () => {
  functionMovieModalToggle();
}

const functionAddButtonClickHandler = () => {
  functionMovieModalToggle();
}

const functionMovieModalToggle = () => {
  addMovieModal.classList.toggle('visible');
  functionBackdropToggle();
  
}

 functionBackdropToggle = () => {
backdrop.classList.toggle('visible');
}

addButton.addEventListener("click", functionAddButtonClickHandler);
backdrop.addEventListener("click", functionMovieModalToggle);
cancelButton.addEventListener("click", functionCancelButtonClickHandler);


