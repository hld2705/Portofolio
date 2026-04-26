/**
 * Init function responsible for launching all functions upon page load
 */
function init() {
    templateRoute('join');
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


window.addEventListener('resize', function () {
    const currentProject = document.querySelector('.project-names-tabs.highlight')?.id;
    if (currentProject) {
        templateRoute(currentProject);
    }
});

/**
 * Helper function to keep the code clean but delaying two separate actions on the same tag
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Function for the arrow to be able to scroll down also to apply and delete the needed classlist
 */
async function arrowScrollFooter(){
    let arrowDown = document.getElementById("arrowdown");
    arrowDown.classList.add("arrow-down-img-clicked");
    await delay(200);
    window.scrollTo(0, 750);
    await delay(500);
    arrowDown.classList.remove("arrow-down-img-clicked");
}

/**
 * Function for the arrow to be able to scroll up also to apply and delete the needed classlist
 */
async function arrowScrollHeader(){
    let arrowUp = document.getElementById("arrowup");
    arrowUp.classList.add("arrow-down-img-clicked");
    await delay(200);
    window.scrollTo(0, 0);
    await delay(500);
    arrowUp.classList.remove("arrow-down-img-clicked");
}

