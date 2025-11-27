//ELEMENT SELECTION//
const viewport = document.getElementById('viewport');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const columns = Array.from(document.querySelectorAll('.column'));
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');

//COLUMN NAVIGATION// 
function scrollToColumn(index) {
  const x = columns[index].offsetLeft;
  viewport.scrollTo({ left: x, top: 0, behavior: 'smooth' });
}

function getCurrentColumnIndex() {
  const left = viewport.scrollLeft;
  let nearest = 0;
  let bestDelta = Infinity;

  columns.forEach((col, i) => {
    const delta = Math.abs(col.offsetLeft - left);
    if (delta < bestDelta) {
      bestDelta = delta;
      nearest = i;
    }
  });

  return nearest;
}

nextBtn.addEventListener('click', () => {
  const idx = Math.min(getCurrentColumnIndex() + 1, columns.length - 1);
  scrollToColumn(idx);
});

prevBtn.addEventListener('click', () => {
  const idx = Math.max(getCurrentColumnIndex() - 1, 0);
  scrollToColumn(idx);
});

//LIKE BUTTONS//
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const span = btn.querySelector('span');
    span.textContent = Number(span.textContent) + 1;
  });
});

//COMMENTS//
document.querySelectorAll('.comment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    const list = btn.parentElement.querySelector('.comment-list');

    if (input.value.trim() !== '') {
      const p = document.createElement('p');
      p.textContent = input.value;
      list.appendChild(p);
      input.value = '';
    }
  });
});

//IMAGE MODAL// 
document.querySelectorAll('.photo-card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

modal.addEventListener('click', e => {
  if (e.target !== modalImg) {
    modal.style.display = 'none';
  }
});
