const fasb = document.querySelector('.fa-bars')
const fast = document.querySelector('.fa-times')
const btn = document.querySelector('.burger')
const nav = document.querySelector('nav')

const hideAndShow = () => {

  nav.classList.toggle('active')
  btn.classList.toggle('active')

  if(btn.classList.contains('active')){
    fasb.classList.add('hide')
    fast.classList.remove('hide')
  }else{
    fasb.classList.remove('hide')
    fast.classList.add('hide')
  }
}

btn.addEventListener('click',hideAndShow)
