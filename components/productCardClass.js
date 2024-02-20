export default class ProductCard {
  constructor({name,info,photo,rating,price,id}) {
    this.name = name;
    this.info = info;
    this.photo = photo;
    this.rating = rating;
    this.price = price;
    this.id = id;
  
  return this.render();
  }
  render() {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('productCard')
   
    const photo = document.createElement('img')
    photo.setAttribute('src',this.photo)

    const name = document.createElement("h2")
    const nameText = document.createTextNode(this.name)
    name.appendChild(nameText)

    const info = document.createElement('p')
    const infoText = document.createTextNode(this.info)
    info.append(infoText)

    const rating = document.createElement('span')
    const ratingText = document.createTextNode(this.rating)
    const ratingIcon = document.createElement('i');
    ratingIcon.classList.add("bi","bi-star-fill")
    rating.append(ratingText,ratingIcon)

    const price = document.createElement('h2')
    const priceText = document.createTextNode(this.price)
    price.append(priceText)

    const buyIcon = document.createElement('i');
    buyIcon.classList.add("bi","bi-cart-plus")
    const buyIconWrap = document.createElement("span");
    const buyIconWrapText = document.createTextNode("");
    buyIconWrap.append(buyIcon,buyIconWrapText);
    buyIconWrap.classList.add("buyIcon")

    const infoWrap = document.createElement('div')
    infoWrap.classList.add("infoWrap")

    const priceWrap = document.createElement('div')
    priceWrap.classList.add('priceWrap')
    priceWrap.append(price,buyIconWrap)
    infoWrap.append(name,info)

    const wrap = document.createElement('div')
    wrap.classList.add("wrap")
    wrap.append(infoWrap,priceWrap)

    cardDiv.append(photo,rating,wrap)


    return cardDiv
  }
}
