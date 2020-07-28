document.getElementById('imgs');

let img_array=["images/1.jpg","images/2.jpg", "images/9.jpg", "images/3.jpg", "images/5.jpg",
  "images/6.jpg", "images/12.jpg", "images/13.jpg", "images/7.jpg",];
let index=0;
function slide() {
  document.body.style.backgroundImage = "url("  + img_array[index] + ")";

  index++;
  if(index>=img_array.length)
  {
    index=0;
  }
}
setInterval("slide()",2000);

