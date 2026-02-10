// Portfolio JavaScript - Interactive Features and Animations

// New Loading Screen Logic
(function runLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.querySelector('main');
    const barFill = document.getElementById('bar-fill');
    
    const duration = 3000; // 3 seconds loading time
    const interval = 50;   // Update every 50ms
    const step = (interval / duration) * 100; // Calculate progress step
    let progress = 0;

    // Check if loading screen exists
    if (!loadingScreen) {
        if (content) content.style.display = 'block';
        return;
    }

    // Check if progress bar exists
    if (!barFill) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                if (content) content.style.display = 'block';
            }, 600);
        }, duration);
        return;
    }

    // Animate progress bar
    const iv = setInterval(() => {
        progress += step;
        if (progress > 100) progress = 100;
        barFill.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(iv);
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                if (content) content.style.display = 'block';
            }, 600);
        }
    }, interval);
})();

// Particle System (Background Effect)
(function setupParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
            this.alpha = Math.random() * 0.5 + 0.3;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Mouse interaction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100 && distance > 0) {
                const force = (100 - distance) / 100;
                this.x -= (dx / distance) * force * 2;
                this.y -= (dy / distance) * force * 2;
            }
            
            // Wrap around edges
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
            
            // Pulsing effect
            this.pulsePhase += this.pulseSpeed;
            this.currentSize = this.size + Math.sin(this.pulsePhase) * 0.5;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Create particles
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
    
    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Connect particles with lines
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.save();
                    ctx.globalAlpha = (120 - distance) / 120 * 0.3;
                    ctx.strokeStyle = '#3b82f6';
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }
    
    function animate() {
        if (!ctx || !canvas) return;
        
        try {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                if (particle && typeof particle.update === 'function' && typeof particle.draw === 'function') {
                    particle.update();
                    particle.draw();
                }
            });
            
            connectParticles();
            requestAnimationFrame(animate);
        } catch (error) {
            console.error('Animation error:', error);
        }
    }
    
    animate();
})();

// Navigation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

// Mobile Menu Toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active navigation link
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeSection = entry.target;
            const activeLink = document.querySelector(`.nav-link[href="#${activeSection.id}"]`);

            navLinks.forEach(link => link.classList.remove('active'));
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Enhanced Particle System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.time = 0;
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        });
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createParticles() {
        const particleCount = 150;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 3 + 1,
                opacity: Math.random() * 0.6 + 0.2,
                hue: Math.random() * 60 + 200, // Blue to purple range
                pulsePhase: Math.random() * Math.PI * 2,
                orbitRadius: Math.random() * 2,
                orbitSpeed: Math.random() * 0.02 + 0.01
            });
        }
    }

    animate() {
        this.time += 0.016; // ~60fps
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            // Orbital motion
            const orbitX = Math.cos(this.time * particle.orbitSpeed + particle.pulsePhase) * particle.orbitRadius;
            const orbitY = Math.sin(this.time * particle.orbitSpeed + particle.pulsePhase) * particle.orbitRadius;

            // Update position with orbital motion
            particle.x += particle.vx + orbitX * 0.1;
            particle.y += particle.vy + orbitY * 0.1;

            // Enhanced mouse interaction
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                const force = (120 - distance) / 120;
                const angle = Math.atan2(dy, dx);
                particle.vx -= Math.cos(angle) * force * 0.05;
                particle.vy -= Math.sin(angle) * force * 0.05;

                // Add color shift on interaction
                particle.hue = (particle.hue + 2) % 360;
            }

            // Gentle damping
            particle.vx *= 0.985;
            particle.vy *= 0.985;

            // Boundary check with soft bounce
            if (particle.x < particle.radius) {
                particle.x = particle.radius;
                particle.vx = Math.abs(particle.vx);
            }
            if (particle.x > this.canvas.width - particle.radius) {
                particle.x = this.canvas.width - particle.radius;
                particle.vx = -Math.abs(particle.vx);
            }
            if (particle.y < particle.radius) {
                particle.y = particle.radius;
                particle.vy = Math.abs(particle.vy);
            }
            if (particle.y > this.canvas.height - particle.radius) {
                particle.y = this.canvas.height - particle.radius;
                particle.vy = -Math.abs(particle.vy);
            }

            // Pulsing opacity
            const pulseOpacity = particle.opacity + Math.sin(this.time * 2 + particle.pulsePhase) * 0.2;

            // Draw particle with glow effect
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.radius * 3
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${pulseOpacity})`);
            gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 50%, ${pulseOpacity * 0.5})`);
            gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 40%, 0)`);

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
            this.ctx.fill();

            // Core particle
            this.ctx.fillStyle = `hsla(${particle.hue}, 70%, 70%, ${pulseOpacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Enhanced connections with gradient lines
        this.particles.forEach((particle, i) => {
            this.particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = 0.15 * (1 - distance / 120);
                    const hue = (particle.hue + otherParticle.hue) / 2;

                    // Animated connection line
                    const lineWidth = 1 + Math.sin(this.time * 3 + distance * 0.1) * 0.5;

                    this.ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`;
                    this.ctx.lineWidth = lineWidth;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
const particleCanvas = document.getElementById('particle-canvas');
if (particleCanvas) {
    new ParticleSystem(particleCanvas);
}

// Typewriter Effect
class TypewriterEffect {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typewriter effect
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    const texts = typewriterElement.getAttribute('data-text').split(' | ');
    new TypewriterEffect(typewriterElement, texts);
}

// Enhanced Scroll Animations
const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-left, .slide-right, .scale-in, .rotate-in, .bounce-in');

    const checkVisibility = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = (
                rect.top <= window.innerHeight * 0.8 &&
                rect.bottom >= 0
            );

            if (isVisible && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check
    checkVisibility();

    // Throttled scroll handler
    let ticking = false;
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(checkVisibility);
            ticking = true;
            setTimeout(() => { ticking = false; }, 100);
        }
    };

    window.addEventListener('scroll', requestTick);
    window.addEventListener('resize', requestTick);
};

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const progress = skillBar.getAttribute('data-progress');
            skillBar.style.width = progress + '%';
            skillBarsObserver.unobserve(skillBar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(skillBar => {
    skillBarsObserver.observe(skillBar);
});

// Statistics Counter Animation
class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.start = 0;
        this.startTime = null;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(this.element);
    }

    animate(currentTime) {
        if (!this.startTime) this.startTime = currentTime;

        const elapsed = currentTime - this.startTime;
        const progress = Math.min(elapsed / this.duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * this.target);

        this.element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame((time) => this.animate(time));
        } else {
            this.element.textContent = this.target;
        }
    }
}

// Initialize counters
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    new CounterAnimation(stat, target);
});

// Projects Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter projects
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would normally send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Magnetic cursor effect for buttons
document.querySelectorAll('.btn, .project-link, .social-link').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
    });
});

// Form validation
const validateForm = (form) => {
    const inputs = form.querySelectorAll('.form-input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
};

// Add error styles
const style = document.createElement('style');
style.textContent = `
    .form-input.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`;
document.head.appendChild(style);

// Performance optimization - Debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handlers
const debouncedScrollHandler = debounce(() => {
    animateOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Image loading optimization
const optimizeImages = () => {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Handle image load
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });

        // Handle image error
        img.addEventListener('error', () => {
            img.style.opacity = '0.5';
            console.warn(`Image failed to load: ${img.src}`);
        });

        // Optimize image dimensions based on container
        if (img.classList.contains('skill-icon-img')) {
            img.loading = 'eager';
        } else if (img.classList.contains('profile-image')) {
            img.loading = 'eager';
        } else {
            img.loading = 'lazy';
        }
    });
};

// Lazy loading for images with data-src
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Initialize image optimization
document.addEventListener('DOMContentLoaded', optimizeImages);

// Console welcome message
console.log('%c Welcome to My Portfolio! ', 'background: linear-gradient(45deg, #3b82f6, #60a5fa); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Built with passion and modern web technologies ', 'color: #60a5fa; font-size: 12px;');