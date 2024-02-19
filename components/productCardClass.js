export default class UserCard {
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

    const info = document.createElement('span')
    const infoText = document.createTextNode(this.info)
    info.append(infoText)

    const rating = document.createElement('span')
    const ratingText = document.createTextNode(this.rating)
    rating.append(ratingText)

    const price = document.createElement('p')
    const priceText = document.createTextNode(this.price)
    price.append(priceText)

    const buyIcon = document.createElement('i');
    buyIcon.classList.add("bi,bi-cart-plus")

    cardDiv.append(photo,name,info,rating,price,buyIcon)


    return cardDiv
  }
}
