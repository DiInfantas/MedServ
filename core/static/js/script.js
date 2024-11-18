document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');
    const btnEnviar = document.getElementById('btn-enviar');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const mensajeAlerta = document.getElementById('mensaje-alerta');
    const contenedorFormulario = document.querySelector('.container');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        
        if (formulario.checkValidity()) {
            const formData = new FormData(formulario);
            btnEnviar.disabled = true;

            fetch('', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.mensaje) {
                        const alerta = document.createElement('div');
                        alerta.classList.add('alert', 'alert-success');
                        alerta.setAttribute('role', 'alert');
                        alerta.textContent = data.mensaje;
                        mensajeAlerta.innerHTML = '';
                        mensajeAlerta.appendChild(alerta);
                        mensajeAlerta.style.display = 'block';
                        formulario.style.display = 'none';
                        formulario.reset();
                    } else {
                        alert('Ocurrió un error al procesar la solicitud.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Ocurrió un error al procesar la solicitud.');
                })
                .finally(() => {
                    btnEnviar.disabled = false;
                });
        } else {
            // El formulario no es válido, mostrar mensajes de validación si es necesario
            formulario.classList.add('was-validated');
        }
    });

    btnLimpiar.addEventListener('click', function () {
        formulario.reset();
        formulario.classList.remove('was-validated');
    });
});





document.addEventListener('DOMContentLoaded', function () {
    function checkVisible(element) {
        var windowHeight = window.innerHeight;
        var rect = element.getBoundingClientRect();
        var viewHeight = rect.bottom - rect.top;

        if (rect.top <= windowHeight && rect.top + viewHeight >= 0) {
            element.classList.add('fade-in-visible');
        }
    }
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function (element) {
        checkVisible(element);
        window.addEventListener('scroll', function () {
            checkVisible(element);
        });
    });
});

