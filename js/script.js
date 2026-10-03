function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = '🎉 Hello! Welcome to my WAD project!';
    messageElement.style.color = '#667eea';
    messageElement.style.fontSize = '1.2rem';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.marginTop = '1rem';
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}!\n\nWe received your message.\nWe'll contact you at: ${email}`);
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    console.log('Welcome to My WAD Project!');
});