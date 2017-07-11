const kittens = document.querySelector('#kitten_button')
const tokyo = document.querySelector('#tokyo_button')
const metal = document.querySelector('#metal_button')

const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')












kittens.addEventListener("click", function (){
  body.id = "kittens"
  h1.textContent = "Kittens"
  p.textContent = "A kitten, also known as a kitty or kitty cat, is a juvenile cat. After being born, kittens are totally dependent on their mother for survival and they do not normally open their eyes until after seven to ten days."
})

tokyo.addEventListener("click", function(){
  body.id = "tokyo"
  h1.textContent = "Neo Tokyo"
  p.textContent = "The Neo Tokyo aesthetic has permeated some of the biggest films and novels of the last 40 years, including Blade Runner and Akira."
})

metal.addEventListener("click", function(){
  body.id = "metal"
  h1.textContent = "Heavy Metal"
  p.textContent = "Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States."
})
