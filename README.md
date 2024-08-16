# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Dictionary web app solution](#frontend-mentor---dictionary-web-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind-CSS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I succesfully created the feature of switching between a light and dark theme. Tailwind provides a built in dark mode utility feature that is enabled by configuring the `tailwind.config.js` file.

````js
// tailwind.config.js
module.exports = {
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
````
DarkMode being set to class, gives granuar control of where to apply the dark mode by simply adding the class `dark:` to intended elements or just adding to a root element so it applies to all children elements. For example:

````html
<main class="bg-white dark:bg-black">
  ...
</main>
````

This creates a main element with two backgrounds. The black background is applied when the user toggles the dark mode button.

I also learnt about the `prefers-color-scheme` which is a CSS media function that takes advantage of the user's prefrence and sets the theme to either ligh or dark depending on the user's device settings.

However, since tailwind does not automatically handle the prefers-color-scheme media query when you set `darkMode: 'class'`. You alternatively  use `localstorage` to access the user's theme preference.

````js
 useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
````
The above code snippet, using the useEffect hook, Checks for user's preference in local storage or it uses  the system default


### Continued development

I would like to discover and refine other methods of using localstorage to enhance user accessibility.


## Acknowledgments

Thank you to the Front-end mentor team for this project.
