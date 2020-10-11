var DOG_API = "https://random.dog/woof.json";

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


var CAT_API= "https://aws.random.cat/meow";
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

var FOX_API = "https://randomfox.ca/floof/";
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
function choosenOption(){
    if(document.querySelector("#pets").value === "cat"){
        document.querySelector("#show-cat").style.display = "inline";
        document.querySelector("#show-dog").style.display = "none";
        document.querySelector("#show-fox").style.display = "none"
    }else if(document.querySelector("#pets").value === "dog"){
        document.querySelector("#show-cat").style.display = "none";
        document.querySelector("#show-dog").style.display = "inline";
        document.querySelector("#show-fox").style.display = "none";
    }else if(document.querySelector("#pets").value === "fox"){
        document.querySelector("#show-cat").style.display = "none";
        document.querySelector("#show-dog").style.display = "none";
        document.querySelector("#show-fox").style.display = "inline";
    }else{
        document.querySelector("#show-cat").style.display = "none";
        document.querySelector("#show-dog").style.display = "none";
        document.querySelector("#show-fox").style.display = "none";
    }

}

document.querySelector("#show-dog").addEventListener("click", showDog);
document.querySelector("#show-cat").addEventListener("click", showCat);
document.querySelector("#show-fox").addEventListener("click", showFox);


