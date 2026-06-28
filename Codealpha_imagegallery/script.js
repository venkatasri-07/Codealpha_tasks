let images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

function openImage(src){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightboxImg").src=src;

    images.forEach((img,index)=>{

        if(img.src===src){

            currentIndex=index;

        }

    });

}

function closeImage(){

    document.getElementById("lightbox").style.display="none";

}

function nextImage(){

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    document.getElementById("lightboxImg").src=images[currentIndex].src;

}

function prevImage(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    document.getElementById("lightboxImg").src=images[currentIndex].src;

}