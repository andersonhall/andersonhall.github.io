const profileImage = document.getElementById('header-img');
const header = document.getElementById('header');
const main = document.getElementById('main');

const changeContent = event => {
  const target = event.target;
  if (target.id === 'header-img') {
    resetView();
  } else if (target.textContent === 'About') {
    const content = `
    <section>
        <h3>About Me</h3>
        <p>
          I'm an experienced professional with years of experience in Product Management, Project Management, Business Analysis, and IT Solutions Delivery. In a non-professional capacity, I am also a self-taught full-stack web developer. Visit my projects page to see some of my work, or find me on <a href='https://github.com/andersonhall' alt='github link'>Github</a>.
        </p>
        <p>
          Prior to becoming a technical professional, I was a music educator for 13 years. I hold a Bachelor of Music Education degree from Delta State University in Cleveland, MS and a Master of Music degree from the University of Mississippi in Oxford, MS.
        </p>
        <p>
          Aside from development, my favorite hobby is tabletop board games. You can find me on <a href='https://boardgamegeek.com/user/andersonhall' alt='board game geek'>Board Game Geek</a>.
      </section>
    `;
    main.innerHTML = content;
    showMainView();
  }
};

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', changeContent);
});

const showMainView = () => {
  main.style.display = 'block';
  header.style.margin = '4rem auto';
  header.style.minHeight = '0vh';
  profileImage.style.maxWidth = '225px';
};

const resetView = () => {
  main.style.display = 'none';
  header.style.margin = '0 auto';
  header.style.minHeight = '100vh';
  profileImage.style.maxWidth = '325px';
};
