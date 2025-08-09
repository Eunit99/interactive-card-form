# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Screenshot](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript for form validation and real-time updates
- Space Grotesk font from Google Fonts

### What I learned

Working on this project helped me practice several key concepts:

**Real-time form updates**: I implemented live updates to the card display as users type, creating a more interactive experience:

```js
function NameUpdate(elem) {
  elem.classList.remove("error");
  document.querySelector(".card-name").innerHTML = elem.value;
}

function NumberUpdate(elem) {
  let n = cc_format(elem.value);
  elem.classList.remove("error");
  document.querySelector(".card-number").innerHTML = elem.value = n;
}
```

**Credit card number formatting**: I created a function to automatically format card numbers with spaces every 4 digits:

```js
function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}
```

**CSS Grid for complex layouts**: I used CSS Grid to create the responsive card layout and form structure:

```css
main {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.input-group {
  display: grid;
  padding-top: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}
```

**Form validation with visual feedback**: I implemented client-side validation that provides immediate visual feedback to users:

```css
input.error {
  border: 1px solid var(--red);
}

input.error + .error-msg {
  display: block;
  font-weight: 500;
  font-size: 0.7rem;
  color: var(--red);
}
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced form validation**: Implementing more sophisticated validation rules for credit card numbers (Luhn algorithm, card type detection)
- **Accessibility improvements**: Adding better ARIA labels, keyboard navigation, and screen reader support
- **Animation and transitions**: Adding smooth transitions between form states and card updates
- **Error handling**: Implementing more comprehensive error messages and recovery mechanisms

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand CSS Grid layout for the responsive design
- [FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData) - Essential for handling form submission and validation
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - Great for maintaining consistent colors throughout the project

## Author

- Website - [Eunit](https://eunit.me)
- Frontend Mentor - [@eunit99](https://www.frontendmentor.io/profile/eunit99)
- Twitter - [@eunit99](https://www.twitter.com/eunit99)

## Acknowledgments

Thanks to the Frontend Mentor community for providing this challenging and practical project. The real-time card updates feature was particularly engaging to implement and really showcases the power of vanilla JavaScript for interactive web experiences.
