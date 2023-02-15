const sections = document.querySelectorAll('section');

sections.forEach(section => {
  const cards = section.querySelectorAll('.card');
  let currentIndex = 0;

  function toggleCards() {
    cards[currentIndex].classList.toggle('float-in');
    cards[currentIndex].classList.toggle('float-out');

    currentIndex = (currentIndex + 1) % cards.length;

    cards[currentIndex].classList.toggle('float-in');
    cards[currentIndex].classList.toggle('float-out');
  }

  cards.forEach(card => {
    card.addEventListener('click', toggleCards);
  });
});