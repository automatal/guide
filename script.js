// Alterna o tema e tenta guardar a preferência no navegador.
const botaoTema = document.querySelector('#tema');
function aplicarTema(escuro) {
  document.documentElement.dataset.tema = escuro ? 'escuro' : 'claro';
  botaoTema.textContent = escuro ? 'Tema claro' : 'Tema escuro';
  botaoTema.setAttribute('aria-label', escuro ? 'Ativar tema claro' : 'Ativar tema escuro');
  botaoTema.setAttribute('aria-pressed', String(escuro));
}
let preferencia = null;
try { preferencia = localStorage.getItem('tema'); } catch { /* Continua sem armazenamento. */ }
aplicarTema(preferencia ? preferencia === 'escuro' : window.matchMedia('(prefers-color-scheme: dark)').matches);
botaoTema.addEventListener('click', () => {
  const escuro = document.documentElement.dataset.tema !== 'escuro';
  aplicarTema(escuro);
  try { localStorage.setItem('tema', escuro ? 'escuro' : 'claro'); } catch { /* Tema funciona mesmo sem armazenamento. */ }
});
document.querySelector('#ano').textContent = new Date().getFullYear();
