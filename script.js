// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Mobil Menü Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menü linkine tıklayınca menüyü kapat
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Hero butonuna tıklayınca Hizmetler bölümüne kaydırma
const ctaBtn = document.getElementById('ctaButton');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
}

// İletişim Formu Gönderme (alert + mesaj)
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formFeedback.style.color = '#dc2626';
        formFeedback.innerText = 'Lütfen tüm alanları doldurun.';
        setTimeout(() => { formFeedback.innerText = ''; }, 3000);
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        formFeedback.style.color = '#dc2626';
        formFeedback.innerText = 'Geçerli bir e-posta adresi girin.';
        setTimeout(() => { formFeedback.innerText = ''; }, 3000);
        return;
    }

    // Başarılı gönderim simülasyonu
    formFeedback.style.color = '#16a34a';
    formFeedback.innerText = 'Mesajınız başarıyla gönderildi! Teşekkürler.';
    contactForm.reset();
    setTimeout(() => { formFeedback.innerText = ''; }, 4000);
});

// Sayfa yüklendiğinde aktif link vurgusu (isteğe bağlı)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
// (isteğe bağlı) CSS active link rengi ekleyelim
const styleActive = document.createElement('style');
styleActive.textContent = `.nav-menu li a.active { color: var(--primary); font-weight: bold; border-bottom: 2px solid var(--primary); }`;
document.head.appendChild(styleActive);
