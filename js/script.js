function crearHeader() {
    return `
    <header class="header"> 
    <div class="header-logo">
        <a href="index.html"><img src="img/logo.png" alt="logo"></a>
    </div>
    <div class="header-nav">
    <nav>
        <ul class="nav">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="menu.html">Menú</a></li>
            <li><a href="reservas.html">Reservas</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
        </ul>
    </nav>
    </div>
    </header>
    `;
}

function crearFooter() {
    return `
    <div class="footer">
    <div class="section-col">
        <div class="social-icons">
            <a href="mailto:cerveceria@los4.com.ar" target="_blank" rel="noopener" aria-label="Send email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener" aria-label="whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
        </div>
    <div class="section-col-img">
    </div>
        <div class="banner">
            <p>Aceptamos efectivo, tarjeta de débito y crédito. © 2024 - Los Quatro Cervecería artesanal - Munro</p>               
        </div>
    </div>
</div>
    `
}

// botones

document.addEventListener('DOMContentLoaded', function() {
    var reservarButton = document.querySelector('#button-reservas'); 
    var menuButton = document.querySelector('#button-menu'); 
    var nosotrosButton = document.querySelector('#button-nosotros');

    reservarButton.addEventListener('click', function() {
        window.location.href = 'reservas.html'; 
    });

    menuButton.addEventListener('click', function() {
        window.location.href = 'menu.html'; 
    });

    nosotrosButton.addEventListener('click', function() {
        window.location.href = 'nosotros.html'; 
    });

});


// header y footer

document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.querySelector('.header-container');
    headerContainer.innerHTML = crearHeader();
});

document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.querySelector('.footer-container');
    footerContainer.innerHTML = crearFooter();
});

// Validación

document.addEventListener('DOMContentLoaded', function () {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var personasInput = document.getElementById('personas');
    var fechaInput = document.getElementById('Fecha');
    var condicionesInput = document.getElementById('condiciones');
    var submitBtn = document.querySelector('input[type="submit"]');

    function validarNombre() {
        var nombreValor = nombreInput.value.trim();

        if (nombreValor === '') {
            nombreInput.setCustomValidity('Por favor, ingresa tu nombre.');
        } else {
            nombreInput.setCustomValidity('');
        }
    }

    function validarEmail() {
        var emailValor = emailInput.value.trim();

        if (emailValor === '') {
            emailInput.setCustomValidity('Por favor, ingresa tu correo electrónico.');
        } else {
            emailInput.setCustomValidity('');
        }
    }
    
    function validarTelefono() {
        var phoneValor = phoneInput.value.trim();

        if (phoneValor === '') {
            phoneInput.setCustomValidity('Por favor, ingresa tu número de teléfono.');
        } else {
            phoneInput.setCustomValidity('');
        }
    }
    
    function validarPersonas() {
        var personasValor = personasInput.value.trim();

        if (personasValor === '') {
            personasInput.setCustomValidity('Por favor, ingresa la cantidad de personas.');
        } else {
            personasInput.setCustomValidity('');
        }
    }
    
    function validarFecha() {
        var fechaValor = fechaInput.value.trim();

        if (fechaValor === '') {
            fechaInput.setCustomValidity('Por favor, selecciona una fecha.');
        } else {
            fechaInput.setCustomValidity('');
        }
    }
    
    
    nombreInput.addEventListener('input', validarNombre);
    emailInput.addEventListener('input', validarEmail);
    phoneInput.addEventListener('input', validarTelefono);
    personasInput.addEventListener('input', validarPersonas);
    fechaInput.addEventListener('input', validarFecha);
    condicionesInput.addEventListener('change', validarCondiciones);
    
    submitBtn.addEventListener('click', function (event) {
        validarNombre();
        validarEmail();
        validarTelefono();
        validarPersonas();
        validarFecha();

        if (!this.form.checkValidity()) {
            // event.preventDefault();
            alert('Por favor, completa el formulario correctamente.');
        }
    });
});
