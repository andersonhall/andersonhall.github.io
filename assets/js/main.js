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
        </p>
      </section>
    `;
    main.innerHTML = content;
    showMainView();
  } else if (target.textContent === 'Projects') {
    const content = `
    <section>
        <h3>Sample Projects</h3>
        <div class='projects-container'>
          <div class='project'>
            <h4>Party Band Website</h4>
            <img src='./assets/img/SSC.jpg' class='project-img' />
            <p><strong>Tech:</strong> HTML, CSS (fully responsive)</p>
            <p><a href='https://github.com/andersonhall/southern-soul'>Github repo</a></p>
            <p><a href='https://www.southernsoulandco.com'>Live App</a></p>
          </div>
          <div class='project'>
            <h4>Comic Book Memory Game</h4>
            <img src='./assets/img/MemoryGame.jpg' class='project-img' />
            <p><strong>Tech:</strong> HTML, CSS (fully responsive), JavaScript, React + Vite</p>
            <p><a href='https://github.com/andersonhall/memory-game'>Github repo</a></p>
            <p><a href='https://andersonhall.github.io/memory-game/'>Live App</a></p>
          </div>
      </section>
    `;
    main.innerHTML = content;
    showMainView();
  } else if (target.textContent === 'Skills') {
    const content = `
    <section>
        <h3>Skills</h3>
        <ul class='skills-list'>
          <li><strong>Programming Languages:</strong> Python, JavaScript, Ruby, C#, SQL</li>
          <li><strong>Web Development:</strong> HTML, CSS, React, NodeJS</li>
          <li><strong>Business/Data Analysis:</strong> Business Analysis, Requirements Gathering, Excel, MS SQL Server
          <li><strong>Product Management:</strong> Product Strategy, Roadmapping, and Execution</li>
          <li><strong>Business & Leadership:</strong> Agile/Scrum Methodologies, Cross-functional Leadership and Influence, Stakeholder Management</li>
        </ul>
      </section>
    `;
    main.innerHTML = content;
    showMainView();
  } else if (target.textContent === 'Contact') {
    const content = `
      <section>
        <h3>Contact Me</h3>
        <p>Connect with me on <a href='https://www.linkedin.com/in/andyhall81'>LinkedIn</a> or shoot me an <a href='mailto:andersonhall@gmail.com'>email</a>.</p>
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
