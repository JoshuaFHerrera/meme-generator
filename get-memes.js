let firstImage = false;
let image = document.createElement("img");
let caption = document.createElement("p");
const imageContainer = document.getElementById("image-container");
const captionContainer = document.getElementById("caption-container");

function getMemes() {
  if (!firstImage) {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * 100);
        const memes = data.data.memes;
        image.src = memes[index].url;
        caption.innerHTML = "Meme template: " + memes[index].name;
        imageContainer.appendChild(image);
        captionContainer.appendChild(caption);
      });
  } else {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * 100);
        const memes = data.data.memes;
        image.src = memes[index].url;
        caption.innerHTML = memes[index].name;
      });
  }
}
