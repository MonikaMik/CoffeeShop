import review from './components/review.js';
import reviewData from './components/reviewData.js';

const perziuros = reviewData.map(perziura => new review(perziura));

const KorteliuSekcija = document.querySelector('#reviewContainer');
KorteliuSekcija.classList.add('Cards');

perziuros.forEach(perziura => KorteliuSekcija.append(perziura));

document
  .querySelector('#addReview')
  .addEventListener('submit', e => {
    e.preventDefault();
    const el = e.target.elements;
    const perziur = {
      vardas: el.vardas.value,
      atsiliepimas: el.atsiliepimas.value,
      nuotrauka: el.nuotrauka.value
    };

    const reviewNode = new review(perziur);
    KorteliuSekcija.insertAdjacentElement('afterbegin', reviewNode);

    const seniausiaKortele = KorteliuSekcija.lastChild;
    KorteliuSekcija.removeChild(seniausiaKortele);

    e.target.reset();
  });
