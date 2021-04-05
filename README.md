# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/coding-bootcamp-testimonials-solution-using-sass-DungPw5JD](https://www.frontendmentor.io/solutions/coding-bootcamp-testimonials-solution-using-sass-DungPw5JD)
- Live Site URL: [https://dentednerd.github.io/fm-bootcamp-testimonials/](https://dentednerd.github.io/fm-bootcamp-testimonials/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This would have been a lot easier with React, and its useState hook. I would have had a lot more room for animations. As it stands, my Javascript solution can only two entries and toggling the visibility of each.

```js
const slide = () => {
  var elements = document.getElementsByClassName('visible');
  Array.from(elements).forEach((element) => {
    Array.from(element.parentNode.childNodes).forEach((sibling) => {
      sibling.classList && sibling.classList.toggle('visible');
    });
  });
}
```

## Author

- Website - [Joey Imlay](https://joeyimlay.dev)
- Frontend Mentor - [@dentednerd](https://www.frontendmentor.io/profile/dentednerd)
- Twitter - [@dentednerd](https://www.twitter.com/dentednerd)
