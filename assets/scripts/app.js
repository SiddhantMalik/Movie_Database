const addMovieModal = document.getElementById("add-modal");

const addButton = document.querySelector("header button");

const resetButton = document.body.children[1].children[1].children[2];


const finalAddButton = document.body.children[1].children[1].children[1];

const cancelButton = document.body.children[1].children[1].children[0];

const backdrop = document.getElementById("backdrop");

const userImageUrl = document.getElementById("image-url");
const userTitle = document.getElementById("title");
const userRating = document.getElementById("rating");

const movies = [];

function clearInputs(){
  userImageUrl.value = "";
  userTitle.value = "";
  userRating.value = "";
  
}
var elm;

function isValidURL(u) {
  if (!elm) {
    elm = document.createElement("input");
    elm.setAttribute("type", "url");
  }
  elm.value = u;
  return elm.validity.valid;
}

const functionCancelButtonClickHandler = () => {
  functionMovieModalToggle();
};

const functionAddButtonClickHandler = () => {
  functionMovieModalToggle();
};

const functionMovieModalToggle = () => {
  addMovieModal.classList.toggle("visible");
  functionBackdropToggle();
};

functionBackdropToggle = () => {
  backdrop.classList.toggle("visible");
};

addButton.addEventListener("click", functionAddButtonClickHandler);
backdrop.addEventListener("click", functionMovieModalToggle);
cancelButton.addEventListener("click", functionCancelButtonClickHandler);
finalAddButton.addEventListener("click", () => {
  const userImageUrlValue = userImageUrl.value;
  const userTitleValue = userTitle.value;
  const userRatingValue = userRating.value;

  if (
    isValidURL(userImageUrlValue) &&
    userTitleValue.trim() !== "" &&
    userRatingValue >= 1 &&
    userRatingValue <= 5 &&
    userImageUrlValue.includes(
      ".png" ||
        ".jpg" ||
        ".bmp" ||
        ".raw" ||
        ".jpeg" ||
        ".tiff" ||
        ".gif" ||
        ".psd" ||
        ".jpg" ||
        ".pdf" ||
        ".eps" ||
        ".indd" ||
        ".ai"
    )
  ) {
    const newMovie = {
      title: userTitleValue,
      image: userImageUrlValue,
      rating: userRatingValue
    }

    movies.push(newMovie);
    console.log(movies);
    functionMovieModalToggle();
    clearInputs();
  } else {
    alert("Check your Input! Invalid Input Detected.");
    return;
  }
});

resetButton.addEventListener('click',() => {
 clearInputs();
} );
