const baseURL = "https://justicegarner24.github.io/wdd230/";

const linksURL = "https://justicegarner24.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        
        displayLinks(data.lessons);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getLinks();

const displayLinks = (weeks) => {

    weeks.forEach((week) => {
        const listItem = document.createElement("li");
        const lessonWeek = document.createTextNode(`Lesson ${week.lesson}: `);

        listItem.appendChild(lessonWeek);

        week.links.forEach((link) => {
            
            const tag = document.createElement("a");
            tag.setAttribute("href", link.url);
            tag.textContent = link.title;

            listItem.appendChild(tag);

            if (week.links.length > 1 && week.links.indexOf(link) < week.links.length - 1) {
                listItem.innerHTML += " | ";
            }
        });
        const list = document.querySelector(".la-card");
        list.appendChild(listItem);
    });
};