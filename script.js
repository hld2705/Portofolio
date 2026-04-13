/**
 * Init function responsible for launching all functions upon page load
 */
function init() {
    templateRoute('join');
}

function templateRoute(projectId) {
    let container = document.getElementById("project-details");
    if (!container) return;
    const allProjects = ['join', 'el_pollo_loco', 'pokedex'];
    allProjects.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.remove("highlight");
    });
    container.innerHTML = '';
    switch(projectId) {
        case 'join':
            const joinElement = document.getElementById("join");
            if (joinElement) joinElement.classList.add("highlight");
            container.innerHTML = joinTemplate();
            break;
            
        case 'el_pollo_loco':
            const elPolloLocoElement = document.getElementById("el_pollo_loco");
            if (elPolloLocoElement) elPolloLocoElement.classList.add("highlight");
            container.innerHTML = elPolloLocoTemplate();
            break;
            
        case 'pokedex':
            const pokeDexElement = document.getElementById("pokedex");
            if (pokeDexElement) pokeDexElement.classList.add("highlight");
            container.innerHTML = pokeDexTemplate();
            break;
            
        default:
            const defaultElement = document.getElementById("join");
            if (defaultElement) defaultElement.classList.add("highlight");
            container.innerHTML = joinTemplate();
    }
}