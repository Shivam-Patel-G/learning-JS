document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      const target = document.querySelector(this.getAttribute('href'));
  
      if (target) {
        event.preventDefault(); // Prevent default anchor link behavior
  
        const offset = window.innerHeight * 0.13; // Calculate 10% offset in pixels
        const topPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth' // Add smooth scrolling animation (optional)
        });
      }
    });
  });