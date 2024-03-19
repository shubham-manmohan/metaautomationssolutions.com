function addImages(images) {
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.innerHTML = "";

  images.forEach((image) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");

    const img = document.createElement("img");
    img.classList.add("d-block", "image");
    img.src = image;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  carouselInner.firstChild.classList.add("active"); // Set first image as active
}
/*
addImages([
    'assets/img/team/team-1.jpg',
    'assets/img/team/team-1.jpg',
    'assets/img/team/team-1.jpg',
    'assets/img/team/team-1.jpg',
    'assets/img/team/team-1.jpg',
    'assets/img/team/team-1.jpg',
  ]);
  */