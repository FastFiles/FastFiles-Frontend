const urlIpFiles = "https://fast-files.somee.com/api/files";
const urlIpFolders = "https://fast-files.somee.com/api/folders";
const folderId = localStorage.getItem("folderID");
const token = localStorage.getItem("authToken");

// LOGOUT
const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
    localStorage.clear();
})

// ROUTE
fetch(urlIpFolders).then(r => r.json()).then((d) => {
    d.forEach(folder => {
        if (folder.id == folderId) {
            const currentRoute = document.querySelector("#current-location");
            currentRoute.textContent = folder.name;
        }
    });
})

// FILES
fetch(urlIpFiles).then(r => r.json()).then((files) => {
    files.forEach(file => {
        if (file.folderId == folderId) {
            console.log(file);

            const filesDiv = document.querySelector(".files-content");
    
        const fileItem = document.createElement("div");
        fileItem.classList.add("file-item")
        filesDiv.appendChild(fileItem);
    
        const fileIcon = document.createElement("div");
        fileIcon.classList.add("file-icon")
        fileIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"/><path fill="#ffffff" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22m-.987-9.047a.75.75 0 0 0-1.026 0l-2 1.875a.75.75 0 0 0 1.026 1.094l.737-.69V18.5a.75.75 0 0 0 1.5 0v-3.269l.737.691a.75.75 0 0 0 1.026-1.094z" clip-rule="evenodd"/></svg>`;
        fileItem.appendChild(fileIcon);
    
        const fileName = document.createElement("div");
        fileName.classList.add("file-name");
        
        const fileNameP = document.createElement("p");
        fileNameP.textContent = file.name;
        fileName.appendChild(fileNameP);

        // DropDown Options
        const dropdownCenter = document.createElement("div");
        dropdownCenter.className = "dropdown-center dropdown-options";

        const noteTitleOptions = document.createElement("div");
        noteTitleOptions.classList.add("note-title-options");
        noteTitleOptions.setAttribute("data-bs-toggle", "dropdown");
        noteTitleOptions.setAttribute("aria-expanded", "false");
        noteTitleOptions.innerHTML = `<svg class="note-title-options-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FFF" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>`;
        
        const dropdownMenu = document.createElement("ul");
        dropdownMenu.className = "dropdown-menu dropdown-menu-dark";

        const dropdownMenuLiDownload = document.createElement("li");
        const editordropdownMenuBtnDownload = document.createElement("button");
        editordropdownMenuBtnDownload.classList.add("dropdown-item");
        editordropdownMenuBtnDownload.textContent = "Descargar archivo";

        dropdownMenuLiDownload.appendChild(editordropdownMenuBtnDownload);

        const dropdownMenuLiChangeName = document.createElement("li");
        const editordropdownMenuBtnHide = document.createElement("button");
        editordropdownMenuBtnHide.classList.add("dropdown-item");
        editordropdownMenuBtnHide.textContent = "Cambiar nombre";

        dropdownMenuLiChangeName.appendChild(editordropdownMenuBtnHide);
        dropdownMenu.append(dropdownMenuLiDownload, dropdownMenuLiChangeName);

        dropdownCenter.append(noteTitleOptions, dropdownMenu);
        
        fileItem.appendChild(fileName);

        fileItem.appendChild(dropdownCenter);

        }
    });
})