 

 function viewMore(e){
    e.preventDefault();
    const contentElements= document.getElementsByClassName("content");
    const mybtnv= document.getElementById("mybtnv");

    for (let i = 0; i<contentElements.length; i++){
        const content= contentElements[i];
    

        if(content.style.display === "" || content.style.display === "none"){
        content.style.display = "block";
        mybtnv.textContent = "View Less"
        } else{
            content.style.display="none";
            mybtnv.textContent= "View More"
        }
    }
    
 }
 const mybtnv= document.getElementById("mybtnv");
 if (mybtnv){
    mybtnv.addEventListener("click", viewMore);
 }