"use strict";

const itemsBox = document.querySelector(".items");
const items = document.querySelectorAll(".item");
const moreProject = document.querySelector(".more");
const cover = document.querySelector(".cover");
const projectPreview = document.querySelector('.project_preview')
const projectModal = document.querySelector(".project_modal");
const projectThumb = document.querySelector('.project_modal_thumbnail');
const projectModalTitle = document.querySelector(".project_modal_title");
const projectModalOutline = document.querySelector(".project_modal_outline");
const projectSkills = document.querySelector('.project_modal_skills');
const modalCloseBtn = document.querySelector(".project_modal_close");

let currentProjectIndex = 0;

const projects = {
  project: [
    {
      title: "냉장고 털기 - 요리 찾아주기",
      imgSrc: "img/냉장고털기2.png",
      outline: "1번 개요",
      skills: ["HTML", "CSS", "REACT", "NAVER API", "YOUTUBE API"],
      link: "",
    },
    {
      title: "MYNOTE",
      imgSrc: "img/MYNOTE1.png",
      outline: "2번 개요",
      skills: ["HTML", "CSS", 'Typescript'],
      link: "",
    },
    {
      title: "Travel Advisor",
      imgSrc: "",
      outline: "3번 개요",
      skills: ["HTML", "CSS", "REACT", "Material-UI", "GoogleMapReact", "Travel advisor API"],
      link: "",
    },
    {
      title: "Card Maker",
      imgSrc: "",
      outline: "4번 개요",
      skills: ["HTML", "CSS", "REACT", "PostCSS", "Firebase"],
      link: "",
    },
  ],
};

items.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const itemNum = e.currentTarget.dataset.num;
    currentProjectIndex = itemNum - 1;
    const content = projects.project[currentProjectIndex];
    const projectImg = projectPreview.querySelector('img')    

    projectImg.src = content.imgSrc;
    projectThumb.src = content.imgSrc;
    projectModalTitle.innerHTML = content.title;
    projectModalOutline.innerHTML = content.outline;
    const skillsText = content.skills.join(', ')
    projectSkills.innerHTML = skillsText;

  });
});

// modal 마우스 이벤트

function showModal(e) {
  projectModal.classList.add("active");
  modalClose();
}

function modalClose() {
  window.addEventListener("click", (e) => {
    e.target === projectModal || e.target === modalCloseBtn
      ? projectModal.classList.remove("active")
      : false;
  });
}

moreProject.onclick = showModal;


