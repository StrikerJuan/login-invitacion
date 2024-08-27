const verificarRegistro = async () => {

    // Mostrar pantalla de carga
    document.getElementById('loading-screen').style.display = 'flex';

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
            // Ocultar pantalla de carga
            document.getElementById('loading-screen').style.display = 'none';

            alert('Ingreso exitoso');
            const queryParams = new URLSearchParams();
            queryParams.append('header', data.header);
            queryParams.append('body', data.body);
            queryParams.append('cantidad', data.cantidad);
            queryParams.append('footer', data.footer);
            window.location.href = `https://strikerjuan.github.io/Invitacion-Vanessa/?${queryParams.toString()}`;
        })
        .catch(error => {
            // Ocultar pantalla de carga
            document.getElementById('loading-screen').style.display = 'none';

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
