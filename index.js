    // Dark/Light mode toggle
    const modeToggle = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');
    function setMode(dark) {
      if (dark) {
        document.body.classList.add('dark-mode');
        modeIcon.classList.remove('bi-moon-stars-fill');
        modeIcon.classList.add('bi-sun-fill');
      } else {
        document.body.classList.remove('dark-mode');
        modeIcon.classList.remove('bi-sun-fill');
        modeIcon.classList.add('bi-moon-stars-fill');
      }
    }
    // Load mode from localStorage
    let darkMode = localStorage.getItem('darkMode') === 'true';
    setMode(darkMode);
    modeToggle.onclick = function() {
      darkMode = !darkMode;
      localStorage.setItem('darkMode', darkMode);
      setMode(darkMode);
    };
    // Smooth scroll for Back to Top
    document.querySelectorAll('a[href="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });