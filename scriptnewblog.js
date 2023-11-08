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

function submittedblog(){
    console.log(blog)
    blogs.push(blog)
    return blogs
    
}



document.getElementById("forme").addEventListener("submit", function(event) {
    event.preventDefault();
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
    blogs.push(blog)

    
    console.log(blogs)
    const blogsString= JSON.stringify(blogs)
    localStorage.setItem("blogs", blogsString);
    const savedBlogs= localStorage.getItem("blogs");
    console.log(savedBlogs);
    localStorage.removeItem("blogs")

    alert("New Entry");

    
    


})


