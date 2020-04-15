selector = document.getElementById('id');

const URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=Paris&rows=10&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes";

fetch(URL)
    .then((response) => response.json())
    .then((response) => {
     					console.log(response)
     					return response;
     					})
    .then((response) => {
						const allStations = response.records;
                        console.log(allStations);

                                counter = () => {
                                selector.innerHTML = "";
                                allStations.forEach(function(station) {
                                console.log("x")
                                    showVelibStation(selector, station.fields.name, station.fields.mechanical, station.fields.ebike);
                                })
                                }
                    
                        counter();
                        setInterval(counter, 15000) 
                        })

	.catch((error) => console.error(error));



const showVelibStation = (selector, name, numberClassicalVelibs, numberElectricVelibs) => {
    selector.innerHTML += `
        <div>
            <h2>Station : ${name}</h2>
            <p>${numberClassicalVelibs} classical Velibs</p>
            <p>${numberElectricVelibs} electric Velibs</p>
        </div>
    `
}