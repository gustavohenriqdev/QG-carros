let listCars = [
    {
        'nome':'Ford Mustang',
        'img':'img/05-22-categorias.jpg',
        'desc':'O Ford Mustang é um carro esportivo icônico, lançado em 1964, conhecido por seu design elegante e musculoso. Oferece diversas opções de motores potentes, incluindo o clássico V8, proporcionando desempenho emocionante. Com linhas aerodinâmicas distintivas e uma grade inconfundível, o Mustang é um símbolo da cultura automotiva americana, destacando-se pela combinação única de estilo e potência.'
    },
    {
        'nome':'Ferrari F12',
        'img':'img/F12 TRS.jpeg',
        'desc':'A Ferrari F12 Berlinetta é um carro esportivo de alto desempenho que combina elegância, potência e tecnologia de ponta. Lançada em 2012, essa obra-prima italiana exibe linhas aerodinâmicas cativantes e uma silhueta elegante que reflete sua natureza esportiva.i'
    },
    {
        'nome':'Lambo Aventador',
        'img':'img/L.webp ',
        'desc':'O Lamborghini Aventador é um supercarro de alto desempenho que combina design impressionante, tecnologia avançada e potência excepcional. Fabricado pela famosa fabricante italiana de automóveis de luxo, a Lamborghini, o Aventador é conhecido por suas linhas aerodinâmicas e agressivas, características que refletem seu desempenho impressionante.',
    },
    {
        'nome':'Mustang GT2024',
        'img':'img/Mustang-GT2024.jpg',
        'desc':'O Ford Mustang GT é conhecido por ser um carro esportivo icônico, com um design atlético e desempenho potente. Geralmente, possui um motor V8 de alta potência que oferece uma experiência de condução emocionante. O design é marcado por linhas aerodinâmicas e um visual agressivo, mantendo a essência clássica do Mustang.',
    },
    {
        'nome':'Mustang 2020',
        'img':'img/Mustang.webp',
        'desc':'O Ford Mustang de 2020 é um ícone do automobilismo, mantendo sua reputação como um carro esportivo emocionante e potente. Este modelo incorpora o design clássico e agressivo que tornou o Mustang reconhecível em todo o mundo. Disponível em várias versões, desde o EcoBoost até o poderoso GT, o Mustang 2020 oferece uma variedade de opções para atender às preferências dos entusiastas de carros.',
    },
    {
        'nome':'Ferrari SF90',
        'img':'img/The ferrari SF90 XX.jpeg',
        'desc':'A Ferrari SF90 é um supercarro de alta performance que incorpora o que há de mais avançado em tecnologia e design na linha da Ferrari. Lançado em 2019, o SF90 é um híbrido plug-in, representando um marco significativo para a marca italiana, pois é o primeiro modelo de produção em série a contar com um sistema de propulsão híbrido',
    },
]

listCars.map((listCars, posicao) => {
    let cardCarros = document.getElementById('cards');
    cardCarros.innerHTML += `
            <section class="col-md-4">
                <div class="card" id="cards">
                    <img src="${listCars.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${listCars.nome}</h5>
                        <a href="#" class="btn btn-primary" onclick="zoomImg(${posicao})" >View</a>
                    </div>
                </div>
            </section>`

    
})
function zoomImg(posicao) {

    let carroSelecionado = listCars[posicao];
    document.getElementById('nomeCarro').innerHTML = carroSelecionado.nome;
    document.getElementById('descricaoCarro').innerHTML = carroSelecionado.desc;
    document.getElementById('imgModal').src = carroSelecionado.img;

    new bootstrap.Modal("#zoomImg").show();

}

