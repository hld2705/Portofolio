/**
 * Init function responsible for launching all functions upon page load
 */
function init() {
    templateRoute('join');
    initScrollButtons();
}

/**
 * 
 * @param {*} projectId 
 * @returns the needed template based on the width of the screen, and also adds the "highlight" class
 */
function templateRoute(projectId) {
    let container = document.getElementById("project-details");
    if (!container) return;

    ['join', 'el_pollo_loco', 'pokedex'].forEach(id => {
        let el = document.getElementById(id);
        if (el) el.classList.remove("highlight");
    });

    const isMobile = window.innerWidth <= 950;

    const templates = {
        join: [joinTemplate, joinTemplateResponsive],
        el_pollo_loco: [elPolloLocoTemplate, elPolloLocoTemplateResponsive],
        pokedex: [pokeDexTemplate, pokeDexTemplateResponsive]
    };

    const [desktop, mobile] = templates[projectId] || templates.join;

    document.getElementById(projectId || "join")?.classList.add("highlight");
    container.innerHTML = (isMobile ? mobile : desktop)();
}


window.addEventListener('resize', function() {
    const currentProject = document.querySelector('.project-names-tabs.highlight')?.id;
    if (currentProject) {
        templateRoute(currentProject);
    }
});


function initScrollButtons() {
    const arrowDown = document.getElementById("arrowdown");
    const arrowUp = document.getElementById("arrowup");
    const whyMe = document.getElementById("why-me");
    const heroSection = document.getElementById("hero-section");
    
    if (arrowDown) {
        arrowDown.addEventListener('click', function() {
            scrollToElement(whyMe);
        });
    }
    
    if (arrowUp) {
        arrowUp.addEventListener('click', function() {
            scrollToElement(heroSection);
        });
    }
}

function scrollToElement(element) {
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}