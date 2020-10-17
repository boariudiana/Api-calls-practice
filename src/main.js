const DOG_API = "https://random.dog/woof.json";

function showDog() {
    fetch(DOG_API)
      .then(function (response) {
        if(response.ok){return response.json();}
        throw new Error("Network response not ok.")
      })
      .then(function (data) {
        console.log(data.url);
        document.querySelector("#img").src = data.url;
      })
      .catch(function(error){
          console.log("there was an error:", error);
      });
  }


const CAT_API= "https://aws.random.cat/meow";
function showCat (){
    fetch(CAT_API)
      .then(function (response) {
        if(response.ok){return response.json();}
        throw new Error("Network response not ok.")
      })
      .then(function (data) {
        console.log(data.file);
        document.querySelector("#img").src = data.file;
      })
      .catch(function(error){
          console.log("there was an error:", error);
      });
}

const FOX_API = "https://randomfox.ca/floof/";
function showFox(){
    fetch(FOX_API)
      .then(function (response) {
        if(response.ok){return response.json();}
        throw new Error("Network response not ok.")
      })
      .then(function (data) {
        console.log(data.image);
        document.querySelector("#img").src = data.image;
      })
      .catch(function(error){
          console.log("there was an error:", error);
      });
}

const onChangedOption = () =>{
  const inputValue = document.querySelector("#pets").value;
  if ( inputValue === "cat"){
    document.querySelector("#show-pet").removeEventListener("click", showDog);
    document.querySelector("#show-pet").removeEventListener("click", showFox);
    document.querySelector("#show-pet").addEventListener("click", showCat);
  }else if(inputValue === "dog"){
    document.querySelector("#show-pet").removeEventListener("click", showFox);
    document.querySelector("#show-pet").removeEventListener("click", showCat);
    document.querySelector("#show-pet").addEventListener("click", showDog);
  }else if(inputValue === "fox"){
    document.querySelector("#show-pet").removeEventListener("click", showDog);
    document.querySelector("#show-pet").removeEventListener("click", showCat);
    document.querySelector("#show-pet").addEventListener("click", showFox);
  }
}



