const ul = document.getElementById('list')
ul.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    console.log('you have click ' + e.target.innerText)
  }
}, false)
