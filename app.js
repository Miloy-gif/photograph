let image=document.getElementById('imgs');


let img_array=["images/5.jpg", "images/6.jpg", "images/7.jpg", "images/1.jpg", "images/3.jpg", "images/2.jpg",
  "images/8.jpg", "images/9.jpg",  "images/4.jpg", "images/11.jpg",];
let index=0;
function slide() {
  document.body.style.backgroundImage = "url("  + img_array[index] + ")";

  index++;
  if(index>=img_array.length)
  {
    index=0;
  }
}
setInterval("slide()",5000);

