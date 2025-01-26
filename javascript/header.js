function loadHeader() {
    /*Definimos el contenido HTML del encabezado en una variable (headerHTML)*/
    const headerHTML = `
        <header>
            <nav>
                <div class="perfil-contenedor">
                    <div class="Perfil">
                        <img src="imagenes/imagen_perfil.jpeg" alt="Imagen Perfil" />
                    </div>
                    <h1><em><strong>
                        Marcela Suazo
                    </h1></em></strong>
                </div>
                <ul class="menu-izquierda">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="SobreMi.html">Sobre mí</a></li>
                    <li><a href="Proyectos.html">Proyectos</a></li>
                    <li><a href="Contactame.html">Contáctame</a></li>
                </ul>
            </nav>
        </header>
    `;
    /*Insertamos el contenido HTML generado en el contenedor con id 'header-container'*/
    document.getElementById('header-container').innerHTML = headerHTML;
}
