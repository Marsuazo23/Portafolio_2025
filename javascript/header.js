function loadHeader() {
    /* Definimos el contenido HTML del encabezado en una variable (headerHTML) */
    const headerHTML = `
        <header>
            <nav>
                <ul class="menu">
                    <li class="logo">
                        <img src="imagenes/logo.png" alt="Logo" />
                    </li>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="sobremi.html">Sobre mí</a></li>
                    <li><a href="proyectos.html">Proyectos</a></li>
                    <li><a href="contactame.html">Contáctame</a></li>
                </ul>
            </nav>
        </header>
    `;
    /* Insertamos el contenido HTML generado en el contenedor con id 'header-container' */
    document.getElementById('header-container').innerHTML = headerHTML;
}
