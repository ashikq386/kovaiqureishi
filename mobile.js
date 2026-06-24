// Inject hamburger menu into every page header
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  // Hamburger button
  const btn = document.createElement('button');
  btn.className = 'mob-menu-btn';
  btn.setAttribute('aria-label', 'Open menu');
  btn.innerHTML = '<span></span><span></span><span></span>';
  header.appendChild(btn);

  // Mobile nav overlay
  const nav = document.querySelector('header nav');
  const links = nav ? Array.from(nav.querySelectorAll('a')) : [];
  const bookBtn = header.querySelector('a[href*="Contact"]');

  const mob = document.createElement('div');
  mob.className = 'mob-nav';

  const close = document.createElement('button');
  close.className = 'mob-close';
  close.innerHTML = '&times;';
  mob.appendChild(close);

  links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.href;
    a.textContent = l.textContent;
    mob.appendChild(a);
  });

  if (bookBtn) {
    const book = document.createElement('a');
    book.href = bookBtn.href;
    book.textContent = bookBtn.textContent.trim();
    book.style.cssText = 'margin-top:20px;background:linear-gradient(135deg,#F4E4AC 0%,#CDA24E 44%,#9C7B2D 76%,#E8D08A 100%);color:#121110;font-family:Sora,sans-serif;font-weight:700;padding:14px 32px;border-radius:0';
    mob.appendChild(book);
  }

  document.body.appendChild(mob);

  btn.addEventListener('click', () => mob.classList.add('open'));
  close.addEventListener('click', () => mob.classList.remove('open'));
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
})();
