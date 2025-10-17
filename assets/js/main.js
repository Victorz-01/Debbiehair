/**
 * Debbiehair Main JavaScript
 * Handles site interactivity and dynamic behavior
 */

(function() {
    'use strict';

    const DebbiehairApp = {
        init: function() {
            this.setupMenuToggle();
            this.setupSmoothScroll();
            this.setupActiveNavigation();
            this.setupScrollHeader();
        },

        setupMenuToggle: function() {
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');
            
            if (!menuToggle || !mainNav) {
                return;
            }

            menuToggle.addEventListener('click', function() {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                mainNav.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });

            const navLinks = mainNav.querySelectorAll('.nav-link');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        mainNav.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        document.body.classList.remove('no-scroll');
                    }
                });
            });

            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('no-scroll');
                }
            });
        },

        setupSmoothScroll: function() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    if (href === '#' || href === '#home') {
                        e.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        return;
                    }
                    
                    const target = document.querySelector(href);
                    
                    if (target) {
                        e.preventDefault();
                        const headerHeight = document.querySelector('.site-header').offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },

        setupActiveNavigation: function() {
            const sections = document.querySelectorAll('.content-section, .hero-section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            if (sections.length === 0 || navLinks.length === 0) {
                return;
            }

            window.addEventListener('scroll', function() {
                let current = '';
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                
                sections.forEach(function(section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.pageYOffset >= (sectionTop - headerHeight - 100)) {
                        current = section.getAttribute('id');
                    }
                });

                if (window.pageYOffset < 200) {
                    current = 'home';
                }
                
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    const href = link.getAttribute('href').substring(1);
                    
                    if (href === current) {
                        link.classList.add('active');
                    }
                });
            });
        },

        setupScrollHeader: function() {
            const header = document.querySelector('.site-header');
            
            if (!header) {
                return;
            }

            let lastScroll = 0;
            
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }
                
                lastScroll = currentScroll;
            });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            DebbiehairApp.init();
        });
    } else {
        DebbiehairApp.init();
    }

    window.DebbiehairApp = DebbiehairApp;

})();
