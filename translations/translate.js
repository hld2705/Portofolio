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
        iAmPassionate: "Passionate about coding, with a strong focus on problem-solving, growth, and continuous improvement.",
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
        WeAreNeither: "We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
        sourceText: "Source: ",
        sourceLink: "eRecht24",
        project: "Project",
        nameRequired: "*Please enter your name!",
        threeCharactersNeeded: "*At least 3 characters needed!",
        noSpecialCharacters: "*No special characters allowed!",
        fiveCharactersNeeded: "*At least 5 characters needed!",
        emailRequired: "*Please enter your email!",
        messageRequired: "*Please enter your message!",
        validEmail: "*Please enter a valid email address!"
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
        iAmPassionate: "Passioniert fürs Programmieren, mit einem starken Fokus auf Problemlösung, Wachstum und kontinuierliche Verbesserung.",
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
        send: "Senden",
        consumerDispute: "Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle",
        WeAreNeither: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen",
        sourceText: "Quelle: ",
        sourceLink: "eRecht24",
        project: "Projekt",
        nameRequired: "*Bitte geben Sie Ihren Namen ein!",
        threeCharactersNeeded: "*Mindestens 3 Zeichen erforderlich!",
        noSpecialCharacters: "*Sonderzeichen sind nicht erlaubt!",
        fiveCharactersNeeded: "*Mindestens 5 Zeichen erforderlich!",
        emailRequired: "*Bitte geben Sie Ihre E-Mail-Adresse ein!",
        messageRequired: "*Bitte geben Sie Ihre Nachricht ein!",
        validEmail: "*Bitte geben Sie eine gültige E-Mail-Adresse ein!"
    }
};

const translations_projects = {
    en: {
        join: {
            aboutTitle: "About the project",
            aboutText: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
            processTitle: "How I have organised my work process",
            processText: "My colleagues and I focused on the core features first, integrated everything with Firebase, and refined the responsive design for the best user experience.",
            teamTitle: "My group work experience",
            teamText: "Our team consisted of three people, each with their own role. I focused on the backend, ensuring smooth communication and functionality. Working with such competent teammates made the project both efficient and enjoyable."
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
            processText: "Meine Kollegen und ich konzentrierten uns auf die Kernfunktionen, die Firebase-Anbindung und eine saubere Datenbankstruktur, mit besonderem Fokus auf responsives Design.",
            teamTitle: "Meine Erfahrung in der Teamarbeit",
            teamText: "Unser Team bestand aus drei Personen mit klaren Aufgaben. Ich war für das Backend und den reibungslosen Ablauf der Prozesse verantwortlich."
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

    const translation_datenschutz = {
    de: {
        privacyPolicyTitle: "Erklärung zur Informationspflicht",
        privacyPolicyHeading: "Datenschutzerklärung",
        privacyIntro: "In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).",
        ipTracking: "Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.",
        contactTitle: "Kontakt mit uns",
        contactText: "Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.",
        cookiesTitle: "Cookies",
        cookiesText: "Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.",
        googleFontsTitle: "Google Fonts",
        googleFontsText: "Unsere Website verwendet Schriftarten von „Google Fonts“. Der Dienstanbieter dieser Funktion ist:",
        googleAddress: "Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland",
        googlePhone: "Tel: +353 1 543 1000",
        googleCacheText: "Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem Rechner setzen oder analysieren.",
        googleUsageText: "Die Nutzung von „Google-Fonts“ dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.",
        googleMoreInfo: "Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link:",
        googlePrivacyInfo: "Weitere Informationen über den Umgang mit Nutzerdaten von Google können Sie der Datenschutzerklärung entnehmen:",
        googleUsaText: "Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield unterworfen.",
        rightsTitle: "Ihre Rechte als Betroffener",
        rightsText: "Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:",
        rightInfo: "Auskunft",
        rightDelete: "Löschung der Daten",
        rightCorrection: "Berichtigung der Daten",
        rightTransfer: "Übertragbarkeit der Daten",
        rightWithdraw: "Wiederruf und Widerspruch zur Datenverarbeitung",
        rightRestriction: "Einschränkung",
        complaintText: "Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (halidcrnkic@gmail.com) oder der Datenschutzbehörde zu beschweren.",
        contactDetailsTitle: "Sie erreichen mich unter folgenden Kontaktdaten:",
        websiteOperator: "Webseitenbetreiber:",
        phoneNumber: "Telefonnummer:",
        email: "Email:"
    },

    en: {
        privacyPolicyTitle: "Declaration on the Obligation to Provide Information",
        privacyPolicyHeading: "Privacy Policy",
        privacyIntro: "In the following privacy policy, we inform you about the most important aspects of data processing within the scope of our website. We collect and process personal data only on the basis of legal regulations (General Data Protection Regulation, Telecommunications Act 2003).",
        ipTracking: "As soon as you access or visit our website as a user, your IP address, as well as the beginning and end of the session, are recorded. This is technically necessary and therefore represents a legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR.",
        contactTitle: "Contacting Us",
        contactText: "If you contact us either via our contact form on the website or by email, the data you provide will be stored by us for six months for the purpose of processing your request or in case of follow-up questions. Your transmitted data will not be shared without your consent.",
        cookiesTitle: "Cookies",
        cookiesText: "Our website uses so-called cookies. These are small text files that are stored on your device with the help of the browser. They do not cause any damage. We use cookies to make our services more user-friendly. Some cookies remain stored on your device until you delete them. They allow us to recognize your browser on your next visit. If you do not want this, you can configure your browser to inform you about the setting of cookies and allow this only in individual cases. Disabling cookies may limit the functionality of our website.",
        googleFontsTitle: "Google Fonts",
        googleFontsText: "Our website uses fonts from “Google Fonts”. The service provider of this function is:",
        googleAddress: "Google Ireland Limited Gordon House, Barrow Street Dublin 4, Ireland",
        googlePhone: "Phone: +353 1 543 1000",
        googleCacheText: "When accessing this website, your browser loads fonts and stores them in the cache. Since you, as a visitor to the website, receive data from the service provider, Google may under certain circumstances set or analyze cookies on your computer.",
        googleUsageText: "The use of “Google Fonts” serves to optimize our service and ensure a consistent presentation of content. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR.",
        googleMoreInfo: "Further information about Google Fonts can be found at the following link:",
        googlePrivacyInfo: "Further information about how Google handles user data can be found in the privacy policy:",
        googleUsaText: "Google also processes data in the USA but has submitted itself to the EU-US Privacy Shield.",
        rightsTitle: "Your Rights as a Data Subject",
        rightsText: "As a data subject, you generally have the following rights regarding your data stored by us:",
        rightInfo: "Information",
        rightDelete: "Deletion of data",
        rightCorrection: "Correction of data",
        rightTransfer: "Data portability",
        rightWithdraw: "Withdrawal and objection to data processing",
        rightRestriction: "Restriction",
        complaintText: "If you believe that violations of data protection law have occurred during the processing of your data, you have the option to contact us (halidcrnkic@gmail.com) or file a complaint with the data protection authority.",
        contactDetailsTitle: "You can reach us using the following contact details:",
        websiteOperator: "Website operator:",
        phoneNumber: "Phone number:",
        email: "Email:"
        
    }
}

const translations_teamplayer = {
    en: {
        philipp: "'Halid worked calmly, reliably and productively. He was always open to creative solutions and even when things got tricky, we found a way together.'",
        lars: "'Always helpful, competent, solution-oriented'"
    },
    de: {
        philipp: "'Halid arbeitet ruhig, zuverlässig und produktiv. Er war immer offen für kreative Lösungen und auch wenn’s mal knifflig wurde, haben wir gemeinsam einen Weg gefunden.'",
        lars: "'Immer hilfsbereit, kompetent, lösungsorientiert'",
    }
}

function setLanguage(lang) {
    localStorage.setItem("lang", lang)
    currentLang = lang
    toggleElipse(lang)
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const project = el.getAttribute("data-project");
        let value = translations[lang]?.[key] ||
        translation_datenschutz?.[lang]?.[key];
        if (project && translations_projects[lang]?.[project]?.[key]) {
            value = translations_projects[lang][project][key];}
        if (translations_teamplayer[lang]?.[key]) {
            value = translations_teamplayer[lang][key];}
        if (value !== undefined) {
            el.innerHTML = value;}});
}
