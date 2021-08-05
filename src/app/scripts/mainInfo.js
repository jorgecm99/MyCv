/*import { Template } from "webpack"*/

const  nameInfoData = {
    name: "Jorge Córcoles Murillo"}

const nameJob = {
    job: "Front-end developer"}


let onLoadNameInfo  = () => {
    let nameInfo = document.getElementById("name");
    nameInfo.classList.add('container__title--name');
    nameInfo.innerHTML = nameInfoData.name;
} 

let onLoadNameJob = () => {
    let jobSite = document.getElementById("classJob");
    let jobName = document.createElement("h6");
    jobSite.classList.add('classJob__style')
    jobName.innerHTML = nameJob.job.toUpperCase();
    classJob.appendChild(jobName);
}


export {
    nameInfoData,
    nameJob,
    onLoadNameInfo,
    onLoadNameJob
}