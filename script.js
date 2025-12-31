// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dynamic Hero Content Configuration
    const heroContent = {
        wedding: {
            title: 'CRAFTING TIMELESS CELEBRATIONS<br><span class="block mt-2">WITH GRACE & GRANDEUR</span>',
            services: 'Luxury Weddings • Destination Celebrations • Exclusive Experiences',
            tagline: "INDIA'S LEADING LUXURY WEDDING & EVENT CURATORS"
        },
        government: {
            title: 'CRAFTING PRESTIGIOUS GOVERNMENT EVENTS<br><span class="block mt-2">WITH PRECISION & PROTOCOL</span>',
            services: 'Official Ceremonies • National Conferences • Public Sector Events',
            tagline: "TRUSTED PARTNERS FOR GOVERNMENT & INSTITUTIONAL EVENT MANAGEMENT"
        },
        destination: {
            title: 'CURATING BREATHTAKING DESTINATION<br><span class="block mt-2">CELEBRATIONS</span>',
            services: 'Palace Weddings • Beachside Vows • Royal Getaways',
            tagline: "SEAMLESS DESTINATION EVENTS CRAFTED ACROSS INDIA & BEYOND"
        },
        corporate: {
            title: 'DELIVERING CORPORATE EVENTS<br><span class="block mt-2">WITH STRATEGY & PRECISION</span>',
            services: 'Conferences • Product Launches • Corporate Summits',
            tagline: "PROFESSIONAL CORPORATE EVENT MANAGEMENT SOLUTIONS"
        }
    };

    // Function to update hero content
    const updateHeroContent = (category) => {
        const heroTitle = document.getElementById('hero-title');
        const heroServices = document.getElementById('hero-services');
        const heroTagline = document.getElementById('hero-tagline');
        
        if (heroContent[category] && heroTitle && heroServices && heroTagline) {
            // Add fade out effect
            heroTitle.style.opacity = '0';
            heroServices.style.opacity = '0';
            heroTagline.style.opacity = '0';
            
            setTimeout(() => {
                heroTitle.innerHTML = heroContent[category].title;
                heroServices.textContent = heroContent[category].services;
                heroTagline.textContent = heroContent[category].tagline;
                
                // Fade back in
                heroTitle.style.opacity = '1';
                heroServices.style.opacity = '1';
                heroTagline.style.opacity = '1';
            }, 250);
        }
    };

    // Portfolio filter functionality with dynamic content
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const expertiseContents = document.querySelectorAll('.expertise-content');
    const aboutContents = document.querySelectorAll('.about-content');
    const expertiseImageContents = document.querySelectorAll('.expertise-image-content');
    const servicesContents = document.querySelectorAll('.services-content');

    const applyFilter = (filter) => {
        // Update hero content
        updateHeroContent(filter);
        // Update filter buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'border-brown', 'border');
            btn.classList.add('border-transparent', 'border');
        });
        if (filter) {
            const activeBtn = Array.from(filterButtons).find(btn => btn.getAttribute('data-filter') === filter);
            if (activeBtn) {
                activeBtn.classList.add('active', 'border-brown', 'border');
                activeBtn.classList.remove('border-transparent');
            }
        }

        // Update portfolio items
        portfolioItems.forEach(item => {
            if (!filter || item.classList.contains(filter)) {
                item.style.display = 'block';
                item.classList.remove('hidden');
            } else {
                item.style.display = 'none';
                item.classList.add('hidden');
            }
        });

        // Show/Hide Corporate Partners section
        const corporatePartnersSection = document.getElementById('corporate-partners');
        if (corporatePartnersSection) {
            if (filter === 'corporate') {
                corporatePartnersSection.style.display = 'block';
            } else {
                corporatePartnersSection.style.display = 'none';
            }
        }

        // Update dynamic content sections
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Update expertise content
        expertiseContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Update about content
        aboutContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Update expertise image content
        expertiseImageContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Update services content
        servicesContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Show relevant content based on filter
        if (filter) {
            const targetContent = document.getElementById(`${filter}-content`);
            const targetExpertise = document.getElementById(`${filter}-expertise`);
            const targetAbout = document.getElementById(`${filter}-about`);
            const targetExpertiseImage = document.getElementById(`${filter}-expertise-image`);
            const targetServices = document.getElementById(`${filter}-services`);
            
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
            }
            
            if (targetExpertise) {
                targetExpertise.classList.add('active');
                targetExpertise.style.display = 'block';
            }

            if (targetAbout) {
                targetAbout.classList.add('active');
                targetAbout.style.display = 'block';
            }

            if (targetExpertiseImage) {
                targetExpertiseImage.classList.add('active');
                targetExpertiseImage.style.display = 'block';
            }

            if (targetServices) {
                targetServices.classList.add('active');
                targetServices.style.display = 'block';
            }
        }
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    // Apply initial filter based on the active button (defaults to first if none)
    const initial = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || filterButtons[0]?.getAttribute('data-filter');
    if (initial) {
        applyFilter(initial);
    }

    // Portfolio item click handlers
    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = item.querySelector('img');
            if (img && img.src) {
                window.open(img.src, '_blank');
            }
        });
    });

    // Smooth scrolling for navigation links
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

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items for animation
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});