export function createNewsCard(News){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let cardImg = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let cardAction = document.createElement('div');
    let price = document.createElement('p');
    let deleteContainer = document.createElement('div');
    let deleteBtn = document.createElement('button');

    div.setAttribute('id', 'card-' + News.id)
    div.classList.add('card');

    cardImg.classList.add('card-img')
    img.setAttribute('src', News.imageUrl )

    cardBody.classList.add('card-body')
    h2.textContent = News.title
    h2.classList.add('card-title')

    p.textContent = News.description
    p.classList.add('card-description')

    cardAction.classList.add('card-action')

    price.textContent = News._price + ' €'
    price.classList.add('card-price')

    deleteContainer.classList.add('delete-layout')
    deleteBtn.textContent = 'X'
    deleteBtn.classList.add('delete-btn')

    cardImg.appendChild(img)

    deleteContainer.appendChild(deleteBtn)

    cardBody.appendChild(h2)
    cardBody.appendChild(p)
    cardBody.appendChild(deleteContainer)
    cardBody.appendChild(price)



    div.appendChild(cardImg)
    div.appendChild(cardBody)
    div.appendChild(cardAction)

    return div
}
