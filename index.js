const btnEl = document.getElementById("btn");
const jokeEL =document.getElementById("joke");
const apiKey ="uyd3KAjnjQTEmSbfV4F2MA==oZjIJui80pfNuqTp";
const options ={
    method: "GET",
    headers:{
        "X-Api-Key":apiKey, 
    },
};

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        
        jokeEL.innerText ="Updating...";
        btnEl.disabled =true;
        btnEl.innerText="Loading..."
    const response = await fetch(apiURL,options);
    const data = await response.json();
    btnEl.disabled =false;
        btnEl.innerText="Tell me a joke"
    
    jokeEL.innerText=data[0].joke;
        
    }
    

catch (error) {
   
    jokeEL.innerText ="An error has occured, try again later.";
    console.log(error);
    btnEl.disabled =false;
        btnEl.innerText="Tell me a joke"
}
}
btnEl.addEventListener("click", getJoke)
