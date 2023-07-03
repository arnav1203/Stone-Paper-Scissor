var button = document.getElementById('button');
button.addEventListener('click', () => {
    var image = ['./assets/Paper.png', './assets/Scissor.png', './assets/Stone.png']
    var p1 = document.getElementById('point1');
    var p2 = document.getElementById('point2');
    var randomImage1 = Math.floor(Math.random() * (image.length - 1));
    var randomImage2 = Math.floor(Math.random() * (image.length));
    var img1 = document.getElementById('image1');
    var img2 = document.getElementById('image2');
    // console.log(randomImage1);
    img1.src = image[randomImage1];
    img2.src = image[randomImage2];
    var p01 = Number(p1.innerText);
    var p02 = Number(p2.innerText);
    if ((randomImage1 == 0 && randomImage2 == 2) || (randomImage1 == 1 && randomImage2 == 0) || (randomImage1 == 2 && randomImage2 == 1)) {
        p01 += 1;
        p1.innerText = p01;
    }
    else if ((randomImage1 == 0 && randomImage2 == 1) || (randomImage1 == 1 && randomImage2 == 2) || (randomImage1 == 2 && randomImage2 == 0)) {
        p02 += 1;
        p2.innerText = p02;
    }
})