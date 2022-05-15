class ImageSlider {
  constructor(frame, album) {
    this.frame = document.querySelector(frame);
    this.album = document.querySelector(album);
    this.images = this.album.querySelectorAll("img");
    this.album.style.position = "relative";
    this.album.style.right = "0px";
  }

  next() {
    this.album.style.transition = "right .4s ease-in-out";
    let position = parseInt(this.album.style.right.split("px")[0]);
    if (position === 800 * (this.images.length - 1)) {
      this.album.style.transition = "none";
      position = 0;
    } else {
      position += 800;
    }
    this.album.style.right = `${position}px`;
  }

  previous() {
    this.album.style.transition = "right .4s ease-in-out";
    let position = parseInt(this.album.style.right.split("px")[0]);
    if (position === 0) {
      this.album.style.transition = "none";
      position = 800 * (this.images.length - 1);
    } else {
      position -= 800;
    }
    this.album.style.right = `${position}px`;
  }
}

const imageSlider = new ImageSlider(".frame", ".album");

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
  imageSlider.next();
});
const previousButton = document.querySelector(".previous");
previousButton.addEventListener("click", () => {
  imageSlider.previous();
});
