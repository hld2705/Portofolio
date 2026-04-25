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
    
    // Check if screen is mobile
    const isMobile = window.innerWidth <= 950;
    
    switch(projectId) {
        case 'join':
            const joinElement = document.getElementById("join");
            if (joinElement) joinElement.classList.add("highlight");
            container.innerHTML = isMobile ? joinTemplateResponsive() : joinTemplate();
            break;
            
        case 'el_pollo_loco':
            const elPolloLocoElement = document.getElementById("el_pollo_loco");
            if (elPolloLocoElement) elPolloLocoElement.classList.add("highlight");
            container.innerHTML = isMobile ? elPolloLocoTemplateResponsive() : elPolloLocoTemplate();
            break;
            
        case 'pokedex':
            const pokeDexElement = document.getElementById("pokedex");
            if (pokeDexElement) pokeDexElement.classList.add("highlight");
            container.innerHTML = isMobile ? pokeDexTemplateResponsive() : pokeDexTemplate();
            break;
            
        default:
            const defaultElement = document.getElementById("join");
            if (defaultElement) defaultElement.classList.add("highlight");
            container.innerHTML = isMobile ? joinTemplateResponsive() : joinTemplate();
    }
}

// Add resize listener to update template when screen size changes
window.addEventListener('resize', function() {
    const currentProject = document.querySelector('.project-names-tabs.highlight')?.id;
    if (currentProject) {
        templateRoute(currentProject);
    }
});