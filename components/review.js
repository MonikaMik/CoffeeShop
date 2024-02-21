
export default class Perziura {
  constructor({ vardas, atsiliepimas, nuotrauka, tekstas }) {
    this.vardas = vardas;
    this.atsiliepimas = atsiliepimas;
    this.nuotrauka = nuotrauka;
    this.tekstas = tekstas;
    return this.render();
  }

  createParagraph(text) {
    const par = document.createElement('p');
    const parText = document.createTextNode(text);
    par.appendChild(parText);
    return par;
  }

  render() {
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);

    const pavadinimas = document.createElement('p');
    const pavadinimasText = document.createTextNode(this.vardas);
    pavadinimas.appendChild(pavadinimasText);

    const bendraInfo = document.createElement('div');
    bendraInfo.classList.add('reviewNaujas');
    const atsiliepimas = this.createParagraph(this.atsiliepimas);

    bendraInfo.append(pavadinimas, atsiliepimas);
    divCard.append(image, bendraInfo);
    return divCard;
  }
}
