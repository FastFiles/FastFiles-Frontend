const urlIp = "http://localhost:5182/api/folders";
const token = localStorage.getItem("authToken");

// GREETINGS
const date = new Date();
let dateTime = date.getHours();
const greetings = document.querySelector("#greetingsName");
let dateName;

if (dateTime >= 0 && dateTime < 12) {
    dateName = "Buenos días";
} else if (dateTime >= 12 && dateTime < 19) {
    dateName = "Buenas tardes";
} else {
    dateName = "Buenas noches";
}

greetings.textContent = `${dateName}, Juanky`;

// LOGOUT
const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
    localStorage.clear();
})

fetch(urlIp,
    {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
).then(r => r.json()).then((d) => {
    d.forEach((folder) => {
        const foldersDiv = document.querySelector(".folder-content");
    
        const folderItem = document.createElement("div");
        folderItem.classList.add("folder-item")
        foldersDiv.appendChild(folderItem);
    
        const folderIcon = document.createElement("div");
        folderIcon.classList.add("folder-icon")
        folderIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 13.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`;
        folderItem.appendChild(folderIcon);
    
        const folderName = document.createElement("div");
        folderName.classList.add("folder-name");
        
        const folderNameP = document.createElement("p");
        folderNameP.textContent = folder.name;
        folderName.appendChild(folderNameP);

        folderItem.appendChild(folderName);

        folderItem.addEventListener("click", () => {
            localStorage.setItem("folderID", folder.id);

            location.href = "../../folder/index.html";
        })
    })

    console.log(d);
})