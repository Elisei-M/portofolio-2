document.addEventListener("DOMContentLoaded", function () {
  // Buton limbă
  const langToggle = document.querySelector(".lang-toggle");
  const langText = document.querySelector(".lang-text");

  // Navbar
  const navHome = document.querySelector(".nav-home");
  const navAbout = document.querySelector(".nav-about");
  const navSkills = document.querySelector(".nav-skills");
  const navProjects = document.querySelector(".nav-projects");
  const navContact = document.querySelector(".nav-contact");

  // Text animat
  const staticText = document.querySelector(".static-text");
  const dynamicItems = document.querySelectorAll(".dynamic-list__item");
  const imText = document.querySelector(".im-text");

  // About Me
  const aboutText = document.querySelector(".about-text");
  const talkBtn = document.querySelector(".talk-btn");

  // Skills
  const skillsTitle = document.querySelector(".skills-title");
  const skillsP1 = document.querySelector(".skills-p1");
  const skillsP2 = document.querySelector(".skills-p2");
  const skillsP3 = document.querySelector(".skills-p3");

  function updateSiteText(lang) {
    // 1. Navbar
    if (lang === "RO") {
      navHome.textContent = "Acasă";
      navAbout.textContent = "Despre mine";
      navSkills.textContent = "Abilități";
      navProjects.textContent = "Proiecte";
      navContact.textContent = "Contact";
    } else {
      navHome.textContent = "Home";
      navAbout.textContent = "About Me";
      navSkills.textContent = "Skills";
      navProjects.textContent = "Projects";
      navContact.textContent = "Contact";
    }

    // 2. Text animat
    if (lang === "RO") {
      staticText.textContent = "Salut";
      dynamicItems[0].textContent = "lume !";
      dynamicItems[1].textContent = "bob !";
      dynamicItems[2].textContent = "utilizatori !";
      dynamicItems[3].textContent = "toți !";
      imText.textContent = "Sunt";
    } else {
      staticText.textContent = "Hello";
      dynamicItems[0].textContent = "world !";
      dynamicItems[1].textContent = "bob !";
      dynamicItems[2].textContent = "users !";
      dynamicItems[3].textContent = "everybody !";
      imText.textContent = "I'm";
    }
    // Repornim animația
    const dynamicList = document.querySelector(".dynamic-list");
    dynamicList.style.animation = "none";
    void dynamicList.offsetWidth;
    dynamicList.style.animation = "";

    // 3. About Me
    if (lang === "RO") {
      aboutText.textContent = "Sunt un full stack developer pasionat de tehnologie, cu expertiză în front-end și back-end. Îmi plac provocările care mă determină să inovez și să evoluez constant.";
      talkBtn.textContent = "Hai să discutăm";
    } else {
      aboutText.textContent = "I am a full stack developer passionate about technology, with expertise in both front-end and back-end. I enjoy challenges that drive me to innovate and continuously evolve.";
      talkBtn.textContent = "Let's Talk";
    }

    // 4. Skills
    if (lang === "RO") {
      skillsTitle.textContent = "</Abilități>";
      skillsP1.textContent = "Salut! Numele meu este Elisei M. și sunt full stack developer. Îmi place să creez aplicații web de la zero și să le aduc la viață în browser. Lucrul atât cu front-end cât și cu back-end mi-a oferit o perspectivă completă asupra procesului de dezvoltare.";
      skillsP2.textContent = "În prezent, mă concentrez pe proiecte care îmbină designul creativ cu funcționalitatea robustă. Îmi place să experimentez cu noi tehnologii și să găsesc soluții ingenioase pentru provocările de zi cu zi.";
      skillsP3.textContent = "De asemenea, am o pasiune pentru învățare continuă și pentru împărtășirea cunoștințelor cu alți pasionați de tehnologie.";
    } else {
      skillsTitle.textContent = "</Skills>";
      skillsP1.textContent = "Hi! My name is Elisei M., and I am a full stack developer. I love creating web applications from scratch and bringing them to life in the browser. Working with both front-end and back-end has given me a complete perspective on the development process.";
      skillsP2.textContent = "Currently, I focus on projects that blend creative design with robust functionality. I enjoy experimenting with new technologies and finding ingenious solutions to everyday challenges.";
      skillsP3.textContent = "I also have a passion for continuous learning and for sharing knowledge with other technology enthusiasts.";
    }
  }

  // Inițial (EN)
  updateSiteText("EN");

  // Toggle limbă
  langToggle.addEventListener("click", function () {
    if (langText.textContent.trim() === "EN") {
      langText.textContent = "RO";
      updateSiteText("RO");
    } else {
      langText.textContent = "EN";
      updateSiteText("EN");
    }
  });
});
