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
        iveReadPrivacyPolicy: "I've read the privacy policy and agree to the processing of my data as outlined.",
        iAmPassionate: "I am passionate about coding because i see it as a hoby.My perfectionist attitude towards coding encourages me to keep pushing my own boundaries. With a problem solving analytical thinking and persistence attitude i am trying to be the very best when it goes about coding",
        iAmLocated: "I am located in Graz",
        iAmCurrentlyLearning: "I am currently learning",
        CurrentlyTrying: "Currently trying to master Angular and TypeScript to add to the versatility of my coding experience",
        NeedATeamplayer: "Need a teamplayer? Here's what my colleagues say about me",
        LegalNotice: "Legal notice",
        developer: "developer",
        frontendDeveloper: "FRONTEND DEVELOPER"
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
        iveReadPrivacyPolicy: "Ich habe die Datenschutzbestimmungen gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
        iAmPassionate: "Programmieren ist meine Leidenschaft, denn ich sehe es als Hobby. Mein Perfektionismus beim Programmieren spornt mich an, meine Grenzen immer wieder neu auszuloten. Mit analytischem Denkvermögen, Problemlösungskompetenz und Ausdauer versuche ich, beim Programmieren Bestleistungen zu erzielen.",
        iAmLocated: "Ich befinde mich in Graz.",
        iAmCurrentlyLearning: "Ich lerne gerade",
        CurrentlyTrying: "Ich versuche derzeit, Angular und TypeScript zu beherrschen, um die Vielseitigkeit meiner Programmiererfahrung zu erweitern.",
        NeedATeamplayer: "Brauchen Sie einen Teamplayer? Hier ist, was meine Kollegen über mich sagen.",
        LegalNotice: "Impressum",
        developer: "entwickler",
        frontendDeveloper: "FRONTEND ENTWICKLER"
    }
};

const translations_projects = {
    en: {
        join: {
            aboutTitle: "About the project",
            aboutText: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",

            processTitle: "How I have organised my work process",
            processText: "I've organized my work in such way that me and my colleagues focused on all of the important parts firstly...",

            teamTitle: "My group work experience",
            teamText: "Our team consisted of three people each with its own assignment..."
        }
    },

    de: {
        join: {
            aboutTitle: "Über das Projekt",
            aboutText: "Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop...",

            processTitle: "Wie ich meinen Arbeitsprozess organisiert habe",
            processText: "Ich habe meine Arbeit so organisiert, dass mein Team und ich zuerst die wichtigsten Teile umgesetzt haben...",

            teamTitle: "Meine Erfahrung in der Teamarbeit",
            teamText: "Unser Team bestand aus drei Personen, jede mit einer eigenen Aufgabe..."
        }
    },

    en: {
        el_pollo_loco: {
            aboutTitle: "About the project",
            aboutText: "A simple Jump-and-Run game based on a object-oriented approach. Help Peppe to find all coins and salsa bottles to fight against the biggest enemy chicken.",

            processTitle: "How I have organised my work process",
            processText: "I've organized my work so that i spent 2h daily on debugging and writing code aswell as the needed jsDoc documentation. I kept the game fluid, with only one defined playAnimation function runing on ~60FPS, all of the module files are in a separate folder, facing the front is only the index and the global script.",

            teamTitle: "What i have learnt",
            teamText: "This project was a real breakthrough for me, going on about defining all the small functions needed for Pepe. One of the biggest achievements is that the game is playable aswell on desktop as on mobile phones, thereby not limiting the amount of users playing. The biggest thing for me was the order each script was played, stacking the main scripts over the extending scripts was a real challenge for me."
        }
    },

    de: {
        el_pollo_loco: {
            aboutTitle: "Über das Projekt",
            aboutText: "Ein simples Jump-’n’-Run-Spiel mit objektorientierter Grafik. Hilf Peppe, alle Münzen und Salsaflaschen zu finden, um gegen das größte Hühnermonster zu kämpfen.",

            processTitle: "Wie ich meinen Arbeitsprozess organisiert habe",
            processText: "Ich habe meine Arbeit so organisiert, dass ich täglich 2 Stunden mit Debugging, Code schreiben und der benötigten jsDoc-Dokumentation verbracht habe. Das Spiel läuft flüssig, mit nur einer definierten playAnimation-Funktion, die mit ca. 60 FPS läuft. Alle Moduldateien befinden sich in einem separaten Ordner; im Vordergrund sind nur die Indexdatei und das globale Skript.",

            teamTitle: "Was habe ich gelernt",
            teamText: "Dieses Projekt war ein echter Durchbruch für mich, da ich alle notwendigen kleinen Funktionen für Pepe definieren musste. Eine der größten Errungenschaften ist, dass das Spiel sowohl auf Desktop-Computern als auch auf Mobiltelefonen spielbar ist und somit die Anzahl der Spieler nicht einschränkt. Die größte Herausforderung für mich war die Reihenfolge der Skripte; die Hauptskripte über die Erweiterungsskripte zu stapeln, war eine echte Hürde."
        }
    },
    en: {
        pokeDex: {
            aboutTitle: "About the project",
            aboutText: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",

            processTitle: "How I have organised my work process",
            processText: "First introduction on to how API's work an their libraries, with the provided instructions and catalouge from the PokéAPI library, i've organized and kept the page small, most of the heavylifting did the fameous PokéAPI library.",

            teamTitle: "What i have learnt",
            teamText: "This was a my first project using API's and certain libraries, had so much fun learning the connection between API's my web-page and the server."
        }
    },

    de: {
        pokeDex: {
            aboutTitle: "Über das Projekt",
            aboutText: "Basierend auf der PokéAPI ist dies eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.",

            processTitle: "Wie ich meinen Arbeitsprozess organisiert habe",
            processText: "Diese erste Einführung in die Funktionsweise von APIs und ihren Bibliotheken, basierend auf den bereitgestellten Anweisungen und dem Katalog der PokéAPI-Bibliothek, habe ich übersichtlich gestaltet und die Seite kurz gehalten. Den Großteil der Arbeit hat die bekannte PokéAPI-Bibliothek bereits erledigt.",

            teamTitle: "Was habe ich gelernt",
            teamText: "Dies war mein erstes Projekt, bei dem ich APIs und bestimmte Bibliotheken verwendet habe. Es hat mir sehr viel Spaß gemacht, die Verbindung zwischen den APIs, meiner Webseite und dem Server kennenzulernen."
        }
    }
};