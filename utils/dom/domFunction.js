export function createNewsCard(News){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let cardImg = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let cardAction = document.createElement('div');
    let deletedBtn = document.createElement('button');
    let price = document.createElement('p');

    div.setAttribute('id', News.id)
    div.classList.add('card');

    cardImg.classList.add('card-img')
    img.setAttribute('src', News.imageUrl )

    cardBody.classList.add('card-body')
    h2.textContent = News.title
    h2.classList.add('card-title')

    p.textContent = News.description
    p.classList.add('card-content')

    cardAction.classList.add('card-action')

    price.textContent = News._price + ' €'

    deletedBtn.textContent = 'Supprimer'
    deletedBtn.classList.add('card-btn-delete')

    cardImg.appendChild(img)

    cardBody.appendChild(h2)
    cardBody.appendChild(p)

    cardAction.appendChild(price)
    cardAction.appendChild(deletedBtn)

    div.appendChild(cardImg)
    div.appendChild(cardBody)
    div.appendChild(cardAction)

    return div
}
