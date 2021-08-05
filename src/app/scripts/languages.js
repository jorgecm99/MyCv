const languages = [
	{nameEstudies: "English", certification: "Non", level: "B1"},
	{nameEstudies: "French", certification: "Non", level: "A2"},
	{nameEstudies: "Spanish", certification: "Non", level: "Native"}
]
// Rellenar el contenedor de idiomas manipulando el DOM

let onLoadPersonalLanguages = () => {
	let personalLanguages = document.getElementById("languageName");
	Object.values(languages).forEach(item => {
		let newStudies = document.createElement("li");
		newStudies.classList.add("personal__info-style");
		newStudies.innerHTML = `${item.nameEstudies} ${item.certification} ${item.level}`;
		personalLanguages.appendChild(newStudies);

})
}

let scrollToLanguages = () => {
	let elementLanguages = document.getElementById("languages");
	elementLanguages.scrollIntoView({behavior: "smooth"});
  };


export {
	languages,
	onLoadPersonalLanguages,
	scrollToLanguages
}