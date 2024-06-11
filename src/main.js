document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal-close');

  // Burger menu functionality
  burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
  });

  // Modal functionality
  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });

  // Load more projects
  const loadMoreButton = document.querySelector('.load-more');
  let currentPage = 1;

  loadMoreButton.addEventListener('click', function () {
    currentPage++;
    fetchProjects(currentPage);
  });

  function fetchProjects(page) {
    fetch(`https://portfolio-js.b.goit.study/api/projects?page=${page}`)
      .then(response => response.json())
      .then(data => {
        renderProjects(data.projects);
        if (!data.hasMore) {
          loadMoreButton.style.display = 'none';
        }
      })
      .catch(error => console.error('Error:', error));
  }

  function renderProjects(projects) {
    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
      projectList.appendChild(projectItem);
    });
  }

  // Initial fetch
  fetchProjects(currentPage);

  // FAQ Section Interaction
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        document
          .querySelectorAll('.faq-answer')
          .forEach(answer => (answer.style.display = 'none'));
        answer.style.display = 'block';
      }
    });
  });

  // Reviews Section - Fetch and Initialize Swiper
  fetchReviews();

  function fetchReviews() {
    fetch('https://portfolio-js.b.goit.study/api/reviews')
      .then(response => response.json())
      .then(data => {
        renderReviews(data.reviews);
        initializeSwiper();
      })
      .catch(error => {
        console.error('Error:', error);
        document.querySelector('.reviews-slider').innerHTML =
          '<p>Not found</p>';
      });
  }

  function renderReviews(reviews) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    reviews.forEach(review => {
      const reviewSlide = document.createElement('div');
      reviewSlide.className = 'swiper-slide';
      reviewSlide.innerHTML = `
        <p>${review.text}</p>
        <p><strong>- ${review.author}</strong></p>
      `;
      swiperWrapper.appendChild(reviewSlide);
    });
  }

  function initializeSwiper() {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // Contact Form - Handle Submission
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    fetch('https://portfolio-js.b.goit.study/api/contact', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Thank you for your interest in cooperation!');
          contactForm.reset();
        } else {
          alert('An error occurred. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  });
});
