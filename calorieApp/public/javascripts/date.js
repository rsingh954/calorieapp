const date = document.querySelector('.date')
date.onclick(('click'), (e)=>{
  console.log(e.target)
})
console.log(date.textContent)