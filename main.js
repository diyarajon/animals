
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://diyarajon.github.io/cats/');
    ourRequest.onload = function(){
        if (ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        }else{
            console.log("We connected to the server, but it returened an erroe.");
        }

    };
    ourRequest.onerror = function(){
        console.log("Connection error");
    };
    ourRequest.send();


function renderHTML(data){
    var htmlString = "";

    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        
        for (ii = 0; ii < data[i].foods.likes.length; ii++){
            if (ii == 0){
                htmlString += data[i].foods.likes[ii];
            }else{
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        
        htmlString += " and dislikes ";

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if (ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            }else{
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += ".</P>"

    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}