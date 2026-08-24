const modal = document.getElementById('registerModal');
document.getElementById('openRegister').onclick = () => modal.classList.add('show');
document.getElementById('closeRegister').onclick = () => modal.classList.remove('show');
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('show');
});

document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('success').classList.add('show');
  e.target.reset();
  setTimeout(() => modal.classList.remove('show'), 1800);
});

const chat = document.getElementById('chat');
document.getElementById('openChat').onclick = () => chat.classList.add('open');
document.getElementById('closeChat').onclick = () => chat.classList.remove('open');

const form = document.getElementById('chatForm');
const input = document.getElementById('chatInput');
const messages = document.getElementById('messages');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
  setTimeout(() => {
    const bot = document.createElement('div');
    bot.className = 'msg bot';
    bot.textContent = 'Дякуємо за повідомлення! У демо-версії це лише локально. Для реального чату підключіть сервер.';
    messages.appendChild(bot);
    messages.scrollTop = messages.scrollHeight;
  }, 650);
});
