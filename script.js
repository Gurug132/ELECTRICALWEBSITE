// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Check if device is mobile
const isMobile = window.innerWidth <= 768;

// Initialize Particles.js only on desktop
if (!isMobile) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00d2ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00d2ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Typing Effect for Hero Text
let index = 0;
const text = "Powering Your World with Excellence";
const typingText = document.querySelector('.typing-text');

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Floating elements animation - only on desktop
if (!isMobile) {
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

// Counter Animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            if (element.nextElementSibling && element.nextElementSibling.classList.contains('decimal')) {
                // Handle decimal numbers like 99.9%
                element.textContent = target;
                element.nextElementSibling.textContent = '9';
            } else if (element.textContent.includes('Projects') || element.textContent.includes('Clients') || element.textContent.includes('Reviews')) {
                element.textContent = target + '+';
            } else {
                element.textContent = target;
            }
            clearInterval(timer);
        } else {
            if (element.nextElementSibling && element.nextElementSibling.classList.contains('decimal')) {
                // Handle decimal numbers like 99.9%
                element.textContent = Math.floor(current);
                element.nextElementSibling.textContent = Math.floor((current % 1) * 10);
            } else if (element.textContent.includes('Projects') || element.textContent.includes('Clients') || element.textContent.includes('Reviews')) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }
    }, 30);
}

function startCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
    });
}

// Intersection Observer for Counters
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.querySelector('i').className = 'fas fa-sun';
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Service Modals
const serviceButtons = document.querySelectorAll('.service-btn');
const modal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

const serviceDetails = {
    wiring: {
        title: 'Advanced Wiring Solutions',
        content: `
            <h3>Professional Electrical Wiring Services</h3>
            <p>Our advanced wiring solutions ensure safety, efficiency, and compliance with the latest electrical standards. We use premium materials and cutting-edge techniques for residential and commercial properties.</p>
            <ul>
                <li>Complete home rewiring</li>
                <li>Commercial building wiring</li>
                <li>Energy-efficient cable installations</li>
                <li>Code compliance verification</li>
            </ul>
            <div class="modal-price">Starting from $2,500</div>
        `
    },
    maintenance: {
        title: 'Electrical Maintenance & Repair',
        content: `
            <h3>Comprehensive Maintenance Services</h3>
            <p>Keep your electrical systems running smoothly with our preventive maintenance and repair services. We identify potential issues before they become problems.</p>
            <ul>
                <li>Regular system inspections</li>
                <li>Outlet and switch repairs</li>
                <li>Circuit breaker maintenance</li>
                <li>Emergency repair services</li>
            </ul>
            <div class="modal-price">Starting from $150</div>
        `
    },
    installation: {
        title: 'Electrical Installation Services',
        content: `
            <h3>Expert Installation Solutions</h3>
            <p>From new construction to renovations, our certified electricians handle all types of electrical installations with precision and safety.</p>
            <ul>
                <li>New construction wiring</li>
                <li>Kitchen and bathroom installations</li>
                <li>Appliance circuit installations</li>
                <li>Generator installations</li>
            </ul>
            <div class="modal-price">Starting from $500</div>
        `
    },
    smart: {
        title: 'Smart Home Integration',
        content: `
            <h3>Intelligent Home Automation</h3>
            <p>Transform your home into a smart living space with our comprehensive automation solutions. Control lighting, security, and appliances from anywhere.</p>
            <ul>
                <li>Smart lighting systems</li>
                <li>Home security integration</li>
                <li>Voice control setup</li>
                <li>Energy monitoring systems</li>
            </ul>
            <div class="modal-price">Starting from $1,200</div>
        `
    },
    emergency: {
        title: '24/7 Emergency Services',
        content: `
            <h3>Rapid Emergency Response</h3>
            <p>Electrical emergencies don't wait, and neither do we. Our 24/7 emergency services ensure quick response and resolution for critical electrical issues.</p>
            <ul>
                <li>Power outage response</li>
                <li>Electrical fire hazards</li>
                <li>Storm damage repairs</li>
                <li>Weekend and holiday service</li>
            </ul>
            <div class="modal-price">Emergency rates apply</div>
        `
    }
};

serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const service = button.getAttribute('data-service');
        const details = serviceDetails[service];

        modalContent.innerHTML = `
            <h2>${details.title}</h2>
            ${details.content}
            <button class="modal-cta">Request Quote</button>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Add event listener to modal CTA
        const modalCTA = modalContent.querySelector('.modal-cta');
        modalCTA.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

// Auto-play carousel
setInterval(nextSlide, 5000);

// Multi-Step Form
const formSteps = document.querySelectorAll('.form-step');
const progressFill = document.getElementById('progress-fill');
const progressSteps = document.querySelectorAll('.step');
let currentStep = 0;

const nextBtnForm = document.getElementById('nextBtn');
const prevBtnForm = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');

function showStep(step) {
    formSteps.forEach(stepEl => stepEl.classList.remove('active'));
    progressSteps.forEach(stepEl => stepEl.classList.remove('active'));

    formSteps[step].classList.add('active');
    for (let i = 0; i <= step; i++) {
        progressSteps[i].classList.add('active');
    }

    progressFill.style.width = ((step + 1) / formSteps.length) * 100 + '%';

    if (step === 0) {
        prevBtnForm.disabled = true;
    } else {
        prevBtnForm.disabled = false;
    }

    if (step === formSteps.length - 1) {
        nextBtnForm.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtnForm.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

nextBtnForm.addEventListener('click', () => {
    if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
    }
});

prevBtnForm.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
});

function validateStep(step) {
    const currentStepEl = formSteps[step];
    const inputs = currentStepEl.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ff4757';
            isValid = false;
        } else {
            input.style.borderColor = '#333';
        }
    });

    return isValid;
}

// Form Submission
const multiStepForm = document.getElementById('multiStepForm');

multiStepForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(multiStepForm);
    const data = Object.fromEntries(formData.entries());

    // Show loading spinner
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'flex';

    // Create WhatsApp message with form details
    const whatsappMessage = `🔔 *NEW ELECTROTECH INQUIRY* 🔔%0A%0A👤 *Customer Details:*%0A• Name: ${data.name}%0A• Phone: ${data.phone}%0A• Email: ${data.email}%0A%0A🔧 *Service Request:*%0A• Service Type: ${data.service}%0A• Urgency Level: ${data.urgency}%0A• Project Details: ${data.message}%0A%0A📅 *Submitted:* ${new Date().toLocaleString()}%0A%0A⚡ *ElectroTech - Your Electrical Experts*%0A💡 We will contact you within 2 hours!`;

    // WhatsApp URL
    const whatsappNumber = '7026142341'; // Your WhatsApp business number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Simulate processing time then redirect to WhatsApp
    setTimeout(() => {
        spinner.style.display = 'none';

        // Open WhatsApp with the message
        window.open(whatsappURL, '_blank');

        // Show success message
        alert('Thank you! Your message has been sent to our WhatsApp. We will respond shortly.');

        // Reset form
        multiStepForm.reset();
        currentStep = 0;
        showStep(currentStep);
    }, 1500);

    // Save to localStorage
    localStorage.setItem('contactForm', JSON.stringify(data));
});

// Load saved form data
const savedFormData = localStorage.getItem('contactForm');
if (savedFormData) {
    const data = JSON.parse(savedFormData);
    Object.keys(data).forEach(key => {
        const input = document.querySelector(`[name="${key}"]`);
        if (input) {
            input.value = data[key];
        }
    });
}

// Service Card Hover Effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced Testimonial Card Animation
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 30px rgba(0, 210, 255, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Responsive Navigation
function handleResize() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// Service Popup Modal
const getServiceBtn = document.getElementById('getServiceBtn');
const servicePopup = document.getElementById('servicePopup');
const closeServicePopup = document.getElementById('closeServicePopup');
const servicePopupForm = document.getElementById('servicePopupForm');

// Open service popup
getServiceBtn.addEventListener('click', () => {
    servicePopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close service popup
closeServicePopup.addEventListener('click', () => {
    servicePopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === servicePopup) {
        servicePopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Service popup form submission
servicePopupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(servicePopupForm);
    const data = Object.fromEntries(formData.entries());

    // Validate form
    if (!data.name || !data.phone || !data.service || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Format WhatsApp message
    const message = `🔔 *QUICK SERVICE REQUEST* 🔔%0A%0A👤 *Customer:* ${data.name}%0A📞 *Phone:* ${data.phone}%0A🔧 *Service Needed:* ${data.service}%0A📝 *Description:* ${data.message}%0A%0A⏰ *Submitted:* ${new Date().toLocaleString()}%0A%0A⚡ *ElectroTech Emergency Response*%0A💡 We'll call you within 30 minutes!`;

    // Create WhatsApp URL (replace with your actual WhatsApp business number)
    const whatsappNumber = '7026142341'; // Replace with your WhatsApp business number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Close popup and reset form
    servicePopup.style.display = 'none';
    document.body.style.overflow = 'auto';
    servicePopupForm.reset();

    // Show success message
    setTimeout(() => {
        alert('Thank you! Your message has been sent via WhatsApp. We\'ll get back to you soon!');
    }, 1000);
});

// Initialize
showStep(currentStep);
showSlide(currentSlide);