// Javascript for background change when scroll
window.addEventListener('scroll', () => {
 document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Loading animation on page load

var loaderImg = document.querySelector(".img");
var loader = document.querySelector(".loader");

window.addEventListener('load', hides);
function hides() {
 loader.classList.add("hide");
 loaderImg.classList.add("ImgNone");
}

// Menu Button Event Listener

const Menu = document.querySelector(".nav__navigation");
const Nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
 menuBtn.classList.toggle("menu-active");
 Menu.classList.toggle("active");
 Nav.classList.toggle("NavBgColor");
});

// JavaScript for tab changing experience section
var pages = {
 'home': `<div class="exp_holder">
		            <div class="exp_holder__top">
		              <div class="exp_holder__top__left">
		                <h3>Web Development Intern <br><span class="highlight">@Internpe</span></h3>
		                <p class="range">June 2023 - July 2023</p>
		              </div>
		            </div>
		            <div class="exp_holder__bottom">
		              <ul>
		                <li>
		                  <p>Internpe is a company, Which is non profitable, and only focuses on students dreams.</p>
		                </li>
		                <li>
		                  <p>Internpe provides an opportunity for student to work with their team. They provide web development and design services and provide internships on various technologies like web development, Graphic Design, C++ development etc.</p>
		                </li>
		                <li>
		                  <p>I have joined Internpe as a <span class="highlight">Web Development Intern</span>. I have build some project as a task at internpe.</p>
		                </li>
		              </ul>
		            </div>
		          </div> <br>`,
 'aboutus': `<div class="exp_holder">
          <div class="exp_holder__top">
            <div class="exp_holder__top__left">
              <h3>Electrical Enginnering Intern  <br><span class="highlight">@Chandanshesh Heavy Electrical Pvt. ltd.
                  Khamgaon</span></h3>
              <p class="range">June 2023 - July 2023</p>
            </div>
          </div>
          <div class="exp_holder__bottom">
            <ul>
              <li>
                <p>Chandanshesh Heavy Electrical is a transformer maintenance company that maintains and repairs
                  transformers.</p>
              </li>
              <li>
                <p>Chandanshesh Electricals repairs and maintains transformer having range between 20kv - 200kv.</p>
              </li>
              <li>
                <p>I was an <span class="highlight">Electrical Engineering Intern</span> at Chandanshesh Heavy
                  Electricals. Here I gained practical experience of handling a transformer, maintenance, construction,
                  parts and Electrical Grid system.</p>
              </li>
            </ul>
          </div>
        </div>`,
 'services': `<div class="exp_holder">
              <div class="exp_holder__top">
                <div class="exp_holder__top__left">
                  <h3>Solar PV Industrial traning <br><span class="highlight">@URJA Swaraj LLP, Amaravati</span></h3>
                  <p class="range">Aug 2021 - Sept 2021</p>
                </div>
              </div>
              <div class="exp_holder__bottom">
                <ul>
                  <li>
                    <p>Urja Swaraj LLP provides electrical installation and solar installation services located at Amravati,
                      Maharashtra.</p>
                  </li>
                  <li>
                    <p>They usually teach student on site and practically but due to lockdown they had a virtual traning
                      program for students.</p>
                  </li>
                  <li>
                    <p>I was an <span class="highlight">Solar PV Intern</span>. Here I learnt about Solar Photovoltaic,
                      Types of solar panels, Solar Installation, Estimation and Contracting and Opportunities in soalr
                      field.</p>
                  </li>
                </ul>
              </div>
            </div>`
};
function getPageContent(page) {
 var contentToReturn;
 switch (page) {
  default:
   contentToReturn = pages.home;
   break;
  case 'home':
   contentToReturn = pages.home;
   break;
  case 'aboutus':
   contentToReturn = pages.aboutus;
   break;
  case 'services':
   contentToReturn = pages.services;
   break;
 }
 document.getElementById('content').innerHTML = contentToReturn;
}

// JavaScript for spa for education section
var pages_edu = {
 'tab_1': `<div class="exp_holder">
                <div class="exp_holder__top">
                  <div class="exp_holder__top__left">
                    <h3>Bachelor's Degree in Electrical Engineering<br><span class="highlight">Mauli Group Institutions College of Engineering and Technology, Shegaon</span></h3>
                    <p class="range">pursuing</p>
                  </div>
                </div>
                <div class="exp_holder__bottom">
                  <ul>
                    <li>
                      <p>In 2022 I started my journey as a Direct Second Year student for Bachelor's Degree in Electrical Engineering at Mauli College of engineering, Shegaon.</p>
                    </li>
                    <li>
                      <p>I am currently in 3rd year. Learning some skills that will help me grow.</p>
                    </li>
                  </ul>
                </div>
              </div>`,
 'tab_2': `<div class="exp_holder">
                <div class="exp_holder__top">
                  <div class="exp_holder__top__left">
                    <h3>Diploma in Electrical Engineering<br><span class="highlight">Government Polytechnic Khamgaon</span></h3>
                    <p class="range">July 2019 - Aug 2022</p>
                  </div>
                </div>
                <div class="exp_holder__bottom">
                  <ul>
                    <li>
                      <p>After my SSC I decided to choose Engineering as a career. Then I got admission in Government Polytechnic Khamgaon.</p>
                    </li>
                    <li>
                      <p>Here I learnt about various electrical concept and gained practical experience by making projects in each semister.</p>
                    </li>
                  </ul>
                </div>
              </div>`,
 'tab_3': `<div class="exp_holder">
                <div class="exp_holder__top">
                  <div class="exp_holder__top__left">
                    <h3>10<sup>th</sup> | SSC<br><span class="highlight">Z P High School and Junior college (boys), Khamgaon</span></h3>
                    <p class="range">June 2019</p>
                  </div>
                </div>
                <div class="exp_holder__bottom">
                  <ul>
                    <li>
                      <p>In my school there was a subject called Multi Skill foundation course which comes under skill India scheme.</p>
                    </li>
                    <li>
                      <p>In this course I learnt about various  feilds like Electrical, Automobile, welding, plumbing,construction etc. by dooing practical.</p>
                    </li>
                    <li><p>This course helped me to increase my practical knowledge.</p></li>
                  </ul>
                </div>
              </div>`
};

function tabChange(page) {
 var contentToReturn;
 switch (page) {
  default:
   contentToReturn = pages_edu.tab_1;
   break;
  case 'tab_1':
   contentToReturn = pages_edu.tab_1;
   break;
  case 'tab_2':
   contentToReturn = pages_edu.tab_2;
   break;
  case 'tab_3':
   contentToReturn = pages_edu.tab_3;
   break;
 }
 document.getElementById('content_edu').innerHTML = contentToReturn;
}