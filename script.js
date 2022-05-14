class ImageSlider {
  constructor(album) {
    this.album = document.querySelector(album);
    this.images = this.album.querySelectorAll("img");
    this.album.style.position = "relative";
    this.album.style.right = "0px";
    this.album.style.transition = "right .4s ease-in-out";
  }

  next() {
    let position = parseInt(this.album.style.right.split("px")[0]);
    if (position === 800 * (this.images.length - 1)) {
      position = 0;
    } else {
      position += 800;
    }
    this.album.style.right = `${position}px`;
  }

  previous() {
    let position = parseInt(this.album.style.right.split("px")[0]);
    if (position === 0) {
      position = 800 * (this.images.length - 1);
    } else {
      position -= 800;
    }
    this.album.style.right = `${position}px`;
  }
}

const imageSlider = new ImageSlider(".album");

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
  imageSlider.next();
});
const previousButton = document.querySelector(".previous");
previousButton.addEventListener("click", () => {
  imageSlider.previous();
});
