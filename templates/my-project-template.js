/**
 * Template for the join project
 */
function joinTemplate() {
    return ` <div style="display:flex; max-width: 1440px">
                <div class="project-details-placement-div">
                    <div class="project-details-description-div">
                    <div class="project-details-description-section">
                        <!-- About the project -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-i18n="about">About the project</p>
                                <p class="project-details-description-duration" data-i18n="duration2m">Duration: 2 months</p>
                            </div>
                            <p class="project-details-description-text" data-project="join" data-i18n="aboutText">
                                Task manager inspired by the Kanban System. Create and organize tasks using 
                                drag and drop functions, assign users and categories.
                            </p>
                        </div>
                        
                        <!-- How I have organised my work process -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="join" data-i18n="processTitle">How I have organised my work process</p>
                            </div>
                            <p class="project-details-description-text" data-project="join" data-i18n="processText">
                            I've organized my work in such way that me and my colleagues 
                            focused on all of the important parts firstly, connecting all of the small pieces with firebase, and keeping our 
                            database structured, every single detail was very much precisely construced, so much so that we actually did the responsive
                            part for a whole month for the best user experience.
                            </p>
                        </div>
                        
                        <!-- My group work experience -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="join" data-i18n="teamTitle">My group work experience</p>
                            </div>
                            <p class="project-details-description-text" data-project="join" data-i18n="teamText">
                            Our team consisted of three people each with its own assigment.
                            My role was focusing on the "backend" part, keep the comunication and all of the individual loops running smoothly as possible.
                            Was very pleased with the competence of my teammates, as it provided for both a painfree and fun time working on this project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-details-pictures-div">
                <div class="projects-pictures-techonolgies-combined">
                    <p class="project-details-pictures-text" data-i18n="technologies">Technologies</p>
                        <div class="project-details-technologies-div">
                            <img src="./img/Technologie HTML.svg">
                            <img src="./img/Technologie JavaScript.svg">
                            <img src="./img/Technologie CSS.svg">
                        </div>
                </div>
                <img src="./img/Screenshot join.svg">
                <div class="projects-pictures-buttons">
                <div class="projects-live-test-button"><p class="projects-live-test-button-text">Live Test</p></div>
                <div class="projects-github-button"><p class="projects-github-button-text">GitHub</p></div>
            </div>
            </div>
        </div>`
}

/**
 * El Pollo Loco template
 */
function elPolloLocoTemplate() {
    return `<div style="display:flex; max-width:1440px;">
                <div class="project-details-placement-div">
                <div class="project-details-description-div">
                    <div class="project-details-description-section">
                        <!-- About the project -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="el_pollo_loco" data-i18n="aboutTitle">About the project</p>
                                <p class="project-details-description-duration" data-i18n="duration3w">Duration: 3 Weeks</p>
                            </div>
                            <p class="project-details-description-text" data-project="el_pollo_loco" data-i18n="aboutText">
                                A simple Jump-and-Run game based on a object-oriented approach. Help Peppe to find all coins and salsa bottles
                                to fight against the biggest enemy chicken.
                            </p>
                        </div>
                        
                        <!-- How I have organised my work process -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="el_pollo_loco" data-i18n="processTitle">How I have organised my work process</p>
                            </div>
                            <p class="project-details-description-text" data-project="el_pollo_loco" data-i18n="processText">
                                I spent time daily on debugging, writing code, and jsDoc documentation. The game runs smoothly at ~60 FPS with a clean module structure.
                            </p>
                        </div>
                        
                        <!-- My group work experience -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="el_pollo_loco" data-i18n="teamTitle">What i have learnt</p>
                            </div>
                            <p class="project-details-description-text" data-project="el_pollo_loco" data-i18n="teamText">
                                This project was a real breakthrough for me, going on about defining all the small functions needed for Pepe.
                                One of the biggest achievements is that the game is playable aswell on desktop as on mobile phones, thereby
                                not limiting the amount of users playing. The biggest thing for me was the order each script was played,
                                stacking the main scripts over the extending scripts was a real challenge for me.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="project-details-pictures-div">
                <div class="projects-pictures-techonolgies-combined">
                    <p class="project-details-pictures-text" data-i18n="technologies">Technologies</p>
                        <div class="project-details-technologies-div">
                            <img src="./img/Technologie HTML.svg">
                            <img src="./img/Technologie JavaScript.svg">
                            <img src="./img/Technologie CSS.svg">
                        </div>
                </div>
            <img src="./img/Screenshot El_pollo_loco.svg">
            <div class="projects-pictures-buttons">
                <div class="projects-live-test-button"><p class="projects-live-test-button-text">Live Test</p></div>
                <div class="projects-github-button"><p class="projects-github-button-text">GitHub</p></div>
            </div>
            </div>
        </div>`
}

/**
 * PokeDex template
 */
function pokeDexTemplate() {
    return `<div style="display:flex; max-width:1440px;">
                <div class="project-details-placement-div">
                <div class="project-details-description-div">
                    <div class="project-details-description-section">
                        <!-- About the project -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="pokeDex" data-i18n="about">About the project</p>
                                <p class="project-details-description-duration" data-i18n="duration3w">Duration: 3 weeks</p>
                            </div>
                            <p class="project-details-description-text" data-project="pokeDex" data-i18n="aboutText">
                                Based on the PokéAPI a simple library that provides and catalogues pokemon information.
                            </p>
                        </div>
                        
                        <!-- How I have organised my work process -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="pokeDex" data-i18n="processTitle">How I have organised my work process</p>
                            </div>
                            <p class="project-details-description-text" data-project="pokeDex" data-i18n="processText">
                                First introduction on to how API's work an their libraries, with the provided instructions and catalouge
                                from the PokéAPI library, i've managed to build a really cool site.
                            </p>
                        </div>
                        
                        <!-- My group work experience -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title" data-project="pokeDex" data-i18n="teamTitle">What i have learnt</p>
                            </div>
                            <p class="project-details-description-text" data-project="pokeDex" data-i18n="teamText">
                                This was a my first project using API's and certain libraries, had so much fun learning the connection
                                between API's my web-page and the server.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="project-details-pictures-div">
                <div class="projects-pictures-techonolgies-combined">
                    <p class="project-details-pictures-text" data-i18n="technologies">Technologies</p>
                        <div class="project-details-technologies-div">
                            <img src="./img/Technologie HTML.svg">
                            <img src="./img/Technologie JavaScript.svg">
                            <img src="./img/Technologie CSS.svg">
                        </div>
                </div>
            <img class="pokeDex-screenshot" src="./img/Screenshot PokeDex.svg">
            <div class="projects-pictures-buttons">
                <div class="projects-live-test-button"><p class="projects-live-test-button-text">Live Test</p></div>
                <div class="projects-github-button"><p class="projects-github-button-text">GitHub</p></div>
            </div>
        </div>
            </div>`
}

/**
 * Responsive template for mobile devices
 */
function joinTemplateResponsive() {
    return `<div class="project-details-placement-div">
                <div class="projects-details-descreption-div">
                    <div class="project-details-description-section">
                        <div class="project-details-title-responsive">
                            <div>
                                <p class="blue-title-responsive">Join</p>
                                <p class="white-description-responsive">
                                Technologies: HTML,CSS,JavaScript,Firebase<br>
                                Duration: 2 Months
                                </p>
                            </div>
                        </div> <!-- Added missing closing div -->
                        <div class="game-screenshot-div">
                            <img class="game-screenshot" src="./img/Screenshot join.svg">
                        </div>
                        <div class="project-details-description-responsive">
                            <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">About the project</p>
                                </div>
                                <p class="white-description-responsive">Task manager inspired by the Kanban System. Create and organize tasks using 
                                drag and drop functions, assign users and categories.
                                </p>
                            </div>
                        </div>
                        <div class="project-details-description-responsive-elipse">
                            <div class="elipse-notes-description-responsive">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="blue-title-responsive">How I have organised my work process</p>
                            </div>
                            <p class="white-description-responsive">I've organized my work in such way that me and my colleagues 
                            focused on all of the important parts firstly, connecting all of the small pieces with firebase, and keeping our 
                            database structured, every single detail was very much precisely construced, so much so that we actually did the responsive
                            part for a whole month for the best user experience.
                            </p>
                        </div>
                        <div class="project-details-description-responsive-elipse">
                            <div class="elipse-notes-description-responsive">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="blue-title-responsive">My group work experience</p>
                            </div>
                            <p class="white-description-responsive">Our team consisted of three people each with its own assigment.
                            My role was focusing on the "backend" part, keep the comunication and all of the individual loops running smoothly as possible.
                            Was very pleased with the competence of my teammates, as it provided for both a painfree and fun time working on this project.
                            </p>
                        </div>
                        <div class="projects-pictures-buttons">
                            <div class="projects-live-test-button"><p class="projects-live-test-button-text">Live Test</p></div>
                            <div class="projects-github-button"><p class="projects-github-button-text">GitHub</p></div>
                        </div> 
                    </div>
                </div>
            </div>`;
}


/**
 * Responsive template for mobile devices
 */
function elPolloLocoTemplateResponsive() {
    return `<div class="project-details-placement-div">
                <div class="projects-details-descreption-div">
                    <div class="project-details-description-section">
                        <div class="project-details-title-responsive">
                            <p class="blue-title-responsive">El Pollo Loco</p>
                            <p class="white-description-responsive">
                            Technologies: HTML,CSS,JavaScript<br>
                            Duration: 3 Weeks
                            </p>
                        </div>
                        <div class="game-screenshot-div">
                            <img class="game-screenshot-el-pollo-loco" src="./img/Screenshot El_pollo_loco.svg">
                        </div>
                        <div class="project-details-description-responsive">
                            <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">About the project</p>
                                </div>
                            <p class="white-description-responsive">A simple Jump-and-Run game based on a object-oriented approach. Help Peppe to find all coins and salsa bottles
                                to fight against the biggest enemy chicken.
                            </p>
                            </div>
                        </div>
                        <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">How I have organised my work process</p>
                                </div>
                            <p class="white-description-responsive">I've organized my work so that i spent 2h daily on debugging and writing code aswell as the needed jsDoc documentation.
                                I kept the game fluid, with only one defined playAnimation function runing on ~60FPS, all of the module files 
                                are in a separate folder, facing the front is only the index and the global script.
                            </p>
                            </div>
                            <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">What i have learnt</p>
                                </div>
                            <p class="white-description-responsive">This project was a real breakthrough for me, going on about defining all the small functions needed for Pepe.
                                One of the biggest achievements is that the game is playable aswell on desktop as on mobile phones, thereby
                                not limiting the amount of users playing. The biggest thing for me was the order each script was played,
                                stacking the main scripts over the extending scripts was a real challenge for me.
                            </p>
                            </div>
                           <div class="projects-pictures-buttons">
                            <div class="projects-live-test-button"><p class="projects-live-test-button-text">Live Test</p></div>
                            <div class="projects-github-button"><p class="projects-github-button-text">GitHub</p></div>
                            </div> 
                    </div>
                </div>
            </div>`
}


/**
 * Responsive template for mobile devices
 */
function pokeDexTemplateResponsive() {
    return `<div class="project-details-placement-div">
                <div class="projects-details-descreption-div">
                    <div class="project-details-description-section">
                        <div class="project-details-title-responsive">
                            <p class="blue-title-responsive">PokeDex</p>
                            <p class="white-description-responsive">
                            Technologies: HTML,CSS,JavaScript<br>
                            Duration: 3 Weeks
                            </p>
                        </div>
                        <div class="game-screenshot-div">
                            <img class="pokeDex-screenshot" src="./img/Screenshot PokeDex.svg">
                        </div>
                        <div class="project-details-description-responsive">
                            <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">About the project</p>
                                </div>
                            <p class="white-description-responsive">Based on the PokéAPI a simple library that provides and catalogues pokemon information.
                            </p>
                            </div>
                        </div>
                        <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">How I have organised my work process</p>
                                </div>
                            <p class="white-description-responsive">First introduction on to how API's work an their libraries, with the provided instructions and catalouge
                                from the PokéAPI library, i've managed to build a really cool site.
                            </p>
                            </div>
                            <div class="project-details-description-responsive-elipse">
                                <div class="elipse-notes-description-responsive">
                                    <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                    <p class="blue-title-responsive">What i have learnt</p>
                                </div>
                            <p class="white-description-responsive">This was a my first project using API's and certain libraries, had so much fun learning the connection
                                between API's my web-page and the server.
                            </p>
                            </div>
                           <div class="projects-pictures-buttons">
                            <div class="projects-live-test-button"><p class="projects-live-test-button-text">Live Test</p></div>
                            <div class="projects-github-button"><p class="projects-github-button-text">GitHub</p></div>
                            </div> 
                    </div>
                </div>
            </div>`
}

