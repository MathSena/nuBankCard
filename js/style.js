const card = document.querySelector('.container') // Pegando a classe container

card.addEventListener('mousemove', cardEffect) // Adicionando o evento cardEffect mousemove

// Será necessário pegar as coordenadas do mouseover para movimentar o cartão já que o seu centro é fixo
function cardEffect(event) {
  const cardWidth = card.offsetWidth // Pegando a largura do cartão
  const cardHeight = card.offsetHeight // Pegando a altura do cartão
  const centerX = card.offsetLeft + cardWidth / 2 // Pegando o centro na base horizontal
  const centerY = card.offsetTop + cardHeight / 2 // Pegando o centro na base vertical
  const positionX = event.clientX - centerX // Pegando a posição do mouse no eixo vertical
  const positionY = event.clientY - centerY // Pegando a posição do mouse no eixo horizontal

  const rotateX = ((+1 * 25 * positionY) / (cardHeight / 2)).toFixed(2)
  const rotateY = ((-1 * 25 * positionX) / (cardWidth / 2)).toFixed(2)

  console.log(rotateX, rotateY)

  card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}
