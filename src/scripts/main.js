document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const alturaDoHero = document.querySelector('.hero').clientHeight;

    window.addEventListener('scroll', (janela) => {
        const posicaoAtual = janela.scrollY;

        if(posicaoAtual < alturaDoHero) {
            ocultarElementosHeader()
        } else {
            exibeElementosHeader()
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (botao) => {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAsAbas();
            aba.classList.add('shows__list--is-active');
            removeButtonActive()
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta())
    }
})

function ocultarElementosHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento) {
    const elementoPai = elemento.target.parentNode
    elementoPai.classList.toggle('faq__questions__item--is-open')
}

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}