let currentLang = "en";

const translations = {
    en: {
        about: "About the project",
        duration2m: "Duration: 2 months",
        duration3w: "Duration: 3 Weeks",
        technologies: "Technologies",
        liveTest: "Live Test",
        github: "GitHub",
        whyMe: "Why me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        raisedInterest: "If my portofolio raised any interest in working together and or collaborating together, feel free to reach out in hopes of bringing your project to the next level together",
        privacyTextStart: "I've read the ",
        privacyLink: "privacy policy",
        privacyTextEnd: " and agree to the processing of my data as outlined.",
        iAmPassionate: "I am passionate about coding because i see it <br> as a hoby.My perfectionist attitude towards coding <br> encourages me to keep pushing my own boundaries. <br> With a problem solving analytical thinking and persistence <br> attitude i am trying to be the very best when it goes about coding.",
        IAm: "I Am",
        Located: "Located in Graz",
        iAmCurrentlyLearning: "I am currently learning",
        CurrentlyTrying: "Currently trying to master <br>Angular and TypeScript<br> to add to the versatility <br>of my coding experience",
        NeedATeamplayer: "Need a teamplayer? Here's what my colleagues say about me",
        legalNotice: "Legal notice",
        developer: "developer",
        frontendDeveloper: "FRONTEND DEVELOPER",
        letsTalk: "Let's talk",
        mySkills: "My Skills",
        myProjects: "My Projects",
        contactMe: "Contact me",
        yourName: "Your name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        send: "Send",
        consumerDispute: "Consumer dispute resolution/Universal arbitration body",
        WeAreNeither:"We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
        sourceText: "Source: ",
        sourceLink: "eRecht24"
    },

    de: {
        about: "Über das Projekt",
        duration2m: "Dauer: 2 Monate",
        duration3w: "Dauer: 3 Wochen",
        technologies: "Technologien",
        liveTest: "Live Test",
        github: "GitHub",
        whyMe: "Warum ich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
        raisedInterest: "Falls mein Portfolio Ihr Interesse an einer Zusammenarbeit geweckt hat, kontaktieren Sie mich gerne, um Ihr Projekt gemeinsam voranzubringen",
        privacyTextStart: "Ich habe die ",
        privacyLink: "Datenschutzbestimmungen",
        privacyTextEnd: " gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
        iAmPassionate: "Programmieren ist meine Leidenschaft, denn ich sehe es <br> als Hobby. Mein Perfektionismus beim Programmieren <br> spornt mich an, meine Grenzen immer wieder neu auszuloten. <br> Mit analytischem Denkvermögen, Problemlösungskompetenz und Ausdauer <br> versuche ich, beim Programmieren Bestleistungen zu erzielen.",
        IAm: "Ich befinde",
        Located: "mich in Graz",
        iAmCurrentlyLearning: "Ich lerne gerade",
        CurrentlyTrying: "Ich versuche derzeit, Angular<br> und TypeScript zu beherrschen,<br> um die Vielseitigkeit meiner Programmiererfahrung<br> zu erweitern.",
        NeedATeamplayer: "Brauchen Sie einen Teamplayer? Hier ist, was meine Kollegen über mich sagen.",
        legalNotice: "Impressum",
        developer: "entwickler",
        frontendDeveloper: "FRONTEND ENTWICKLER",
        letsTalk: "Lass uns reden",
        mySkills: "Meine Fähigkeiten",
        myProjects: "Meine Projekte",
        contactMe: "Kontaktieren Sie mich",
        yourName: "Ihr Name",
        yourEmail: "Ihr Email",
        yourMessage: "Ihre Nachricht",
        send: "Shicken",
        consumerDispute: "Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle",
        WeAreNeither:"Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen",
        sourceText: "Quelle: ",
        sourceLink: "eRecht24"
    }
};

const translations_projects = {
    en: {
        join: {
            aboutTitle: "About the project",
            aboutText: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
            processTitle: "How I have organised my work process",
            processText: "I've organized my work in such way that me and my colleagues focused on all of the important parts firstly, connecting all of the small pieces with firebase, and keeping our database structured, every single detail was very much precisely construced, so much so that we actually did the responsive part for a whole month for the best user experience.",
            teamTitle: "My group work experience",
            teamText: "Our team consisted of three people each with its own assigment.My role was focusing on the 'backend' part, keep the comunication and all of the individual loops running smoothly as possible. Was very pleased with the competence of my teammates, as it provided for both a painfree and fun time working on this project."
        },

        el_pollo_loco: {
            aboutTitle: "About the project",
            aboutText: "A simple Jump-and-Run game based on an object-oriented approach. Help Peppe to find all coins and salsa bottles to fight against the biggest enemy chicken.",
            processTitle: "How I have organised my work process",
            processText: "I spent time daily on debugging, writing code, and jsDoc documentation. The game runs smoothly at ~60 FPS with a clean module structure.",
            teamTitle: "What I have learnt",
            teamText: "This project was a real breakthrough for me, going on about defining all the small functions needed for Pepe.One of the biggest achievements is that the game is playable aswell on desktop as on mobile phones, thereby not limiting the amount of users playing. The biggest thing for me was the order each script was played,stacking the main scripts over the extending scripts was a real challenge for me."
        },

        pokeDex: {
            aboutTitle: "About the project",
            aboutText: "Based on the PokéAPI, a simple app that displays and catalogs Pokémon information.",
            processTitle: "How I have organised my work process",
            processText: "I learned how APIs work and used the PokéAPI to structure and display data efficiently.",
            teamTitle: "What I have learnt",
            teamText: "First introduction on to how API's work an their libraries, with the provided instructions and catalouge from the PokéAPI library, i've managed to build a really cool site."
        }
    },

    de: {
        join: {
            aboutTitle: "Über das Projekt",
            aboutText: "Aufgabenmanager inspiriert vom Kanban-System. Aufgaben erstellen und per Drag & Drop organisieren.",
            processTitle: "Wie ich meinen Arbeitsprozess organisiert habe",
            processText: "Ich habe meine Arbeit so organisiert, dass meine Kollegen und ich uns zunächst auf alle wichtigen Aspekte konzentriert haben: die Anbindung aller kleinen Komponenten an Firebase und die Strukturierung unserer Datenbank. Jedes einzelne Detail wurde sehr präzise ausgearbeitet, sodass wir tatsächlich einen ganzen Monat an der responsiven Gestaltung gearbeitet haben, um die bestmögliche Benutzererfahrung zu gewährleisten.",
            teamTitle: "Meine Erfahrung in der Teamarbeit",
            teamText: "Unser Team bestand aus drei Personen mit jeweils eigener Aufgabe. Meine Rolle konzentrierte sich auf den Backend-Bereich und sorgte für einen reibungslosen Ablauf der Kommunikation und aller einzelnen Prozesse. Ich war sehr zufrieden mit der Kompetenz meiner Teamkollegen, da die Arbeit an diesem Projekt dadurch angenehm und unkompliziert verlief."
        },

        el_pollo_loco: {
            aboutTitle: "Über das Projekt",
            aboutText: "Ein Jump-’n’-Run-Spiel mit objektorientiertem Ansatz. Hilf Peppe, Münzen und Salsaflaschen zu sammeln.",
            processTitle: "Wie ich meinen Arbeitsprozess organisiert habe",
            processText: "Ich habe täglich an Debugging und Code gearbeitet. Das Spiel läuft stabil mit ca. 60 FPS.",
            teamTitle: "Was ich gelernt habe",
            teamText: "Dieses Projekt war ein echter Durchbruch für mich, da ich alle notwendigen kleinen Funktionen für Pepe definieren musste.Einer der größten Erfolge ist, dass das Spiel sowohl auf Desktop-Computern als auch auf Mobiltelefonen spielbar ist und somit die Anzahl der Spieler nicht einschränkt. Die größte Herausforderung für mich war die Reihenfolge der Skripte. Das Stapeln der Hauptskripte über die Erweiterungsskripte war eine echte Herausforderung."
        },

        pokeDex: {
            aboutTitle: "Über das Projekt",
            aboutText: "Eine einfache App basierend auf der PokéAPI zur Anzeige von Pokémon-Daten.",
            processTitle: "Wie ich meinen Arbeitsprozess organisiert habe",
            processText: "Ich habe gelernt, wie APIs funktionieren und Daten verarbeitet werden.",
            teamTitle: "Was ich gelernt habe",
            teamText: "Nach meiner ersten Einführung in die Funktionsweise von APIs und ihren Bibliotheken, mit Hilfe der bereitgestellten Anweisungen und des Katalogs der PokéAPI-Bibliothek, ist es mir gelungen, eine wirklich coole Website zu erstellen."
        }
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const project = el.getAttribute("data-project");

        // default main translation
        let value = translations[lang]?.[key];

        // if project exists, override with project translations
        if (project && translations_projects[lang]?.[project]?.[key]) {
            value = translations_projects[lang][project][key];
        }

        if (value !== undefined) {
            el.innerHTML = value;
        }
    });
}
