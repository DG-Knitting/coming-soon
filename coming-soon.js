// ========== COUNTDOWN TIMER ==========
const launchDate = new Date('March 30, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerHTML = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerHTML = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerHTML = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownTimer);
        if (daysEl) daysEl.innerHTML = '00';
        if (hoursEl) hoursEl.innerHTML = '00';
        if (minutesEl) minutesEl.innerHTML = '00';
        if (secondsEl) secondsEl.innerHTML = '00';
        
        const launchElement = document.querySelector('.launch-date span');
        if (launchElement) {
            launchElement.innerHTML = 'Now Live!';
        }
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// ========== DETECT MOBILE DEVICE ==========
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

// ========== OPTIMIZED BACKGROUND (only on desktop) ==========
if (!isMobile) {
    // Only run animations on desktop
    let wormCount = 0;
    const maxWorms = 3; // Reduced from original
    
    function createRandomWorm() {
        if (wormCount >= maxWorms) return;
        
        const container = document.querySelector('.worm-threads');
        if (!container) return;
        
        wormCount++;
        
        const worm = document.createElement('div');
        worm.className = 'worm';
        
        const size = Math.floor(Math.random() * 300) + 100; // Smaller size
        worm.style.width = size + 'px';
        worm.style.height = size + 'px';
        worm.style.top = Math.random() * 100 + '%';
        worm.style.left = Math.random() * 100 + '%';
        worm.style.borderWidth = (Math.random() * 1 + 0.5) + 'px';
        
        const colors = ['var(--crimson)', 'var(--orchid)'];
        worm.style.borderTopColor = colors[Math.floor(Math.random() * colors.length)];
        worm.style.borderRightColor = colors[Math.floor(Math.random() * colors.length)];
        worm.style.opacity = Math.random() * 0.1 + 0.03; // Lower opacity
        
        const duration = Math.floor(Math.random() * 30) + 20;
        worm.style.animation = `wormMoveSimple ${duration}s infinite linear`;
        
        if (Math.random() > 0.5) {
            worm.style.animationDirection = 'reverse';
        }
        
        container.appendChild(worm);
        
        // Remove after longer period to reduce DOM manipulation
        setTimeout(() => {
            if (worm && worm.parentNode) {
                worm.remove();
                wormCount--;
            }
        }, duration * 1000 * 2); // Double the duration
    }

    // Create initial worms
    for (let i = 0; i < 2; i++) {
        setTimeout(createRandomWorm, i * 8000); // Slower creation
    }
    
    // Create new worms less frequently
    setInterval(createRandomWorm, 60000); // Every minute instead of 30 seconds
}

// ========== SMOOTH FADE IN ==========
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease'; // Faster transition
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50); // Reduced delay
});

// ========== OPTIMIZED SCROLL PREVENTION ==========
// Only prevent default on body scroll, allow container scroll
const container = document.querySelector('.coming-soon-container');

if (container) {
    container.addEventListener('wheel', function(e) {
        e.stopPropagation();
    }, { passive: true });
    
    container.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: true });
}

// Simplified thread interactions - only on desktop
if (!isMobile) {
    const threads = document.querySelectorAll('.thread-detail');
    threads.forEach(thread => {
        thread.addEventListener('mouseenter', function() {
            this.style.opacity = '0.2';
            this.style.transition = 'opacity 0.3s ease';
        });
        
        thread.addEventListener('mouseleave', function() {
            this.style.opacity = '';
        });
    });
}

// Remove all random knot generation and complex interactions
// Keep only essential functionality

// ========== LOG CONFIRMATION ==========
console.log('DG Knitting - Coming Soon page loaded (optimized)');
console.log('Launch date: March 30, 2026');
console.log('Mobile optimized: ' + (isMobile ? 'Yes' : 'No'));
