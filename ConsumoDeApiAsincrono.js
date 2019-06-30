var req = new XMLHttpRequest();

let url = "https://swapi.co/api/people/1"

req.open('GET', url, true);
req.onreadystatechange= function(aEvt){
    if(req.readyState == 4){
        if(req.status == 200)
        console.log(JSON.parse(req.responseText));
        else
        console.log("Error al cargar datos");
    }
};

req.send(null);