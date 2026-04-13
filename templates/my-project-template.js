/**
 * Template for the join project
 */
function joinTemplate() {
    return `<div class="project-details-placement-div">
                <div class="project-details-description-div">
                    <div class="project-details-description-section">
                        <!-- About the project -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">About the project</p>
                                <p class="project-details-description-duration">Duration: 2 months</p>
                            </div>
                            <p class="project-details-description-text">
                                Task manager inspired by the Kanban System. Create and organize tasks using 
                                drag and drop functions, assign users and categories.
                            </p>
                        </div>
                        
                        <!-- How I have organised my work process -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">How I have organised my work process</p>
                            </div>
                            <p class="project-details-description-text">
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
                                <p class="project-details-description-title">My group work experience</p>
                            </div>
                            <p class="project-details-description-text">
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
                    <p class="project-details-pictures-text">Technologies</p>
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
            `
}

/**
 * El Pollo Loco template
 */
function elPolloLocoTemplate() {
    return `<div class="project-details-placement-div">
                <div class="project-details-description-div">
                    <div class="project-details-description-section">
                        <!-- About the project -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">About the project</p>
                                <p class="project-details-description-duration">Duration: 3 weeks</p>
                            </div>
                            <p class="project-details-description-text">
                                A simple Jump-and-Run game based on a object-oriented approach. Help Peppe to find all coins and salsa bottles
                                to fiht against the biggest enemy chicken.
                            </p>
                        </div>
                        
                        <!-- How I have organised my work process -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">How I have organised my work process</p>
                            </div>
                            <p class="project-details-description-text">
                                I've organized my work so that i spent 2h daily on debugging and writing code aswell as the needed jsDoc documentation.
                                I kept the game fluid, with only one defined playAnimation function runing on ~60FPS, all of the module files 
                                are in a separate folder, facing the front is only the index and the global script.
                            </p>
                        </div>
                        
                        <!-- My group work experience -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">What i have learnt</p>
                            </div>
                            <p class="project-details-description-text">
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
                    <p class="project-details-pictures-text">Technologies</p>
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
            `
}

/**
 * PokeDex template
 */
function pokeDexTemplate() {
    return `<div class="project-details-placement-div">
                <div class="project-details-description-div">
                    <div class="project-details-description-section">
                        <!-- About the project -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">About the project</p>
                                <p class="project-details-description-duration">Duration: 3 weeks</p>
                            </div>
                            <p class="project-details-description-text">
                                Based on the PokéAPI a simple library that provides and catalogues pokemon information.
                            </p>
                        </div>
                        
                        <!-- How I have organised my work process -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">How I have organised my work process</p>
                            </div>
                            <p class="project-details-description-text">
                                First introduction on to how API's work an their libraries, with the provided instructions and catalouge
                                from the PokéAPI library, i've managed to build a really cool site.
                            </p>
                        </div>
                        
                        <!-- My group work experience -->
                        <div class="project-details-description-item">
                            <div class="project-details-description-header">
                                <img src="./img/Ellipse 8.svg" class="description-dot-icon">
                                <p class="project-details-description-title">What i have learnt</p>
                            </div>
                            <p class="project-details-description-text">
                                This was a my first project using API's and certain libraries, had so much fun learning the connection
                                between API's my web-page and the server.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="project-details-pictures-div">
                <div class="projects-pictures-techonolgies-combined">
                    <p class="project-details-pictures-text">Technologies</p>
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
            `
}