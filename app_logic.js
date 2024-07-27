// 🌟 Logique de l'application et gestion des interactions
document.addEventListener('DOMContentLoaded', () => {
    function activateLink(e) {
        document.querySelectorAll('nav.mobile-nav a').forEach(link => link.classList.remove('active'));
        e.currentTarget.classList.add('active');
    }

    // 🌙 Gestion du mode sombre
    document.getElementById('theme-toggle').addEventListener('click', (e) => {
        e.preventDefault();
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        e.currentTarget.textContent = newTheme === 'light' ? 'Mode Sombre' : 'Mode Clair';
    });

    document.querySelectorAll('nav.mobile-nav a').forEach(link => {
        link.addEventListener('click', activateLink);
    });

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('nav.mobile-nav a.active').classList.remove('active');
                document.querySelector(`nav.mobile-nav a[href="#${entry.target.id}"]`).classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    // 🔍 Fonctionnalité de recherche
    document.getElementById('search').addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const rows = document.querySelectorAll('#site-table-body tr');
        const cards = document.querySelectorAll('#site-cards .card');
        
        rows.forEach(row => {
            const siteName = row.cells[1].textContent.toLowerCase();
            row.style.display = siteName.includes(searchValue) ? '' : 'none';
        });

        cards.forEach(card => {
            const siteName = card.querySelector('.card-title').textContent.toLowerCase();
            card.style.display = siteName.includes(searchValue) ? '' : 'none';
        });
    });

    // 🖼️ Changement de vue
    const viewButtons = {
        'list-view-btn': 'list-view',
        'grid-view-btn': 'grid-view',
        'table-view-btn': 'table-view',
        'card-view-btn': 'card-view'
    };

    Object.keys(viewButtons).forEach(btnId => {
        document.getElementById(btnId).addEventListener('click', () => {
            const container = document.getElementById('site-container');
            container.className = viewButtons[btnId];
            Object.keys(viewButtons).forEach(key => document.getElementById(key).classList.remove('active'));
            document.getElementById(btnId).classList.add('active');
        });
    });
});
