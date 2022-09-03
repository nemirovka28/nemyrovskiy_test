const refs = {
    yearly: document.querySelector('.yearly'),
    price1: document.querySelector('#price1'),
    price2: document.querySelector('#price2'),
    price3: document.querySelector('#price3'),
    monthly: document.querySelector('.monthly'),
    checkbox: document.querySelector('#checkbox')
  };

  refs.checkbox.addEventListener('input', onClick);

  refs.monthly.classList.add('is-active')
    
    export default function onClick (e) {
      
        if(e.target.checked){
            refs.price1.textContent = '$12'
            refs.price2.textContent = '$36'
            refs.price3.textContent = '$56'
            refs.yearly.classList.add('is-active')
            refs.monthly.classList.remove('is-active')
        } else {
            refs.price1.textContent = '$19'
            refs.price2.textContent = '$54'
            refs.price3.textContent = '$89'
            refs.yearly.classList.remove('is-active')
            refs.monthly.classList.add('is-active')
        }
     }