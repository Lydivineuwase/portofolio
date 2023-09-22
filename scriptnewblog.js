const title= document.getElementById("tit").value;
const file= document.getElementById("img").value;
const description= document.getElementById("descr").value;
const button= document.getElementById("sbmt")
const frm= document.getElementById("forme")

var blogs=[]
var blog={
    title: title,
    file: "file",
    description: description,
}

function saveblog(){
    console.log(blog)
    blogs.push(blog)
    return blogs
    
}



document.getElementById("forme").addEventListener("submit", function(event) {
    event.preventDefault();
    const title= document.getElementById("tit").value;
    const file= document.getElementById("img").value;
    const description= document.getElementById("descr").value;
    var blogs=[]
    var blog={
    title: title,
    file: "file",
    description: description,
    }
blogs.push(blog)

    
    console.log(blogs)
    localStorage.setItem("blogs", blogs)

    alert("submitted")
    

    
})


