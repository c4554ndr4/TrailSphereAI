// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

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

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact Form Handler
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// CTA Button Actions
document.querySelectorAll('.primary-button, .cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('Trial') || this.textContent.includes('Demo')) {
            e.preventDefault();
            
            // Create modal for demo request
            showDemoModal();
        }
    });
});

// Demo Modal
function showDemoModal() {
    // Create modal HTML
    const modalHTML = `
        <div id="demoModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Request a Demo</h2>
                <p>See how Paraxel AI can transform your CRA workflows</p>
                <form id="demoForm">
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Full Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Work Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="company" placeholder="Company Name" required>
                    </div>
                    <div class="form-group">
                        <select name="role" required>
                            <option value="">Your Role</option>
                            <option value="cra">Clinical Research Associate</option>
                            <option value="manager">CRA Manager</option>
                            <option value="director">Clinical Operations Director</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea name="message" placeholder="Tell us about your current challenges" rows="3"></textarea>
                    </div>
                    <button type="submit" class="submit-button">
                        <i class="fas fa-calendar"></i>
                        Schedule Demo
                    </button>
                </form>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        <style>
            .modal {
                display: block;
                position: fixed;
                z-index: 10000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                backdrop-filter: blur(5px);
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background-color: white;
                margin: 5% auto;
                padding: 40px;
                border-radius: 20px;
                width: 90%;
                max-width: 500px;
                position: relative;
                animation: slideIn 0.3s ease;
            }
            
            .close {
                position: absolute;
                right: 20px;
                top: 20px;
                font-size: 2rem;
                cursor: pointer;
                color: #666;
                transition: color 0.3s ease;
            }
            
            .close:hover {
                color: #333;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
    `;
    
    // Add to page
    document.head.insertAdjacentHTML('beforeend', modalStyles);
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Modal event handlers
    const modal = document.getElementById('demoModal');
    const closeBtn = modal.querySelector('.close');
    const demoForm = document.getElementById('demoForm');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scheduling...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Demo request submitted! We\'ll contact you within 24 hours to schedule your personalized demo.');
            modal.remove();
        }, 2000);
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll(
        '.feature-card, .problem-card, .pricing-card, .security-badge, .arch-step'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Pricing Calculator (if needed later)
function calculateROI() {
    // This could be expanded for a pricing calculator
    const currentCost = document.getElementById('currentCost')?.value || 30;
    const users = document.getElementById('users')?.value || 10;
    
    const currentMonthly = currentCost * users;
    const paraxelMonthly = 25 * users; // Professional plan
    const savings = currentMonthly - paraxelMonthly;
    
    return {
        currentMonthly,
        paraxelMonthly,
        savings,
        savingsPercent: Math.round((savings / currentMonthly) * 100)
    };
}

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.getAttribute('data-target') || counter.textContent;
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (target.includes('%')) {
                    counter.textContent = Math.ceil(current) + '%';
                } else if (target.includes('M+')) {
                    counter.textContent = Math.ceil(current) + 'M+';
                } else {
                    counter.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Add some CSS for animations via JavaScript
const animationStyles = `
    <style>
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: white;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                padding: 20px 0;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
            }
            
            .hamburger.active span:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', animationStyles); 