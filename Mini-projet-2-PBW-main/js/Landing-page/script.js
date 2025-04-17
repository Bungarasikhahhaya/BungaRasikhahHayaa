document.addEventListener('DOMContentLoaded', function () {
    // Add animation classes to elements as they enter viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .step-item, .hero-content, .app-text, .device-images img');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                if (element.classList.contains('feature-item') || element.classList.contains('app-text')) {
                    element.classList.add('fade-in');
                } else {
                    element.classList.add('slide-up');
                }
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Toggle between login and register
    const toggleOptions = document.querySelectorAll('.toggle-option');
    toggleOptions.forEach(option => {
        option.addEventListener('click', function() {
            toggleOptions.forEach(opt => opt.classList.remove('toggle-active'));
            this.classList.add('toggle-active');
        });
    });

    // CTA button effect
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animasi Logo Pulse
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('logo-pulse');
    }

    // Counter Animation untuk angka statistik
    const startCounters = function() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // ms
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };

    // Animated Background untuk Hero Section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('animated-bg');
    }

    // Animasi fitur card pada hover
    const fiturCards = document.querySelectorAll('.fitur-card');
    fiturCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-pop');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-pop');
            this.classList.add('card-pop-out');
            
            setTimeout(() => {
                this.classList.remove('card-pop-out');
            }, 300);
        });
    });

    // Animasi team member image
    const memberBubbles = document.querySelectorAll('.member-bubble');
    memberBubbles.forEach(bubble => {
        bubble.classList.add('rotate-on-scroll');
        
        bubble.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Typing effect untuk hero headline
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Parallax effect untuk background
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        
        const heroShape = document.querySelector('.hero-shape');
        if (heroShape) {
            heroShape.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
        
        const teamMembers = document.querySelector('.team-members');
        if (teamMembers) {
            teamMembers.style.backgroundPosition = `center ${scrolled * 0.05}px`;
        }
    });

    // Mobile menu toggle functionality
    function setupMobileMenu() {
        const mobileMenuButton = document.createElement('div');
        mobileMenuButton.classList.add('mobile-menu-toggle');
        mobileMenuButton.innerHTML = '☰';
        
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        nav.insertBefore(mobileMenuButton, navLinks);
        
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // Check viewport width and setup mobile menu if needed
    function checkViewport() {
        if (window.innerWidth < 768) {
            setupMobileMenu();
        }
    }

    // Check on load
    checkViewport();

    // Recalculate on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkViewport, 250);
    });

    // Typewriter Effect for Text Element
    const textElement = document.querySelector('.typewriter-text');
    const fullText = 'Belajarlah mengelola uang dengan bijak hari ini untuk masa depan yang lebih cerah dan sejahtera! 💰 ✨';
    let index = 0;

    function typeCharacter() {
        if (index < fullText.length) {
            textElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); // kecepatan ketik
        } else {
            setTimeout(() => {
                textElement.textContent = '';  // Hapus teks setelah selesai
                index = 0; // Reset index untuk mengetik ulang
                typeCharacter(); // Mulai ulang efek mengetik
            }, 2000); // jeda sebelum mengetik ulang
        }
    }

    setTimeout(typeCharacter, 500); // jeda sebelum mulai ngetik

    // Add other animations and interactions as previously
    // ... (rest of your previous code)
});