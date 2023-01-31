// --------------------- Importing html elements --------------------
const open = document.getElementById('open');
const close = document.getElementById('close');
const model = document.getElementById('model');
const menuItem1 = document.getElementById('menuItem1');
const menuItem2 = document.getElementById('menuItem2');
const menuItem3 = document.getElementById('menuItem3');
const closePopup = document.getElementById('closePopup');
const popupArticle = document.getElementById('popupArticle');
const popupContainer = document.getElementById('popupContainer');
const title = document.getElementById('title');
const description = document.getElementById('description');
const techs = document.getElementById('techs');
const image = document.getElementById('image');
const liveVersion = document.getElementById('liveVersion');
const source = document.getElementById('source');
const worksContainer = document.getElementById('worksContainer');

// ------------------------ Works Array -------------------------------
const works = [
  {
    title: 'The Light You Need',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/workImage1.jpg',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Sky-Rocket The World',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/workImage2.jpg',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Fresh Drinks',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/workImage3.jpg',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Customize-able Watches',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/workImage4.jpg',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// ------------------------ Functions -------------------------------

function createWorkCard(Title, Description, Image, Techs, index) {
  let techStacks = '';

  Techs.forEach((tech) => {
    techStacks += ` <li>${tech}</li>`;
  });

  const workHTML = document.createElement('article');
  workHTML.className = 'article';
  workHTML.innerHTML = `<img src='${Image}' alt="work Image" class="workImage">
                        <div>
                            <div class="workTitle">${Title}</div>
                            <div class="attributes">
                                <p class="atributeTitle">Details</p> 
                                <ul>
                                    <li>Backend Dev</li>
                                    <li>2015</li>
                                </ul> 
                            </div>
                            <p class="details" >${Description}</p>
                            <div class="techStacks">
                                <ul>
                                  ${techStacks}
                                </ul>
                            </div>
                            <button class="visitButton seeProject">See Project</button>
                        </div>`;
  workHTML.addEventListener('click', (() => {
    techs.innerHTML = '';
    popupArticle.style.display = 'flex';
    title.innerHTML = works[index].title;
    description.innerHTML = works[index].description;
    image.src = works[index].image;
    liveVersion.href = works[index].liveVersion;
    source.href = works[index].source;
    works[index].techs.forEach((tech) => {
      const li = document.createElement('li');
      li.innerHTML = tech;
      techs.appendChild(li);
    });
  }));

  worksContainer.appendChild(workHTML);
}

function mobileMenuDisplayNone() {
  model.style.display = 'none';
}

function mobileMenuDisplayBlock() {
  model.style.display = 'block';
}

function popupDisplayNone() {
  popupArticle.style.display = 'none';
}

// ------------------------ Event listners -------------------------------

window.addEventListener('load', (() => {
  works.forEach((work, index) => {
    createWorkCard(work.title, work.description, work.image, work.techs, index);
  });
}));
popupContainer.addEventListener('click', ((e) => {
  e.stopPropagation();
}));
menuItem1.addEventListener('click', (() => { modelDisplayNone(); }));
menuItem2.addEventListener('click', (() => { modelDisplayNone(); }));
menuItem3.addEventListener('click', (() => { modelDisplayNone(); }));
close.addEventListener('click', (() => { mobileMenuDisplayNone(); }));
open.addEventListener('click', (() => { mobileMenuDisplayBlock(); }));
closePopup.addEventListener('click', (() => { popupDisplayNone(); }));
popupArticle.addEventListener('click', (() => { popupDisplayNone(); }));