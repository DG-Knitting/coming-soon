// ========== COUNTDOWN TIMER ==========
// Set launch date to March 30, 2026
const launchDate = new Date('March 30, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Get elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Update if elements exist
    if (daysEl) daysEl.innerHTML = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerHTML = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerHTML = String(seconds).padStart(2, '0');

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownTimer);
        if (daysEl) daysEl.innerHTML = '00';
        if (hoursEl) hoursEl.innerHTML = '00';
        if (minutesEl) minutesEl.innerHTML = '00';
        if (secondsEl) secondsEl.innerHTML = '00';
        
        // Show launch message
        const launchElement = document.querySelector('.launch-date span');
        if (launchElement) {
            launchElement.innerHTML = 'Now Live!';
        }
    }
}

// Start countdown
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// ========== RANDOM WORM THREAD GENERATOR ==========
function createRandomWorm() {
    const container = document.querySelector('.worm-threads');
    if (!container) return;
    
    const worm = document.createElement('div');
    worm.className = 'worm';
    
    // Random size between 100px and 600px
    const size = Math.floor(Math.random() * 500) + 100;
    worm.style.width = size + 'px';
    worm.style.height = size + 'px';
    
    // Random position
    worm.style.top = Math.random() * 100 + '%';
    worm.style.left = Math.random() * 100 + '%';
    
    // Random border width
    worm.style.borderWidth = (Math.random() * 2 + 0.5) + 'px';
    
    // Random colors
    const colors = ['var(--crimson)', 'var(--orchid)'];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    worm.style.borderTopColor = color1;
    worm.style.borderRightColor = color2;
    
    // Random opacity
    worm.style.opacity = Math.random() * 0.15 + 0.05;
    
    // Random animation duration
    const duration = Math.floor(Math.random() * 40) + 20;
    worm.style.animation = `wormMove ${duration}s infinite linear`;
    
    // Random direction
    if (Math.random() > 0.5) {
        worm.style.animationDirection = 'reverse';
    }
    
    container.appendChild(worm);
    
    // Remove after animation cycle
    setTimeout(() => {
        if (worm && worm.parentNode) {
            worm.remove();
        }
    }, duration * 1000);
}

// Create a new random worm every 30 seconds
setInterval(createRandomWorm, 30000);

// Create a few on load
for (let i = 0; i < 3; i++) {
    setTimeout(createRandomWorm, i * 5000);
}

// ========== SMOOTH FADE IN ==========
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========== PREVENT SCROLLING ==========
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('wheel', function(e) {
    e.preventDefault();
}, { passive: false });

// Allow scrolling INSIDE the container if needed
const container = document.querySelector('.coming-soon-container');
if (container) {
    container.addEventListener('wheel', function(e) {
        e.stopPropagation();
    });
    
    container.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: true });
}

// ========== THREAD INTERACTION ==========
const threads = document.querySelectorAll('.thread-detail');

threads.forEach(thread => {
    thread.addEventListener('mouseenter', function() {
        this.style.opacity = '0.25';
        this.style.transition = 'opacity 0.5s ease';
    });
    
    thread.addEventListener('mouseleave', function() {
        this.style.opacity = '';
    });
});

// ========== LOG CONFIRMATION ==========
console.log('DG Knitting - Coming Soon page loaded with working animations');
console.log('Launch date: March 30, 2026');

// Add this to your existing coming-soon.js

// ========== THREAD TIE INTERACTIONS ==========
const knots = document.querySelectorAll('.thread-knot');
const intersections = document.querySelectorAll('.thread-intersection');

knots.forEach(knot => {
    knot.addEventListener('mouseenter', function() {
        this.style.opacity = '0.4';
        this.style.transform = 'translate(-50%, -50%) scale(1.5)';
        this.style.transition = 'all 0.3s ease';
        this.style.boxShadow = '0 0 20px rgba(223, 34, 41, 0.6)';
    });
    
    knot.addEventListener('mouseleave', function() {
        this.style.opacity = '';
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

intersections.forEach(intersection => {
    intersection.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        this.style.transform = 'scale(2)';
        this.style.backgroundColor = 'var(--orchid)';
        this.style.transition = 'all 0.3s ease';
    });
    
    intersection.addEventListener('mouseleave', function() {
        this.style.opacity = '';
        this.style.transform = '';
        this.style.backgroundColor = '';
    });
});

// Animate threads randomly
function animateRandomThread() {
    const horizontals = document.querySelectorAll('.horizontal-thread');
    const verticals = document.querySelectorAll('.vertical-thread');
    
    if (horizontals.length) {
        const randomHorizontal = horizontals[Math.floor(Math.random() * horizontals.length)];
        randomHorizontal.style.animation = 'threadPulse 2s infinite ease-in-out';
    }
    
    if (verticals.length) {
        const randomVertical = verticals[Math.floor(Math.random() * verticals.length)];
        randomVertical.style.animation = 'threadPulseVertical 2.5s infinite ease-in-out';
    }
}

setInterval(animateRandomThread, 5000);

// Create a new knot occasionally
function createRandomKnot() {
    const container = document.querySelector('.thread-ties');
    if (!container) return;
    
    const knot = document.createElement('div');
    knot.className = 'thread-knot';
    
    // Random position within container
    knot.style.top = (Math.random() * 80 + 10) + '%';
    knot.style.left = (Math.random() * 80 + 10) + '%';
    
    // Random size
    const size = Math.random() * 6 + 4;
    knot.style.width = size + 'px';
    knot.style.height = size + 'px';
    
    // Random color variation
    if (Math.random() > 0.5) {
        knot.style.background = 'radial-gradient(circle at 30% 30%, var(--orchid), var(--crimson))';
    }
    
    container.appendChild(knot);
    
    // Remove after animation
    setTimeout(() => {
        if (knot && knot.parentNode) {
            knot.style.opacity = '0';
            knot.style.transition = 'opacity 1s ease';
            setTimeout(() => knot.remove(), 1000);
        }
    }, 10000);
}

// Create random knots occasionally
setInterval(createRandomKnot, 15000);
