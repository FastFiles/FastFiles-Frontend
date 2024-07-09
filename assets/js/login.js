console.log("Working :)");
 //Obtenemos el valor del id del input correo
const Url = 'https://fast-files.somee.com/api/Auth';  //Fetch
//Obtenemos el formulario.

//HAcemos una función para validar los datos:
document.getElementById("login").addEventListener('submit',async function(event){
    event.preventDefault(); //Esto em ayuda e enviar el formulario de una manera distinta => segun lo que entendi no recarga la pagina si no que deja entrar asi como asi
    
    const email = document.getElementById("correo").value; //Obtenemos el valor del id del input correo
    const password = document.getElementById("clave").value; //Obtenemos el id de clave 

    const credentials = {
        Email: email,
        Password: password
    };
    if(email == null || password == null)
        {
            alert("Por favor llene todos los campos.");
        }
    
    //Añadimos nu try-cath para la respuesta de la cosnsulta
    try
    {
        const response = await fetch(Url,
            {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(credentials)
            });

            if(!response.ok)
                {
                    alert("Ocurrio un error en el correo o contraseña");
                } else {
                    
                }

            const data = await response.json();

            if (data == data) //Validamos si el token es igual al token
                {
                    alert("Has iniciado con exito");
                    localStorage.setItem('authToken', data.token); //Guardamos el token en el local storage
                    window.location.href="../index.html";
                }
                else {
                    alert("El token no se encontro")
                    console.log("Ocurrio un error en el correo o contraseña", data);
                }
    }catch(error) {
        return `F: ${error.Message}`;
    }
})