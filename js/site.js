let QOTD = document.getElementById("QOTD");
let QOTDA = document.getElementById("QOTDA");
async function getQuote() {
    fetch('https://api.quotable.io/random')
    .then((data) => data.json())
    .then((item) => {
            QOTD.innerText =`" ${item.content} "`;
            QOTDA.innerText = `-  ${item.author}`;
        });
};
const currentImage = document.getElementById('currentImage');
let images = [
    '../images/IMG_20230822_183432705_HDR.jpg',
    '../images/CSFinalProject.PNG',
    '../images/ArchLinux.PNG'
];
let currentImageId = 0;
currentImage.src = images[currentImageId];
function updateImage(){
    currentImageId++;
    if(currentImageId >= images.length){
        currentImageId = 0;
    }
    currentImage.src = images[currentImageId];
}
setInterval(updateImage, 5000);
window.addEventListener("load", getQuote);