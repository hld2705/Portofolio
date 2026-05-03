/**
 * Init function responsible for launching all functions upon page load
 */
function init() {
    templateRoute('join');
    setLanguage('en');
    //sendButtonActivation();
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

/**
 * Function for making the menu-bar buttons scrollable
 */
function menuScroll(id){
    const elements = {
        whyMe: ["anchor2-why-me", 750],
        skills: ["anchor3-skills", 1050],
        projects: ["anchor4-projects", 1600],
        contacts: ["anchor5-contacts", 3000],
        letstalk: ["anchor5-contacts", 4500]
    };
    
    removeHighlight();
    document.getElementById(elements[id][0]).classList.add("menu-bar-highlight");
    setTimeout(() => window.scrollTo(0, elements[id][1]), 200);
}

/**
 * Removes the highlights from the menu bar
 */
function removeHighlight(){
    const ids = ["anchor2-why-me", "anchor3-skills", "anchor4-projects", "anchor5-contacts"];
    ids.forEach(id => document.getElementById(id).classList.remove("menu-bar-highlight"));
}


/**
 * Responsive menu - toggles between showing responsive menu and profile picture
 */
function responsiveMenu() {
    let elipseResponsive = document.getElementById("hero-section-responsive");
    let profilePicture = document.getElementById("menu-profile-picture");
    
    if (elipseResponsive.style.display === "flex") {
        profilePicture.style.display = "flex";
        elipseResponsive.style.display = "none";
    } else {
        profilePicture.style.display = "none";
        elipseResponsive.style.display = "flex";
    }
}

/**
 * Responsive menu - toggles between showing responsive menu
 */
function responsiveMenuImpressum() {
    let elipseResponsive = document.getElementById("hero-section-responsive");
    
    if (elipseResponsive.style.display === "flex") {
        elipseResponsive.style.display = "none";
    } else {
        elipseResponsive.style.display = "flex";
    }
}

/**
 * Language selection elipse
 */
function toggleElipse(lang) {
    const enElipse = document.getElementById("en");
    const deElipse = document.getElementById("de");
    const enElipseResponsive = document.getElementById("enresponsive");
    const deElipseResponsive = document.getElementById("deresponsive");
    enElipse.classList.remove("elipse");
    deElipse.classList.remove("elipse");
    enElipseResponsive.classList.remove("elipse");
    deElipseResponsive.classList.remove("elipse");
    if (lang === "en") {
        enElipse.classList.add("elipse");
        enElipseResponsive.classList.add("elipse");
    } else if(lang === "de"){
        deElipse.classList.add("elipse");
        deElipseResponsive.classList.add("elipse")
    }
}

function closeOverlay() {
    let overlay = document.getElementById("overlay");
    let elipseResponsive = document.getElementById("hero-section-responsive");
    let profilePicture = document.getElementById("menu-profile-picture");

    overlay.style.display = "none";
    elipseResponsive.style.display = "none";
    profilePicture.style.display = "flex";
}