/*const { javascript } = require("webpack");*/
// Crear un array de array de objetos que inclyan el nombre de la skill y el porcentaje de 0-100 del nivel en esa skill
const mySkills = [
    { technology: "HTML5", level: 70},
    { technology: "CSS", level: 60},
    { technology: "JavaScript", level: 40},
    { technology: "React", level: 20},
    { technology: "Angular", level: 20}
];




let skillsJorge = () => {
    let arreglo = mySkills[0];
    let newskills = document.getElementById("skills__progreso");
    let newparrafo = document.createElement("li");
    newparrafo.classList.add("parrafo")
    newparrafo.innerHTML = `${arreglo.technology} - ${arreglo.level}%`
    newskills.appendChild(newparrafo);
    let newSkillsContainer = document.createElement("div");
    newSkillsContainer.classList.add("progress__bar");
    newparrafo.appendChild(newSkillsContainer);
    let newProgressContainer = document.createElement("div");
    newProgressContainer.classList.add("progress__bar-main");
    newSkillsContainer.appendChild(newProgressContainer);
}

let skillsSecond = () => {
    let arreglo = mySkills[1];
    let newskills = document.getElementById("skills__progreso");
    let newparrafo = document.createElement("li");
    newparrafo.classList.add("parrafo")
    newparrafo.innerHTML = `${arreglo.technology} - ${arreglo.level}%`
    newskills.appendChild(newparrafo);
    let newSkillsContainer = document.createElement("div");
    newSkillsContainer.classList.add("progress__bar");
    newparrafo.appendChild(newSkillsContainer);
    let newProgressContainer = document.createElement("div");
    newProgressContainer.classList.add("progress__bar-main-second");
    newSkillsContainer.appendChild(newProgressContainer);
}

let skillsThree = () => {
    let arreglo = mySkills[2];
    let newskills = document.getElementById("skills__progreso");
    let newparrafo = document.createElement("li");
    newparrafo.classList.add("parrafo")
    newparrafo.innerHTML = `${arreglo.technology} - ${arreglo.level}%`
    newskills.appendChild(newparrafo);
    let newSkillsContainer = document.createElement("div");
    newSkillsContainer.classList.add("progress__bar");
    newparrafo.appendChild(newSkillsContainer);
    let newProgressContainer = document.createElement("div");
    newProgressContainer.classList.add("progress__bar-main-three");
    newSkillsContainer.appendChild(newProgressContainer);
}

let skillsFour = () => {
    let arreglo = (mySkills[3]);
    let newskills = document.getElementById("skills__progreso");
    let newparrafo = document.createElement("li");
    newparrafo.classList.add("parrafo")
    newparrafo.innerHTML = `${arreglo.technology} - ${arreglo.level}%`
    newskills.appendChild(newparrafo);
    let newSkillsContainer = document.createElement("div");
    newSkillsContainer.classList.add("progress__bar");
    newparrafo.appendChild(newSkillsContainer);
    let newProgressContainer = document.createElement("div");
    newProgressContainer.classList.add("progress__bar-main-four");
    newSkillsContainer.appendChild(newProgressContainer);
}

let skillsFive = () => {
    let arreglo = (mySkills[4]);
    let newskills = document.getElementById("skills__progreso");
    let newparrafo = document.createElement("li");
    newparrafo.classList.add("parrafo")
    newparrafo.innerHTML = `${arreglo.technology} - ${arreglo.level}%`
    newskills.appendChild(newparrafo);
    let newSkillsContainer = document.createElement("div");
    newSkillsContainer.classList.add("progress__bar");
    newparrafo.appendChild(newSkillsContainer);
    let newProgressContainer = document.createElement("div");
    newProgressContainer.classList.add("progress__bar-main-four");
    newSkillsContainer.appendChild(newProgressContainer);
}



let scrollToSkills = () => {
	let elementSkills = document.getElementById("skills");
	elementSkills.scrollIntoView({behavior: "smooth"});
  };



export {
    skillsJorge,
    skillsSecond,
    skillsThree,
    skillsFour,
    skillsFive,
    scrollToSkills
};