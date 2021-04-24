const btn1 = document.querySelector('.sizeUp')
const btn2 = document.querySelector('.sizeDown')
const btn3 = document.querySelector('.color')
const data = document.querySelector('p')

let size = 36;
console.log(size)

const up = () => {
  size += 5;
  data.style.fontSize = size + 'px'
}

const down = () => {
  size -= 5;
  data.style.fontSize = size + 'px'
}

const color = () => {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);

  data.style.color = `rgb(${r},${g},${b})`
}

btn1.addEventListener('click',up)
btn2.addEventListener('click',down)
btn3.addEventListener('click',color)
