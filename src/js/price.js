const checkbox = document.querySelector('#checkbox')
      checkbox.addEventListener('input', onClick);
const monthly = document.querySelector('.monthly');
      monthly.classList.add('is-active')
const yearly = document.querySelector('.yearly');
const price1 = document.querySelector('#price1');
const price2 = document.querySelector('#price2');
const price3 = document.querySelector('#price3');

    export default function onClick (e) {
      
        if(e.target.checked){
            price1.textContent = '$12'
            price2.textContent = '$36'
            price3.textContent = '$56'
            yearly.classList.add('is-active')
            monthly.classList.remove('is-active')
        } else {
            price1.textContent = '$19'
            price2.textContent = '$54'
            price3.textContent = '$89'
            yearly.classList.remove('is-active')
            monthly.classList.add('is-active')
        }
     }