//! Clase active al menu por defecto.

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.link');


const activeDefault = (menu, links) => {
    window.addEventListener('load', () => {
        links[0].classList.add('active');

    });
};

activeDefault(menu, menuItems);







//! Agregar y quitar clase active al menu.

const agregarClaseActive = (menu, links) => {
    menu.addEventListener('click', (e) => {
        const link = e.target;

        if (link.classList.contains('link')) {
            links.forEach((link) => {
                link.classList.remove('active');
            });

            link.classList.add('active');
        }
    });
};

agregarClaseActive(menu, menuItems);






//! Mostar y ocultar contenido con un boton.

const btnVerMas = document.querySelector('.btn-verMas');
const parrafos = document.querySelector('.parrafoOcultar');


const btnMostrarDatos = document.querySelector('.btn-mostrarDatos');
const infoPersonal = document.querySelector('.info-personal');


const mostrarContenido = (btn1, btn2, contenido1, contenido2) => {
    btn1.addEventListener('click', () => {
        contenido1.classList.toggle('mostrar');

        if (btn1.textContent === 'Ver más') {
            btn1.textContent = 'Ver menos';
        } else {
            btn1.textContent = 'Ver más';
        }
    });

    btn2.addEventListener('click', () => {
        contenido2.classList.toggle('mostrar');

        if (btn2.textContent === 'Mostrar Datos') {
            btn2.textContent = 'Ocultar Datos';
        } else {
            btn2.textContent = 'Mostrar Datos';
        }
    });
};

mostrarContenido(btnVerMas, btnMostrarDatos, parrafos, infoPersonal);











//! Mostrar y ocultar Descripccion de los proyectos.

const btnVerMasProyectos = document.querySelectorAll('.btn-descProyect');
const decripcionProyectos = document.querySelectorAll('.info-oculta');


const mostrarDescripcion = (btn, descripcion) => {
    btn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            const estaMostrando = btn.classList.contains('mostrando');

            descripcion[i].classList.toggle('info-proyecto');
            btn.classList.toggle('mostrando', !estaMostrando);

            if (estaMostrando) {
                btn.textContent = 'Ver Descripción';
            } else {
                btn.textContent = 'Ocultar Descripción';
            }
        });
    });
};

mostrarDescripcion(btnVerMasProyectos, decripcionProyectos);