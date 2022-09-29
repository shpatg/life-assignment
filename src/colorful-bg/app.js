window.addEventListener('DOMContentLoaded', () => {
    const colors = ['blue', 'red', 'green', 'yellow', 'black', 'brown', 'pink']
    const body = document.querySelector('body')
    colors.forEach((color, i)=> {
      setInterval(() => {
        body.style.background = color
      }, (i + 1) * 500)
    });
  })