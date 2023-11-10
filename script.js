let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
  return v.json()
}).then((contests)=>{   //where v put v= contests
  console.log(contests)
  ihtml = ""
  for(item in contests){
    console.log(contests[item])
    ihtml +=  `
    <div class="card mx-2 my-2" style="width: 20rem;">
        <img src="https://tse3.mm.bing.net/th?id=OIP.SiHzA51Pcx5ja1MgpFy06QHaFj&pid=Api&P=0&h=220" class="card-img-top" alt="...">
        <div class="card-body" >
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">status is ${contests[item].status} and site is ${contests[item].site} </p>
          <p class="card-text">In 24 hrs? ${contests[item].in_24_hours}</p>
          <p>starts at:${contests[item].start_time} </p>
          <p>Ends at:${contests[item].end_time} </p>
          <a href="${contests[item].url}" class="btn btn-primary my-2">Visti Contest</a>
        </div>
      </div>
    `
  }
cardContainer.innerHTML = ihtml
})

/************************* NOTES APP (REMAINING QUESTION OF PRACTISE SET)*****************************************/
// let n = localStorage.getItem("note")
// alert("Your note is "+ n)

// let a = prompt("Enter your note")
// if(a){
  
// localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note")
// if(c){
//   localStorage.removeItem("note")
//   alert("Note deleted successfully! ")
// }