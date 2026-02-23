// ========== COUNTDOWN TIMER ==========
// Set the launch date (adjust this to your actual launch date)
const launchDate = new Date('June 1, 2025 00:00:00').getTime();

// Update countdown every second
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
}, 1000);

// ========== PROGRESS BAR ==========
// Simulate website completion progress (adjust as needed)
let progress = 75;
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressPercentage');

// Animate progress bar
function updateProgress() {
    // Randomly increase progress slowly (for demo effect)
    if (progress < 95) {
        progress += Math.random() * 0.5;
        if (progress > 95) progress = 95;
        
        progressBar.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';
    }
}

// Update progress every 30 seconds (for demo)
setInterval(updateProgress, 30000);

// ========== NOTIFY FORM ==========
document.getElementById('notifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const button = this.querySelector('.notify-btn');
    const originalText = button.innerHTML;
    
    // Simulate form submission
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        button.style.background = '#28a745';
        
        // Show success message
        const note = document.querySelector('.form-note');
        note.innerHTML = '✓ Thank you! We\'ll notify you when we launch.';
        note.style.color = '#28a745';
        
        // Reset form
        this.reset();
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.disabled = false;
            note.innerHTML = 'We\'ll never share your email. No spam, promise.';
            note.style.color = '#999';
        }, 3000);
    }, 1500);
});

// ========== ADD KNOT ANIMATION ==========
// Create floating knots on hover
const yarnBall = document.querySelector('.yarn-ball');

yarnBall.addEventListener('mouseenter', function() {
    this.style.animation = 'yarnSpin 1s infinite linear';
});

yarnBall.addEventListener('mouseleave', function() {
    this.style.animation = 'yarnSpin 4s infinite linear';
});

// ========== THREAD INTERACTION ==========
// Make threads interactive on hover
const threads = document.querySelectorAll('[class^="thread-"]');

threads.forEach(thread => {
    thread.addEventListener('mouseenter', function() {
        this.style.opacity = '0.3';
        this.style.transition = 'opacity 0.3s ease';
    });
    
    thread.addEventListener('mouseleave', function() {
        this.style.opacity = '';
    });
});

// ========== RANDOM THREAD GENERATOR ==========
// Add occasional new threads for visual interest
function addRandomThread() {
    const container = document.querySelector('.thread-background');
    const newThread = document.createElement('div');
    const randomClass = `thread-${Math.floor(Math.random() * 3) + 1}`;
    
    newThread.className = randomClass;
    newThread.style.top = Math.random() * 100 + '%';
    newThread.style.animation = `threadFloat ${15 + Math.random() * 10}s infinite linear`;
    newThread.style.opacity = '0.05';
    
    container.appendChild(newThread);
    
    // Remove after animation
    setTimeout(() => {
        newThread.remove();
    }, 30000);
}

// Add a random thread every 10 seconds
setInterval(addRandomThread, 10000);

// ========== LOADING ANIMATION ==========
// Add a subtle loading animation when page loads
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('DG Knitting - Coming Soon page loaded');
});

// ========== KNOT COUNT ==========
// Display how many knots are in the animation (fun fact)
const knotCount = document.createElement('div');
knotCount.className = 'knot-count';
knotCount.innerHTML = '🧶 1,247 knots in this animation';
knotCount.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    font-size: 0.7rem;
    color: #ccc;
    z-index: 1000;
`;
document.body.appendChild(knotCount);