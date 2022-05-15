class ImageSlider {
  constructor(frame, album, width) {
    this.frame = document.querySelector(frame);
    this.album = document.querySelector(album);
    this.width = width;
    this.images = this.album.querySelectorAll("img");
    this.album.style.position = "relative";
    this.album.style.right = "0px";
    this.album.style.transition = "right .4s ease-in-out";
  }

  next() {
    let position = parseInt(this.album.style.right.split("px"));
    if (position === this.width * (this.images.length - 1)) {
      position = 0;
    } else {
      position += this.width;
    }
    this.album.style.right = `${position}px`;
    this.getActive();
  }

  previous() {
    let position = parseInt(this.album.style.right.split("px"));
    if (position === 0) {
      position = this.width * (this.images.length - 1);
    } else {
      position -= this.width;
    }
    this.album.style.right = `${position}px`;
    this.getActive();
  }

  addCircles(element) {
    const container = document.querySelector(element);
    for (let i = 0; i < this.images.length; i++) {
      const circle = document.createElement("button");
      circle.classList.toggle("circle");
      circle.addEventListener("click", () => {
        this.album.style.right = `${this.width * i}px`;
        this.getActive();
      });
      container.appendChild(circle);
      if (i === 0) {
        circle.classList.toggle("activeCircle");
      }
    }
  }

  getActive() {
    const circles = document.querySelectorAll(".circle");
    const activeCircle = document.querySelector(".activeCircle");
    activeCircle.classList.toggle("activeCircle");
    const circleIndex =
      parseInt(this.album.style.right.split("px")) / this.width;
    const circle = circles[circleIndex];
    circle.classList.toggle("activeCircle");
  }
}

const imageSlider = new ImageSlider(".frame", ".album", 800);

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
  imageSlider.next();
});
const previousButton = document.querySelector(".previous");
previousButton.addEventListener("click", () => {
  imageSlider.previous();
});

imageSlider.addCircles(".circles");
