/**
 * Init function responsible for launching all functions upon page load
 */
function init() {
    templateRoute('join');
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
    startTypewriter();
    initScrollAnimations();

    if (window.location.hash) {
    setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) {
            if (window.location.hash === '#contact-me') {
                el.style.scrollMarginTop = "25px";
            }
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
}
}

/**
 * Function for scroll animations
 */
function initScrollAnimations() {
    const items = document.querySelectorAll('.why-me, .my-skills, .my-projects, .contact-me-placement-div');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10 });
    items.forEach(function(item) {
        observer.observe(item);
    });
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
async function arrowScrollFooter() {
    let arrowDown = document.getElementById("arrowdown");
    arrowDown.classList.add("arrow-down-img-clicked");
    await delay(200);
    window.scrollTo(0, 800);
    if(window.innerWidth<900){
        window.scrollTo(0, 990);
    }
    await delay(500);
    arrowDown.classList.remove("arrow-down-img-clicked");
}

/**
 * Function for the arrow to be able to scroll up also to apply and delete the needed classlist
 */
async function arrowScrollHeader() {
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
function menuScroll(id) {
    const sections = {
        whyMe: 'why-me',
        skills: 'skills',
        projects: 'projects',
        contacts: 'contact-me',
        letstalk: 'contact'
    };
    removeHighlight();
    const anchorMap = { whyMe: 'anchor2-why-me', skills: 'anchor3-skills', projects: 'anchor4-projects', contacts: 'anchor5-contacts', letstalk: 'anchor5-contacts' };
    document.getElementById(anchorMap[id])?.classList.add('menu-bar-highlight');
    document.getElementById(sections[id])?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Removes the highlights from the menu bar
 */
function removeHighlight() {
    const ids = ["anchor2-why-me", "anchor3-skills", "anchor4-projects", "anchor5-contacts"];
    ids.forEach(id => document.getElementById(id).classList.remove("menu-bar-highlight"));
}

/**
 * Needed a separate function for menuScroll Impressum, because the page needs to route back to index.html
 */
function menuScrollImpressum(id) {
    const routes = { whyMe: "#why-me", skills: "#skills", projects: "#projects", contacts: "#contact-me" };
    const anchorMap = { whyMe: 'anchor2-why-me', skills: 'anchor3-skills', projects: 'anchor4-projects', contacts: 'anchor5-contacts' };
    removeHighlight();
    document.getElementById(anchorMap[id])?.classList.add('menu-bar-highlight');
    setTimeout(() => { window.location.href = "../index.html" + routes[id]; }, 400);
}

/**
 * Responsive menu - toggles between showing responsive menu and profile picture
 */
function responsiveMenu() {
    let elipseResponsive = document.getElementById("hero-section-responsive");
    let profilePicture = document.getElementById("menu-profile-picture");

    elipseResponsive.classList.toggle("d_none");
    profilePicture.classList.toggle("d_none");
}

/**
 * Responsive menu - toggles between showing responsive menu
 */
function responsiveMenuImpressum() {
    let elipseResponsive = document.getElementById("hero-section-responsive-impressum");
    elipseResponsive.classList.toggle("d_none");
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
    } else if (lang === "de") {
        deElipse.classList.add("elipse");
        deElipseResponsive.classList.add("elipse")
    }
}

/**
 * Function that hides the profile picture once the menu bar is opened
 */
document.addEventListener('click', function () {
    let elipseResponsiveImpressum = document.getElementById("hero-section-responsive-impressum");
    let elipseResponsiveMain = document.getElementById("hero-section-responsive");
    let profilePicture = document.getElementById("menu-profile-picture");

    if (elipseResponsiveImpressum && !elipseResponsiveImpressum.classList.contains("d_none")) {
        elipseResponsiveImpressum.classList.add("d_none");
    }

    if (elipseResponsiveMain && elipseResponsiveMain.style.display === "flex") {
        profilePicture.style.display = "flex";
        elipseResponsiveMain.style.display = "none";
    }
});


/**
 * 
 * @returns Typewritter effect
 */
function startTypewriter() {
    const el = document.querySelector('.located-in');
    const iAm = document.querySelector('.i-am');
    if(!el && !iAm) return
    const strings = {
        en: { iam: 'I am', texts: ['located in Graz...', 'available remote...'] },
        de: { iam: 'Ich', texts: ['befinde mich in Graz...', 'bin remote verfügbar...'] }
    };
    let index = 0, isDeleting = false, text = '';
    function type() {
        const lang = localStorage.getItem('lang') || 'en';
        const current = strings[lang].texts[index];
        iAm.textContent = strings[lang].iam;
        text = isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
        el.textContent = text;
        if (!isDeleting && text === current) { isDeleting = true; setTimeout(type, 1800); return; }
        if (isDeleting && text === '') { isDeleting = false; index = (index + 1) % strings[lang].texts.length; }
        setTimeout(type, isDeleting ? 40 : 80);
    }
    type();
}