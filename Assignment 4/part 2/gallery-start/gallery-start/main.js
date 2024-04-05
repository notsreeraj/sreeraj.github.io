const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg',];

/* Declaring the alternative text for each image file */
const alternateImages ={
    'pic1.jpg' :  "A human eye",
    'pic2.jpg' :  'Rock with a wavy design',
    'pic3.jpg' :  'Purple and White Pansie Flower',
    'pic4.jpg' :  'Sections of a wall from a Pharoahs\'s tomb',
    'pic5.jpg' :  'Large moth on a leaf'

}

/* Looping through images */
for(const imageIndex of images)
    {const newImage = document.createElement('img');
    newImage.setAttribute('src', imageIndex);
    newImage.setAttribute('alt', imageIndex);
    thumbBar.appendChild(newImage);
    /*this to dispkay an image when clicked and also its corresponding alternates */
    newImage.addEventListener('Click',e =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        });

}


/* Wiring up the Darken/Lighten button */
