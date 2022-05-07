const formone = document.querySelector('.formContainer')
const button = document.querySelector('button')
const main = document.querySelector('.mainContainer')
const remove = document.querySelector('.remove')
const removeTwo = document.querySelector('.remove2')
const removeThree = document.querySelector('.remove3')

main.addEventListener('mouseleave', () => {
    formone.classList.add('animate__animated')
    formone.classList.add('animate__swing')
})

main.addEventListener('animationend', () => {
    main.addEventListener('mouseleave', () => {
        formone.classList.add('animate__animated')
        formone.classList.add('animate__hinge')
        remove.classList.add('animate__fadeOut')
        remove.classList.add('animate__animated')
        removeTwo.classList.add('animate__fadeOut')
        removeTwo.classList.add('animate__animated')
        removeThree.classList.add('animate__fadeOut')
        removeThree.classList.add('animate__animated')
        button.setAttribute('form', 'form2')
        button.textContent = 'give me your personally identifying information'
    })
  });


// if mouse leaves container before clicking submit then animate