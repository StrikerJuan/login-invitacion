const verificarRegistro = async () => {

    let usuario = $("#usuario").val();
    let password = $("#password").val();

    const objeto = {
        "usuario": usuario,
        "password": password
    }

    console.log(objeto);

    //fetch("http://localhost:3000/verificaRegistro", {
    fetch("https://api-invitaciones.onrender.com/verificaRegistro", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    })
        .then(response => {
            if(response.ok){
                return response.json(); // Si la respuesta es exitosa, convertir a JSON
            } else {
                throw new Error('Error en la solicitud');
            }
        })
        .then(data => {
            alert('Ingreso exitoso');
            const queryParams = new URLSearchParams();
            queryParams.append('header', data.header);
            queryParams.append('body', data.body);
            queryParams.append('cantidad', data.cantidad);
            queryParams.append('footer', data.footer);
            window.location.href = `https://strikerjuan.github.io/Invitacion-Vanessa/?${queryParams.toString()}`;
        })
        .catch(error => {
            console.error("Error", error);
            alert('Usuario o contraseña erroneos');
        });
        
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-login').addEventListener('submit', (event) => {
        event.preventDefault();
        verificarRegistro();
    });
});


/*
const obtenerDatosUsuario = async () => {
            try {
                const response = await fetch('/verificaRegistro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ usuario: 'usuario', password: 'password' }) // Cambia 'usuario' y 'password' por los valores reales
                });

                if (response.ok) {
                    const data = await response.json();
                    document.getElementById('header').textContent = data.header;
                    document.getElementById('body').textContent = data.body;
                    document.getElementById('cantidad').textContent = data.cantidad;
                    document.getElementById('footer').textContent = data.footer;
                } else {
                    alert('Error al obtener los datos del usuario');
                }
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
                alert('Error al obtener los datos del usuario');
            }
        };

        // Llamar a la función al cargar la página
        window.onload = obtenerDatosUsuario();
*/