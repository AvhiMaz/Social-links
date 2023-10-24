document.addEventListener('DOMContentLoaded', function() {
    const linksContainer = document.getElementById('links');
    const modeToggle = document.getElementById('toggleCheckbox');
    const greetingElement = document.getElementById('greeting');
    const timeGreetingElement = document.getElementById('time-greeting');

    modeToggle.addEventListener('change', function() {
        document.body.classList.toggle('light-mode');
        const modeText = this.checked ? 'Light Mode' : 'Dark Mode';
        document.querySelector('.mode-text').textContent = modeText;
    });

    const now = new Date();
    const hour = now.getHours();
    let greeting = '';

    if (hour >= 0 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    greetingElement.textContent = greeting;

    const links = [
        { text: 'Instagram', url: 'https://instagram.com/your_username', iconClass: 'fab fa-instagram' },
        { text: 'Twitter', url: 'https://twitter.com/your_username', iconClass: 'fab fa-twitter' },
        { text: 'LinkedIn', url: 'https://linkedin.com/in/your_profile', iconClass: 'fab fa-linkedin' }
    ];

    links.forEach(link => {
        const linkButton = document.createElement('button');
        const linkIcon = document.createElement('i');
        const linkText = document.createTextNode(link.text);

        linkIcon.classList.add(link.iconClass);
        linkButton.appendChild(linkIcon);
        linkButton.appendChild(linkText);

        linkButton.addEventListener('click', function() {
            window.open(link.url, '_blank');
        });

        linksContainer.appendChild(linkButton);
    });
});
