// Efeito de Scroll Suave para os links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de "Scroll Reveal" para animar elementos ao aparecer na tela
if (typeof ScrollReveal !== 'undefined') {
    try {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 2000,
            reset: false
        });

        sr.reveal('.hero-avatar, .hero-title, .hero-subtitle, .hero-description', { interval: 200 });
        sr.reveal('.section-title', {});
        sr.reveal('.tech-card', { interval: 200 });
        sr.reveal('.experiencias-info, .social-icons', { delay: 300 });
        sr.reveal('.logo-container', { origin: 'bottom' });
        sr.reveal('.projeto-card', { origin: 'left', distance: '80px', interval: 400 });
        sr.reveal('.contato-links a', { origin: 'bottom', interval: 200 });
    } catch (e) {
        // ScrollReveal falhou; não bloqueia o restante do script
        console.warn('ScrollReveal não está disponível ou falhou:', e);
    }
} else {
    // não há ScrollReveal — seguir sem animações
}

// Relatórios das tecnologias ao clicar nas tech-cards
let _lastFocusedElement = null;
const techReports = {
    'HTML': {
        title: 'HTML',
        summary: 'Linguagem de marcação usada para estruturar conteúdo na web.',
        useCases: ['Estruturar páginas web','SEO básico','Templates estáticos'],
        pros: ['Aprendizagem rápida','Base para front-end','Ampla compatibilidade'],
        resources: [
            {name: 'MDN HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'},
            {name: 'W3Schools', url: 'https://www.w3schools.com/html/'}
        ]
    },
    'PYTHON': {
        title: 'Python',
        summary: 'Linguagem de programação versátil focada em legibilidade e produtividade.',
        useCases: ['Data Science','Automação','Web back-end (Django/Flask)'],
        pros: ['Sintaxe clara','Grande ecossistema','Boa para iniciantes'],
        resources: [
            {name: 'Python.org', url: 'https://www.python.org/'},
            {name: 'Real Python', url: 'https://realpython.com/'}
        ]
    },
    'CSS': {
        title: 'CSS',
        summary: 'Folhas de estilo usadas para controlar aparência de páginas HTML.',
        useCases: ['Design responsivo','Animações UI','Temas e layouts'],
        pros: ['Separação de aparência e conteúdo','Ampla adoção','Bom controle visual'],
        resources: [
            {name: 'MDN CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'},
            {name: 'CSS-Tricks', url: 'https://css-tricks.com/'}
        ]
    },
    'JAVASCRIPT': {
        title: 'JavaScript',
        summary: 'Linguagem de programação principal para comportamento em páginas web.',
        useCases: ['Interatividade no navegador','APIs','Aplicações full-stack (Node.js)'],
        pros: ['Execução em todo lugar','Grande ecossistema','Assíncrono e flexível'],
        resources: [
            {name: 'MDN JS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'},
            {name: 'You Don't Know JS (livro)', url: 'https://github.com/getify/You-Dont-Know-JS'}
        ]
    },
    'FIGMA': {
        title: 'Figma',
        summary: 'Ferramenta de design de interface e prototipagem colaborativa.',
        useCases: ['Design de UI/UX','Protótipos interativos','Design colaborativo'],
        pros: ['Colaboração em tempo real','Plugins e recursos','Integração com desenvolvedores'],
        resources: [
            {name: 'Figma Learn', url: 'https://www.figma.com/resources/learn-design/'}
        ]
    },
    'DATABASE': {
        title: 'Banco de Dados',
        summary: 'Armazenamento estruturado de dados usado por aplicações.',
        useCases: ['Persistência de dados','Relatórios','Sistemas transacionais'],
        pros: ['Durabilidade','Consultas poderosas','Escalabilidade com design certo'],
        resources: [
            {name: 'PostgreSQL', url: 'https://www.postgresql.org/'},
            {name: 'MongoDB', url: 'https://www.mongodb.com/'}
        ]
    },
    'REACT': {
        title: 'React',
        summary: 'Biblioteca JavaScript para construir interfaces de usuário reativas.',
        useCases: ['SPAs','Componentização','Renders eficientes'],
        pros: ['Grande comunidade','Ecossistema rico','Componentes reutilizáveis'],
        resources: [
            {name: 'React Docs', url: 'https://reactjs.org/'},
        ]
    },
    'GIT': {
        title: 'Git',
        summary: 'Sistema de controle de versão distribuído essencial no desenvolvimento moderno.',
        useCases: ['Versionamento','Colaboração','CI/CD'],
        pros: ['Histórico completo','Ramos (branches)','Amplamente usado'],
        resources: [
            {name: 'Pro Git (book)', url: 'https://git-scm.com/book/pt-br'}
        ]
    }
};

function openTechModal(title, htmlBody){
    const modal = document.getElementById('tech-modal');
    const modalTitle = document.getElementById('tech-modal-title');
    const modalBody = document.getElementById('tech-modal-body');
    modalTitle.textContent = title;
    modalBody.innerHTML = htmlBody;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    // salvar elemento com foco e mover foco para o botão fechar
    try { _lastFocusedElement = document.activeElement; } catch(e) { _lastFocusedElement = null; }
    const closeBtn = modal.querySelector('.tech-modal-close');
    if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
    // prevenir rolagem do body enquanto modal estiver aberto
    document.body.style.overflow = 'hidden';
}

function closeTechModal(){
    const modal = document.getElementById('tech-modal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
    // restaurar foco ao elemento anterior, se houver
    if (_lastFocusedElement && typeof _lastFocusedElement.focus === 'function') {
        try { _lastFocusedElement.focus(); } catch (e) {}
    }
    document.body.style.overflow = '';
}

function buildReportHTML(report){
    let html = '';
    html += `<p>${report.summary}</p>`;
    html += `<h3>Casos de uso</h3><ul>`;
    report.useCases.forEach(u => html += `<li>${u}</li>`);
    html += `</ul>`;
    html += `<h3>Vantagens</h3><ul>`;
    report.pros.forEach(p => html += `<li>${p}</li>`);
    html += `</ul>`;
    html += `<h3>Recursos</h3><ul>`;
    report.resources.forEach(r => html += `<li><a class="tech-link" href="${r.url}" target="_blank" rel="noopener">${r.name}</a></li>`);
    html += `</ul>`;
    return html;
}

// adiciona listeners nas tech-cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tech-card').forEach(card => {
        card.style.cursor = 'pointer';
        // clique com mouse
        card.addEventListener('click', () => {
            const label = card.querySelector('span')?.textContent?.trim()?.toUpperCase();
            if (!label) return;
            const report = techReports[label];
            if (report) {
                openTechModal(report.title, buildReportHTML(report));
            } else {
                openTechModal(label, `<p>Informações não disponíveis. Aqui vai um resumo genérico sobre <strong>${label}</strong>.</p>`);
            }
        });
        // ativação por teclado (Enter / Space)
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // fechar modal ao clicar no overlay ou no botão
    document.querySelectorAll('[data-close], .tech-modal-close').forEach(el => el.addEventListener('click', closeTechModal));

    // fechar ao apertar ESC
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeTechModal(); });
});
