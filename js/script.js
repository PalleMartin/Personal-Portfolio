// Custom JavaScript for Palle Martin's Portfolio

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });
    
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.9)';
        }
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real application, you would send the form data to a server here
                // For this demo, we'll just show an alert
                alert('Thank you for your message, ' + name + '! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }
    
    // Skill bar animation on scroll
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const barWidth = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = barWidth;
            }, 300);
        });
    }
    
    // Trigger skill bar animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }
    
    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Dark/Light mode toggle functionality
function initDarkModeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '🌙';
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    
    document.body.appendChild(toggleButton);
    
    // Check for saved theme or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '☀️';
    }
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update button icon
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize dark mode toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', initDarkModeToggle);

// Additional dark mode styles
const darkModeStyles = `
    .dark-mode {
        --bs-dark: #1a1a1a;
        --bs-light: #2d2d2d;
        --bs-body-bg: #1e1e1e;
        --bs-body-color: #e0e0e0;
    }
    
    .dark-mode .navbar {
        background-color: rgba(26, 26, 26, 0.95) !important;
    }
    
    .dark-mode .card {
        background-color: #2d2d2d;
        color: #e0e0e0;
    }
    
    .dark-mode .form-control {
        background-color: #3a3a3a;
        border-color: #555;
        color: #e0e0e0;
    }
    
    .dark-mode .form-control:focus {
        background-color: #3a3a3a;
        border-color: var(--primary-color);
        color: #e0e0e0;
    }
    
    .dark-mode .project-card {
        background-color: #2d2d2d;
    }
    
    .dark-mode .education-item {
        background-color: #2d2d2d;
    }
    
    .dark-mode footer {
        background-color: #1a1a1a;
    }
    
    .dark-mode-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
`;

// Add dark mode styles to the document
const styleSheet = document.createElement('style');
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
