const pass = document.querySelector('#password')
const inf = document.querySelector('.passinfo')

const num = /[0-9]/;
const lett = /[a-z]/i;
const spec = /[!@#$%^&*()]/;
const minVal = 10;

const checkIf = () => {
  if(pass.value.match(num) && pass.value.match(lett) && pass.value.length>=minVal && pass.value.match(spec)){
    inf.innerHTML = 'You have very good password!';
    inf.style.color = 'green';
  } else if (pass.value.match(num) && pass.value.match(lett) && pass.value.length>=minVal) {
    inf.innerHTML = 'You have good password!';
    inf.style.color = 'yellow';
  }else {
    inf.innerHTML = 'You have too weak password!';
    inf.style.color = 'red';
  }
}

const foo = () => {
  if (pass.value !== ''){
    checkIf()
  }else {
    inf.innerHTML = 'You didnt type the password ...';
    inf.style.color = '';
  }
}

pass.addEventListener('keyup',foo)
