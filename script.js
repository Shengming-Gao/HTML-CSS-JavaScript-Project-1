 var index = 0;
 var colors = ["red", "blue", "orange", "yellow", "green", "purple"];

 document.querySelector("#submit").addEventListener("click", () => {
  if(index > colors.length -1)
    index = 0;
  document.body.style.backgroundColor = colors[index++];
 });