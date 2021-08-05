// Crear una variable con array de objetos con vuestra experiencia que incluya el nombre del trabajo, descripción, fecha de inicio y fecha final
// Rellenar el contenedor de experiencia manipulando el DOM

const experienceInfo = [
	{id: "Sofitec", job: 'CNC machinist', descrption: "3 axis and 5 axis miller and turner", startDate: 2009, endDate: 2015},
	{id: "MAVE", job: 'Quality inspector', descrption: "Assemblies and items inspections", startDate: 2015, endDate: 2020},
	{id: "Knorr-Bremse", job: 'Quality inspector', descrption: "Final line assemply technician quality", startDate: 2020, endDate: "to date"},

]
	


    
	
let onLoadPersonalExperience = () => {
	let personalExperience = document.getElementById("experience");
	Object.values(experienceInfo).forEach(item => {
		let newExperience = document.createElement("ul");
		newExperience.classList.add("personal__info-style")
		newExperience.innerHTML = ` ${item.id} (${item.startDate}-${item.endDate})` ;
		newExperience.classList.add("experience__company");
		let resumenExperience = document.createElement("li");
		resumenExperience.innerHTML = ` ${item.job}`;
		resumenExperience.classList.add("experience__description");
		let resumenExpSecond = document.createElement("li");
		resumenExpSecond.innerHTML = `${item.descrption}`
		resumenExpSecond.classList.add("experience__description");
		personalExperience.appendChild(newExperience);
		newExperience.appendChild(resumenExperience);
		newExperience.appendChild(resumenExpSecond);

	})

}

let scrollToExperience = () => {
	let elementExperience = document.getElementById("experience");
	elementExperience.scrollIntoView({behavior: "smooth"});
  };


export {
	experienceInfo,
	onLoadPersonalExperience,
	scrollToExperience
}