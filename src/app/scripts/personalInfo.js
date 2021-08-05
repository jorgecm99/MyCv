const personalInfo = {
	id: "PersonalInfo",
	name: "Jorge",
	surname: "Córcoles Murillo",
	birth: "23.03.1986",
	email: "jcorcoles86@gmail.com",
	phone: 675863511,
	address: "Cocheras 4, Madrid",
	job: "Front-End developer",
	about: "I recently began to be fascinated by web programming, eg developing apps and bulding websites. I am keen to gain more experience in the field. For this reason, i am looking for a company willing to offer me a placement among their developers.",
	
};

let onLoadPersonalInfo = () => {
	let emailPersonalInfo = document.getElementById("email");
	let phonePersonalInfo = document.getElementById("phone");
	let addressPersonalInfo = document.getElementById("address");
	let dateOfBirth = document.getElementById("birth");
	/*let linkedinPersonalInfo = document.getElementById("linkedin");*/
	let aboutPersonalInfo = document.getElementById("aboutMe");
	aboutPersonalInfo.classList.add("personal__info-style")
	emailPersonalInfo.innerHTML = personalInfo.email;
	phonePersonalInfo.innerHTML = personalInfo.phone;
	addressPersonalInfo.innerHTML = personalInfo.address;
	dateOfBirth.innerHTML = personalInfo.birth;
	/*linkedinPersonalInfo.href = personalInfo.linkedin;*/
	aboutPersonalInfo.innerHTML = personalInfo.about;
}

let onLoadSkills = (skills) => {
	let personalInfoData = document.getElementById("personalInfoData");
	skills.forEach((skill) => {
		let newParagraph = document.createElement("p");
		newParagraph.innerHTML = skill;
		personalInfoData.appendChild(newParagraph);
	});
}

let scrollToPersonalInfo = () => {
	let personalInfoContainer = document.getElementById("personalInfo");
	personalInfoContainer.scrollIntoView({behavior: "smooth"});
}


export {
	personalInfo,
	onLoadPersonalInfo,
	onLoadSkills,
	scrollToPersonalInfo
}