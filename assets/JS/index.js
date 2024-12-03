const hamburger = document.querySelector('.cabecalho .hamburger')
const menu = document.querySelector('.menu')
const productContainer = document.querySelector('.product-content')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
    menu.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})

const products = [
    {
        name: 'GTR R35',
        description: `
            <p>
                O Nissan GT-R é um automóvel superesportivo produzido pela Nissan, foi lançado em 2007. O GT-R é equipado com um motor V6 biturbo de 3.8 litros, que produz 570 cv de potência e 64,9 kgfm de torque. O câmbio é automatizado de dupla embreagem e seis marchas. A tração é integral. O GT-R acelera de 0 a 100 km/h em 2,7 segundos e atinge 315 km/h de velocidade máxima.
            </p>
            <p>
                O GT-R é um dos carros mais rápidos do mundo, sendo conhecido por sua eficiência em pistas de corrida. O modelo é vendido no Brasil desde 2009 e é importado oficialmente pela Nissan.
            </p>
        `,
        price: 'R$ 1.000.000,00',
        videoUrl: 'https://www.youtube.com/embed/vlDOjTaaEdA',
    },
    {
        name: 'Lamborghini Super Trofeo',
        description: `
        <p>
            O Lamborghini Huracán Super Trofeo é um carro de corrida desenvolvido pela Lamborghini Squadra Corse. O modelo é baseado no Huracán LP 620-2 Super Trofeo, que é a versão de competição do Huracán LP 610-4. O Super Trofeo é equipado com um motor V10 aspirado de 5.2 litros, que produz 620 cv de potência e 57,1 kgfm de torque. O câmbio é automatizado de dupla embreagem e seis marchas. A tração é traseira.
        </p>
        <p>
            O Super Trofeo é um dos carros de corrida mais rápidos do mundo, sendo utilizado em campeonatos monomarca da Lamborghini. O modelo é vendido apenas para equipes de competição e não é homologado para uso em vias públicas.
        </p>
    `,
        price: 'R$ 1.000.000,00',
        videoUrl: 'https://www.youtube.com/embed/YAWt-gktZqM',
    },
]

function renderProducts(products, message = 'Nenhum veículo cadastrado') {
    if (products.length === 0) {
        productContainer.innerHTML = `<p class="no-products">${message}</p>`
        return
    }

    products.forEach((product) => {
        const article = document.createElement('article')
        article.classList.add('card')

        article.innerHTML = `
            <div class="card-content">
                <div class="name">${product.name}</div>
                <div class="description">${product.description}</div>
                <div class="price"><span>Preço: ${product.price}</span></div>
            </div>
            <div class="card-video">
                <h1>Vídeo de apresentação</h1>
                <div class="video">
                    <iframe
                        width="560"
                        height="315"
                        src="${product.videoUrl}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        `

        productContainer.appendChild(article)
    })
}

renderProducts(products)

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchTerm = searchInput.value.toLowerCase().trim()
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    )
    productContainer.innerHTML = ''
    renderProducts(
        filteredProducts,
        products.length === 0
            ? 'Nenhum veículo cadastrado'
            : `Nenhum veículo encontrado com o termo "${searchTerm}"`
    )
})
