export default class InfoModal{
  constructor({allergens,ingredients,name}){
    this.allergens = allergens;
    this.ingredients = ingredients;
    this.name = name;


    return this.render();
  }
  render(){
    const infoModal = document.createElement('dialog');
    infoModal.classList.add('infoModalClass');

    const header = document.createElement("h1");
    const headerText = document.createTextNode(this.name);
    const lineText = document.createTextNode(` allergens and ingredients`);
    const line = document.createElement('span')
    line.classList.add("text-with-underline")
    line.append(lineText);
    header.append(headerText,line);

    const par = document.createElement('p');
    const parText = document.createTextNode(this.allergens);
    const span = document.createElement('span');
    const spanText = document.createTextNode('Allergens: ');
    span.append(spanText)
    par.append(span,parText);
    
    const par2 = document.createElement('p');
    const par2Text = document.createTextNode(this.ingredients);
    const span2 = document.createElement('span');
    const span2Text = document.createTextNode('Ingredients: ');
    span2.append(span2Text);
    par2.append(span2,par2Text);


    infoModal.addEventListener('keydown', e =>{
      if(e.key === "Escape"){
        infoModal.remove();
      }
    })
    infoModal.addEventListener('click', e => {
      const bounds = infoModal.getBoundingClientRect();
      if(
        e.clientX < bounds.left ||
        e.clientX > bounds.right ||
        e.clientY < bounds.top ||
        e.clientY > bounds.bottom
      ){
        infoModal.remove();
      }
    })

    infoModal.append(header,par2,par);

    return infoModal
  }
}