# Landing Page

dynamically create a navigation menu based on the sections of the page.

## Table of Contents

- [Project Title](#Landing-Page)

- [Table of contents](#table-of-contents)

- [Installation and Usage](#Installation-and-Usage)

- [Development](#Development)
- [License & Copyright](#License-&-Copyright)


## Installation and Usage
- Download the project as a zip file on your device.
- Unzip the file and open it.
- You can visit the code by opening it on the text editor code.



## Development
#### The Project Contains Four Files :

#### css /

- styles.css
#### js /

- app.js

####  index.html

####  README.md
##

- In the style.css, There are no changes.

- In the index.html, many changes were not made, only adding Section 4.
- In the app.js, many things have been added:
1. store object that has attributes sections and ul.
2. Building Navbar dynamically by using buildNav() IIFE function that is executed by for loop and other helping methods to create list items and insert the name of the section to it and also appending it to unordered list to make navbar.
3- by onscroll event, building a function() that is executed by for...of loop to add class 'your-active-class' to the section when the near of the viewport, Checking if the section that standing on does not take its class the value of your-active-class and then setting sections as active, and If not the section that standing on (Outside the viewport), then delete the your-active-class value from the class.
```
object.onscroll = function(){};
```
###### https://www.w3schools.com/jsref/event_onscroll.asp

- Doing variable called edge to determine which section the user selected by using getBoundingClientRect Method that returns the position of the section relative to the viewport.
```
getBoundingClientRect()
```
###### https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect



4. Working on addEventListener that will be called whenever click event is delivered to the section to scroll the section smoothly by using scrollIntoView() method.
- using scrollIntoView() method to scroll the section smoothly.
- using the preventDefault() method that cancel the event if it is cancelable.
```
document.addEventListener("click", function(evt));
```
###### https://www.w3schools.com/jsref/event_onscroll.asp

```
obj.sections.scrollIntoView({behavior: "smooth"}); 
```
###### https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView


## License & Copyright
© Udacity - Modified By Israa Gamal.