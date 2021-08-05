import {
	personalInfo,
	onLoadPersonalInfo,
	onLoadSkills,
	scrollToPersonalInfo
} from "./scripts/personalInfo"

import {
	experienceInfo,
	onLoadPersonalExperience,
	scrollToExperience
} from "./scripts/experience"

import {
	languages,
	onLoadPersonalLanguages,
	scrollToLanguages
} from "./scripts/languages"

import {
	studiesInfo,
	onLoadPersonalStudies,
	scrollToStudies
} from './scripts/studies'

import {
    nameInfoData,
	nameJob,
    onLoadNameInfo,
	onLoadNameJob
} from './scripts/mainInfo'

import {
	skillsJorge,
	skillsSecond,
	skillsThree,
	skillsFour,
	skillsFive,
	scrollToSkills
} from './scripts/skills'

import "../app/styles.scss"

let addListeners = () => {
	document.getElementById("goToPersonalInfo").addEventListener("click", scrollToPersonalInfo);
	document.getElementById("goToExperience").addEventListener("click", scrollToExperience);
	document.getElementById("goToSkills").addEventListener("click", scrollToSkills);
	document.getElementById("goToStudies").addEventListener("click", scrollToStudies);
	document.getElementById("goToLanguages").addEventListener("click", scrollToLanguages);

	//Anadir eventos de scroll a cada una de las secciones
}

window.onload = function () {
	// DOM update
	onLoadPersonalInfo();
	onLoadPersonalExperience();
	onLoadPersonalLanguages();
	onLoadPersonalStudies();
	onLoadNameInfo();
	onLoadNameJob();
	skillsJorge();
	skillsSecond();
	skillsThree();
	skillsFour(),
	skillsFive(),
	

	// Add listeners
	addListeners();
}