console.log("Working :)");
const email = document.getElementById("correo").value; //Obtenemos el valor del id del input correo
const password = document.getElementById("clave").value; //Obtenemos el id de clave 
const btonSend = document.getElementById("send").value; //obtenemos el valor del id 
const Url = 'http://localhost:5182/api/Auth';  //Funcion Login
//Obtenemos el formulario.
const form = document.querySelector("login-content");

//HAcemos una función para validar los datos:

form.addEventListener('submit',async function(event){
    event.preventDefault(); //Esto em ayuda e enviar el formulario de una manera distinta => segun lo que entendi no recarga la pagina si no que deja entrar asi como asi

    if(email == null || password == null)
        {
            alert("Por favor llene todos los campos.");
            return;
        }

    
    const creadentials = {
        Email: email,
        Password: password
    };
    //Añadimos un try-cath para la respuesta de la cosnsulta
    try
    {
        const response = await fetch(Url,
            {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(creadentials)
            });
            if(response != ok)
                {
                    return NotFound("Ocurrio un error en el correo o contraseña");
                }
            const data = await response.json();
            console.log('Token:', data.Token);
            localStorage.setItem('authToken', data.Token); //Guardamos el token en el local storage
            alert("Has iniciado con exito");
    }catch(error)
    {
        console.log('error:', error);
    }
})