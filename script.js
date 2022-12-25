const products = {
    apple: 2,
    banana: 5,
    orange: 1,
    name: 'fruits',
    
}
// console.log(products);

const iphone = {
    cost: 1000,
    amount: 10,
    sold: 3,
    name: 'Iphone 14',
    seller: 'Istore'
}
// console.log(iphone);


function mult2(obj) {
    for(let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] = obj[key] * 2

        }

    }
    // console.log(obj);

}

mult2(products)
mult2(iphone)


// ЗАПРОСЫ
const container = document.querySelector('#container')
const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

getRes('user.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            const block = document.createElement('div')
            const title = data[key].title
            const desc = data[key].desc
            const users = data[key].users


            block.innerHTML = `<div class="block">
                <h2>Название команды: ${title}</h2>
                <p>Направление: ${desc}</p>
                <h4>Количество пользователей: ${users}</h4>
            </div>`
            container.append(block)
        }
    })