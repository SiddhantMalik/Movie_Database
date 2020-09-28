const AddMovieModal = document.getElementById("add-modal");
const startAddingButton = document.querySelector("header button");
const CancelButton = document.getElementsByClassName('btn btn--passive');
const AddButton = document.getElementsByClassName('btn btn--success');
const backdrop = document.getElementById('backdrop');
console.log(backdrop);



const startButtonFunction = () => {
  backdrop.id = "backdrop.visible";
  AddMovieModal.classList.toggle("visible");
};

const cancelButtonFunction = () => {
  AddMovieModal.className = "modal";
};

startAddingButton.addEventListener("click", startButtonFunction);

CancelButton.addEventListener("click", cancelButtonFunction);
