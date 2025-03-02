const photos = document.querySelectorAll('img')
const tugmalar = document.querySelectorAll('.tugma')

const next = document.querySelector('.right')
const prev = document.querySelector('.left')

let count = 0

function hideContent () {
    photos.forEach(item  => {
          item.classList.add('hide')
     })
}

hideContent()

function showContent (index=null) {
     hideContent()
     photos[index].classList.remove('hide')
}
showContent(count)

next.addEventListener('click' , () => {
     count=(count+1) % photos.length
     showContent(count)
})
prev.addEventListener('click' , () => {
     if (count===0){
          count=photos.length-1
     }
     else {
          count=count-1
     }
     showContent(count)
})

tugmalar.forEach((tugma, count) => {
     tugma.addEventListener('click', () => {
       showContent(count)
       tugmalar.forEach(btn => {
           if (btn === tugma) {
               btn.style.backgroundColor = 'red'
           } else {
               btn.style.backgroundColor = ''
           }
       })
     })
})