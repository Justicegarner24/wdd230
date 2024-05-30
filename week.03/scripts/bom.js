
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function capitalizeFirstLetter(string) {

    string = string.toLowerCase();

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWords(string) {

    const words = string.split(/\s+/);


    const capitalizedWords = words.map((word) => {

        const capitalizedFirstLetter = word.charAt(0).toUpperCase();

        const restOfWord = word.slice(1);

        return capitalizedFirstLetter + restOfWord;
    });


    return capitalizedWords.join(" ");
}

const bookOfMormon = [
    {
        title: "1 Nephi",
        chapters: 22,
    },
    {
        title: "2 Nephi",
        chapters: 33,
    },
    {
        title: "Jacob",
        chapters: 7,
    },
    {
        title: "Enos",
        chapters: 1,
    },
    {
        title: "Jarom",
        chapters: 1,
    },
    {
        title: "Omni",
        chapters: 1,
    },
    {
        title: "Words Of Mormon",
        chapters: 1,
    },
    {
        title: "Mosiah",
        chapters: 29,
    },
    {
        title: "Alma",
        chapters: 63,
    },
    {
        title: "Helaman",
        chapters: 16,
    },
    {
        title: "3 Nephi",
        chapters: 30,
    },
    {
        title: "4 Nephi",
        chapters: 1,
    },
    {
        title: "Mormon",
        chapters: 9,
    },
    {
        title: "Ether",
        chapters: 15,
    },
    {
        title: "Moroni",
        chapters: 10,
    },
];
function checkBookChapter(bookTitle, chapterNumber) {
    for (const book of bookOfMormon) {
        if (book.title === bookTitle) {
            if (chapterNumber >= 1 && chapterNumber <= book.chapters) {
                return `${book.title} ${chapterNumber}`;
            } else {
                return alert(`${book.title} does not have this many chapters ${chapterNumber}`);
            }
        }
    }
    return alert(`Book ${bookTitle} not found in the Book of Mormon`);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        button.click();
    }
});

button.addEventListener("click", () => {
    if (input.value != "") {
        let listItem = document.createElement("li");

        listItem.textContent = capitalizeWords(input.value.trim());

        const userInfo = listItem.textContent.split(" ");

        const bookTitle = userInfo.slice(0, -1).join(" ");

        const chapterNumber = parseInt(userInfo[userInfo.length - 1]);

        listItem.textContent = checkBookChapter(bookTitle, chapterNumber);

        if (listItem.textContent !== "") {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            listItem.append(deleteButton);

            list.append(listItem);
            input.value = "";
            input.focus();

            deleteButton.addEventListener("click", () => {
                list.removeChild(listItem);
                input.focus();
            });
        } else {
            input.value = "";
            input.focus();
            return;
        }
    } else {
        alert("You must enter a book name and chapter number");
        input.focus();
        return;
    }
})