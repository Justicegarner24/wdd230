const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.table(data);
        displayProphets(data.prophets);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getProphetData();

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        const card = document.createElement("section");
        
        const fullName = document.createElement("h2");
        
        const birthdate = document.createElement("p");
        
        const birthplace = document.createElement("p");
        
        const portrait = document.createElement("img");

        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

          
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

        
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", prophet.fullName);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "300");

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        
        cards.appendChild(card);
    });
};