 

 function viewMore(e){
    e.preventDefault();
    const contentElements= document.getElementsByClassName("content");
    const mybtnv= document.getElementById("mybtnv");

    for (let i = 0; i<contentElements.length; ++){
        const content= contentElements[i];
    }

    if(content.style.display == "none"){
        content.style.display ="block";
        mybtnv.textContent= "View less"
    }

    else{
        content.style.display="none";
        mybtnv.textContent= "View More"
    }
    
 }
 mybtnv.addEventListener("click", viewMore);