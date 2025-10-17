document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderProducts('all');
    initializeFilters();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeModal();
}

function renderProducts(category) {
    const productGrid = document.getElementById('productGrid');
    const products = window.productsData;
    
    productGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found in this category.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    
    const badge = product.featured ? '<span class="product-badge">Featured</span>' : '';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            ${badge}
        </div>
        <div class="product-info">
            <p class="product-category">${formatCategory(product.category)}</p>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="product-view-btn" data-id="${product.id}">View Details</button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('product-view-btn')) {
            openProductModal(product.id);
        }
    });
    
    const viewBtn = card.querySelector('.product-view-btn');
    viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductModal(product.id);
    });
    
    return card;
}

function formatCategory(category) {
    const categories = {
        'wigs': 'Wigs',
        'extensions': 'Extensions',
        'accessories': 'Accessories',
        'care': 'Care Products'
    };
    return categories[category] || category;
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            const category = this.dataset.category;
            renderProducts(category);
            
            const productGrid = document.getElementById('productGrid');
            productGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
}

function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
}

function initializeSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll, .nav-link[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeModal() {
    const modal = document.getElementById('productModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProductModal);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

function openProductModal(productId) {
    const products = window.productsData;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = formatCategory(product.category);
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalDescription').textContent = product.description;
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    const careTipsList = document.getElementById('modalCareTips');
    careTipsList.innerHTML = '';
    product.careTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        careTipsList.appendChild(li);
    });
    
    document.getElementById('modalUpsell').textContent = product.upsell;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.scrollTop = 0;
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

window.addEventListener('resize', function() {
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (window.innerWidth > 768) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});
