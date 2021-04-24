const arr = document.querySelector('.arrow')
const icon = document.querySelector('.fas')
const img = document.querySelector('.item1')

arr.addEventListener('click', function(){
  img.classList.toggle('hide')

  if(img.classList.contains('hide')){
    arr.style.transform = 'rotate(180deg)';
  }else {
    arr.style.transform = 'rotate(0deg)';
  }
})
