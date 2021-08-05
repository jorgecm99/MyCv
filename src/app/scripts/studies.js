// Crear una variable con array de objetos con vuestros estudios que incluya el nombre del estudio, descripción, fecha de inicio y fecha final
// Rellenar el contenedor de experiencia manipulando el DOM

const studiesInfo = [
	{name: "Aeronautic assembler", description: "Assembler in aeronautical industry", startDate: "09.2006", endDate: "06.2007"},
	{name: "FP2 Fabricación y programación mecánica", description: "CNC machinist", startDate: "09.2007", endDate: "06.2009"},
	{name: "Catia v5 programmer", description: "Cad/Cam programmer", startDate: "11.2012", endDate: "05.2013"}
]
	
	
	
	    
	
let onLoadPersonalStudies = () => {
	let personalStudies = document.getElementById("studies");
	Object.values(studiesInfo).forEach(item => {
		let newStudies = document.createElement("div");
		newStudies.classList.add("personal__info-style");
	    newStudies.innerHTML = `${item.name} ${item.description} ${item.startDate} ${item.endDate}`;
	    personalStudies.appendChild(newStudies);
	})
	
}

let scrollToStudies = () => {
	let elementStudies = document.getElementById("studies");
	elementStudies.scrollIntoView({behavior: "smooth"});
  };


export {
	studiesInfo,
	onLoadPersonalStudies,
	scrollToStudies
}