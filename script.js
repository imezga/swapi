'use strict';
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const buttons = document.querySelectorAll('.btn');
const main = document.querySelector('main');

// default category is people
let category;

// responsive navbar
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('close');
    nav.classList.toggle('active-nav');
});

// add people to HTML
function addPeople(response) {
    let results = response.results;
    for (let i = 0; i < results.length; i++) {
        let name = results[i].name;
        let birthYear = results[i].birth_year;
        let eyeColor = results[i].eye_color;
        let gender = results[i].gender;
        let hairColor = results[i].hair_color;
        let height = results[i].height;
        let mass = results[i].mass;
        let skinColor = results[i].skin_color;
        // create content div
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        main.appendChild(contentDiv);
        contentDiv.innerHTML += `
            <h1>${name}</h1>
            <p>Birth year: <span>${birthYear}</span></p>
            <p>Eye color: <span>${eyeColor}</span></p>
            <p>Gender: <span>${gender}</span></p>
            <p>Hair color: <span>${hairColor}</span></p>
            <p>Height: <span>${height} cm</span></p>
            <p>Mass: <span>${mass} kg</span></p>
            <p>Skin color: <span>${skinColor}</span></p>
        `;
    }
}

// add planets to HTML
function addPlanets(response) {
    let results = response.results;
    for (let i = 0; i < results.length; i++) {
        let climate = results[i].climate;
        let diameter = results[i].diameter;
        let gravity = results[i].gravity;
        let name = results[i].name;
        let orbitalPeriod = results[i].orbital_period;
        let population = results[i].population;
        let rotationPeriod = results[i].rotation_period;
        let terrain = results[i].terrain;
        // create content div
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        main.appendChild(contentDiv);
        contentDiv.innerHTML += `
            <h1>${name}</h1>
            <p>Climate: <span>${climate}</span></p>
            <p>Diameter: <span>${diameter}</span></p>
            <p>Gravity: <span>${gravity}</span></p>
            <p>Orbital period: <span>${orbitalPeriod}</span></p>
            <p>Population: <span>${population}</span></p>
            <p>Rotation period: <span>${rotationPeriod}</span></p>
            <p>Terrain: <span>${terrain}</span></p>
        `;
    }
}

// add films to HTML
function addFilms(response) {
    let results = response.results;
    for (let i = 0; i < results.length; i++) {
        let director = results[i].director;
        let openingCrawl = results[i].opening_crawl;
        let producer = results[i].producer;
        let releaseDate = results[i].release_date;
        let title = results[i].title;
        // create content div
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        main.appendChild(contentDiv);
        contentDiv.innerHTML += `
            <h1>${title}</h1>
            <p>Director: <span>${director}</span></p>
            <p>Producer: <span>${producer}</span></p>
            <p>Release date: <span>${releaseDate}</span></p>
            <p>Opening crawl:</p>
            <p><span>${openingCrawl}</span></p>
        `;
    }
}

// add species to HTML
function addSpecies(response) {
    let results = response.results;
    for (let i = 0; i < results.length; i++) {
        let averageHeight = results[i].average_height;
        let averageLifespan = results[i].average_lifespan;
        let classification = results[i].classification;
        let designation = results[i].designation;
        let eyeColors = results[i].eye_colors;
        let hairColors = results[i].hair_colors;
        let language = results[i].language;
        let name = results[i].name;
        let skinColors = results[i].skin_colors;
        // create content div
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        main.appendChild(contentDiv);
        contentDiv.innerHTML += `
            <h1>${name}</h1>
            <p>Average height: <span>${averageHeight}</span></p>
            <p>Average lifespan: <span>${averageLifespan}</span></p>
            <p>Classification: <span>${classification}</span></p>
            <p>Designation: <span>${designation}</span></p>
            <p>Eye colors: <span>${eyeColors}</span></p>
            <p>Hair colors: <span>${hairColors}</span></p>
            <p>Skin colors: <span>${skinColors}</span></p>
            <p>Language: <span>${language}</span></p>
        `;
    }
}

// add vehicles to HTML
function addVehicles(response) {
    let results = response.results;
    for (let i = 0; i < results.length; i++) {
        let cargoCapacity = results[i].cargo_capacity;
        let consumables = results[i].consumables;
        let crew = results[i].crew;
        let manufacturer = results[i].manufacturer;
        let model = results[i].model;
        let name = results[i].name;
        let passengers = results[i].passengers;
        let vehicleClass = results[i].vehicle_class;
        let maxAtmospheringSpeed = results[i].max_atmosphering_speed;
        // create content div
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        main.appendChild(contentDiv);
        contentDiv.innerHTML += `
            <h1>${name}</h1>
            <p>Model: <span>${model}</span></p>
            <p>Manufacturer: <span>${manufacturer}</span></p>
            <p>Max atmosphering speed: <span>${maxAtmospheringSpeed}</span></p>
            <p>Passengers: <span>${passengers}</span></p>
            <p>Crew: <span>${crew}</span></p>
            <p>Cargo capacity: <span>${cargoCapacity}</span></p>
            <p>Consumables: <span>${consumables}</span></p>
            <p>Vehicle class: <span>${vehicleClass}</span></p>
        `;
    }
}

// add starships to HTML
function addStarships(response) {
    let results = response.results;
    for (let i = 0; i < results.length; i++) {
        let mglt = results[i].MGLT;
        let cargoCapacity = results[i].cargo_capacity;
        let consumables = results[i].consumables;
        let crew = results[i].crew;
        let manufacturer = results[i].manufacturer;
        let maxAtmospheringSpeed = results[i].max_atmosphering_speed;
        let name = results[i].name;
        let passengers = results[i].passengers;
        let model = results[i].model;
        let starshipClass = results[i].starship_class;
        // create content div
        let contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');
        main.appendChild(contentDiv);
        contentDiv.innerHTML = `
            <h1>${name}</h1>
            <p>Model: <span>${model}</span></p>
            <p>MGLT: <span>${mglt}</span></p>
            <p>Crew: <span>${crew}</span></p>
            <p>Cargo capacity: <span>${cargoCapacity}</span></p>
            <p>Consumables: <span>${consumables}</span></p>
            <p>Manufacturer: <span>${manufacturer}</span></p>
            <p>Max atmosphering speed: <span>${maxAtmospheringSpeed}</span></p>
            <p>Passenger: <span>${passengers}</span></p>
            <p>Starship class: <span>${starshipClass}</span></p>
        `;
    }
}

// add certain content
function addContent(response, category) {
    switch (category) {
        case 'people':
            return addPeople(response);
        case 'planets':
            return addPlanets(response);
        case 'films':
            return addFilms(response);
        case 'species':
            return addSpecies(response);
        case 'vehicles':
            return addVehicles(response);
        case 'starships':
            return addStarships(response);
    }
}

// AJAX for SWAPI and API data manipulation
function getApi(category) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            addContent(response, category);
            if (category != 'films') {
                nextApiCall(response.next);
            } else {
                return;
            }
        }
    };
    xhttp.open('GET', `https://swapi.dev/api/${category}/`, true);
    xhttp.send();
}

// calling next page if in API
function nextApiCall(nextUrl) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            let next = response.next;
            if (next != null) {
                addContent(response, category);
                nextApiCall(next);
            } else {
                addContent(response, category);
                return;
            }
        }
    };
    xhttp.open('GET', `${nextUrl}`, true);
    xhttp.send();
}

// loop through buttons and select category
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        if ((nav.className = 'active-nav')) {
            nav.className = '';
        }
        if (e.target.classList.contains('active-btn')) {
            return;
        }
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active-btn')) {
                buttons[i].classList.remove('active-btn');
            }
        }
        main.innerHTML = '';
        e.target.classList.add('active-btn');
        category = e.target.id;
        getApi(category);
    });
});
