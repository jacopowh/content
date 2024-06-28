function setupCollapsibleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('main');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        body.classList.toggle('sidebar-open');

        if (window.innerWidth <= 768) {
            // Per schermi piccoli, non spostiamo il contenuto principale
            content.style.marginLeft = '0';
        } else {
            // Per schermi grandi, spostiamo il contenuto principale
            content.style.marginLeft = sidebar.classList.contains('collapsed') ? '0' : '250px';
        }
    });

    // Gestisce il ridimensionamento della finestra
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            content.style.marginLeft = sidebar.classList.contains('collapsed') ? '0' : '250px';
        } else {
            content.style.marginLeft = '0';
        }
    });

    // Imposta il margine sinistro corretto all'avvio
    if (window.innerWidth > 768) {
        content.style.marginLeft = sidebar.classList.contains('collapsed') ? '0' : '250px';
    } else {
        content.style.marginLeft = '0';
    }
}

function setupCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.prevBtn');
    const nextBtn = carousel.querySelector('.nextBtn');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });
}

// Inizializza i caroselli
setupCarousel('conversation-starter-carousel');
setupCarousel('view-casa-carousel');
setupCarousel('finanza-comportamentale-carousel');

// Inizializza il menù
setupCollapsibleMenu();

// Aggiungiamo un listener per il cambio di persona
document.querySelector('.personas-select').addEventListener('change', function() {
    const selectedPersona = this.value;
    console.log('Persona selezionata:', selectedPersona);
    // Qui puoi aggiungere la logica per cambiare il contenuto in base alla persona selezionata
});