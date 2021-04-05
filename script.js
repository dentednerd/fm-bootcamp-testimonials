const slide = () => {
  var elements = document.getElementsByClassName('visible');
  Array.from(elements).forEach((element) => {
    Array.from(element.parentNode.childNodes).forEach((sibling) => {
      sibling.classList && sibling.classList.toggle('visible');
    });
  });
}
