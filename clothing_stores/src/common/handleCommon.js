export const handleSetStylePage = (count,isPage) =>{
    const span = document.getElementsByClassName("page");
    if(isPage === false) count = count - 1;
    for (let i = 0; i < span.length; i++) {
        
        if (i === count) {
          span[i].style.backgroundColor = "black";
          span[i].style.color = "white";
        } else {
          span[i].style.backgroundColor = "white";
          span[i].style.color = "black";
        }
      }
}