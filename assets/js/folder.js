const urlIpFiles = "http://192.168.1.7:5182/api/files";
const urlIpFolders = "http://192.168.1.7:5182/api/folders";
const folderId = localStorage.getItem("folderID");

fetch(urlIpFolders).then(r => r.json()).then((d) => {
    console.log(d);

    d.forEach(folder => {
        if (folder.id == folderId) {
            const currentRoute = document.querySelector("#current-location");
            currentRoute.textContent = folder.name;
        }
    });
})

// FILES
fetch(urlIpFiles).then(r => r.json()).then((files) => {
    console.log(files);
    files.forEach(file => {
        if (File.folderId == folderId) {
            console.log(file);
        }
    });
})


