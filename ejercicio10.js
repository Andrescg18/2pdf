const nuevoParrafo = 
document.createElement('p');

 nuevoParrafo.textContent = 'Este es un 
párrafo creado con JavaScript';

 nuevoParrafo.id = 'parrafo-dinamico';
 nuevoParrafo.className = 'texto 
destacado';
 nuevoParrafo.setAttribute('data-creado', 
'true');