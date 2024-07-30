
const imageContainer=document.querySelector(".image-container");

const btnElement=document.querySelector(".btn");

btnElement.addEventListener('click',()=>{
  //  console.log("Image Create");

      updateImage();
})

function updateImage(){

  for(let i=0;i<6;i++){
  let newImage = document.createElement("img");
  newImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}`;
  imageContainer.appendChild(newImage);
  }
}


