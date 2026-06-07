function initHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  
  const overlay = document.querySelector(".overlay");
  
  const body = document.body;
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
    console.log("hamburger clicked")
    });

    
    overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("no-scroll");
  });
  menu.addEventListener("click", () =>
  {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("no-scroll");
  hamburger.classList.remove("active");
  });
  }
  

  function initnav() {
  let lastScroll = 0;
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  // jika di paling atas selalu tampil
  if(currentScroll <= 0){
    nav.classList.remove("hide");
    return;
  }

  // scroll ke bawah
  if(currentScroll > lastScroll){
    nav.classList.add("hide");
  }

  // scroll ke atas
  else{
    nav.classList.remove("hide");
  }

  lastScroll = currentScroll;
  });
  }

  function initfaq() {
  const faqitems = document.querySelectorAll(".faq-item");

  faqitems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
  });
  }

  function initcounter() {
  const counters =
  document.querySelectorAll(".counter");

  const counterObserver =
  new IntersectionObserver(entries => {

  entries.forEach(entry => {

  if (entry.isIntersecting) {

  const counter =
  entry.target;

  const target =
  Number(counter.dataset.target);

  let current = 0;

  const updateCounter = () => {
  const increment =  target / 80;

  current += increment;
  if (current < target) {
  counter.textContent =
  Math.ceil(current);
  requestAnimationFrame(
  updateCounter
  );
  }
  else {
  counter.textContent = target + "+";
  }
  };

  updateCounter();
  counterObserver.unobserve(counter);
  }
  });
  });

  counters.forEach(counter => {
  counterObserver.observe(counter);
  });
  }

  function initscroolanimation() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  entry.target.classList.add('show');
  observer.unobserve(entry.target);
  }
  });
  },{threshold: 0
  });

  sections.forEach(section => {
  observer.observe(section);
  });
  }

  initHamburger();
  initnav();
  initfaq();
  initscroolanimation();
  initcounter();
