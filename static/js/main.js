

fetch('/signup', {
  method:"POST",
  headers: {
    "content-type":"application/json",
  }
})
.then(res=>{
  res.json();
})
.then(data=>{
  console.log(data);
})