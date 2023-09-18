const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryElement = document.querySelector('.gallery');
const galleryHTML = images.map((image) => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`);
galleryElement.innerHTML = galleryHTML.join('');
const image = document.querySelectorAll('img');
image.forEach((x) => {
  x.style.width = '200px';
  x.style.height = '100px';
})
galleryElement.style.display = 'flex';
galleryElement.style.gap = '20px'
// console.log(galleryElement.children);
// galleryElement.children.forEach((x) => {
//   x.style.width = '20px';
// })