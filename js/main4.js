const pass = document.querySelector('#converter')
const it1 = document.querySelector('.item1')
const it2 = document.querySelector('.item2')
const btn1 = document.querySelector('.convert')
const btn2 = document.querySelector('.reset')
const btn3 = document.querySelector('.change')
const res = document.querySelector('.result')


btn1.addEventListener('click',function(){
  if(it1.innerHTML === '°C'){
    if(pass.value!==''){
      res.innerHTML = `Wynik to ${pass.value*1.8+32}`;
    }else {
      res.innerHTML = `Nie podałeś liczby!`
    }}else {
      if(pass.value!==''){
        res.innerHTML = `Wynik to ${(pass.value-32)/1.8}`;
      }else {
        res.innerHTM = `Nie podałeś liczby!`
      }
    }

})

btn2.addEventListener('click',function(){
  res.innerHTML = ``;
  pass.value = ``;
})


btn3.addEventListener('click',function(){
  if(it1.innerHTML == '°C'){
    it1.innerHTML = '°F';
    it2.innerHTML = '°C';
  }else {
    it2.innerHTML = '°F';
    it1.innerHTML = '°C';
  }

})
