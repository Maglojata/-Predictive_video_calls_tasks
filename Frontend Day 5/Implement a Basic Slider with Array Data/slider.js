const sliderImage = document.querySelector('.img1');
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

let i = 0;

function prev() {
  if (i <= 0) i = images.length;
    --i; 
    return setImg();   

}

function next() {
  if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
  }

function setImg() {
  return sliderImage.setAttribute('src', '/' + images[i]);
}