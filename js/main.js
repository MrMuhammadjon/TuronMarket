// js/pages/blog.js
fetch('http://localhost:3000/Products').then((res)=> {res.json().then((data)=>{console.log(data)})}).catch((err)=>{console.log(err)})
