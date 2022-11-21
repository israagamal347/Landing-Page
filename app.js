

/**
 * Define Global Variables
 * 
*/
const obj = {
    //select all sections of the page.
    sections: document.getElementsByTagName('section'),
    // select ul by id.
    unorderedList: document.getElementById('navbar__list'),
};




/**
 * End Global Variables
*/


// IIFE (Immediately Invoked Function Expression).
function buildNav() {
    //We need a loop to repeat adding each section of the sections
    for (let section = 0; section < obj.sections.length; section++) {
        /**
         * Logic:
         * In order to add the section in the navbar
         * First, we need the name of the section, and this will be done through the data-nav
         * Secondly, we need to link this section with what distinguishes it, which is the ID.
         */

        nameOfSection = obj.sections[section].getAttribute('data-nav');
        linkOfSection = obj.sections[section].getAttribute('id');
        // Now we will create the li element.
        li = document.createElement('li');
        // We will add HTML code to create its basic structure, so we will use innerHTML, and we will write the code inside `` backticks.
        // We will use (menu__link) class to take its properties, the link will be the value of linkOfSection (ID), and the name will take its value from nameOfSection (data-nav).

        li.insertAdjacentHTML('beforeend', `<a class="menu__link" href="#${linkOfSection}">${nameOfSection} </a>`);
        // first argument 'beforeend' is the location of HTML.
        /**
         * second argument is text of HTML.
        * If the code was on an html page, it would be like that:
        * <a class="menu__link" href="#(value of id)">(value of data-nav)</a>
        * <a class="menu__link" href="#section1">Section 1</a>
        * <a class="menu__link" href="#section2">Section 2</a>
        * and so on...
        */

        // Now we will add the li inside the ul.
        obj.unorderedList.appendChild(li);
    }
} (
    // call buildNav function to start.
    buildNav());



window.onscroll = function (evt) {
    for (section of obj.sections) {
        // To find out the section we are standing on now, we use getBoundingClientRect() method.
        let edge = section.getBoundingClientRect().top;
        // check if the section contain class='your-active-class'.
        let activeClass = section.classList.contains('your-active-class');
        function active(className) {
            if (className === 'your-active-class')
                return section.classList.add(className);
        };

        function notActive(className) {
            if (className === 'your-active-class')
                return section.classList.remove(className);
        };

        if (edge >= 0) {

            // Check if the section you are standing on does not take its class the value of your-active-class.
            if (!activeClass) {
                // Set class of the section as active.
                active('your-active-class');
              section.classList.add('active_now');
              // document.querySelector(`[href="#${linkOfSection}"]`).classList.add('active_now');
              document.querySelector('li').classList.add('active_now');
            }
        }
        else {
            // If not the section you are standing on (Outside the viewport), delete your-active-class value from class.
            notActive('your-active-class');
            //document.querySelector(`[href="#${linkOfSection}"]`).classList.remove('active_now');
            document.querySelector('li').classList.remove('active_now');
        }
    }
};

// Scroll to section on link click.
obj.unorderedList.addEventListener('click', function scroll(evt) {
    if (evt.target.dataset.nav) {
        // to scroll to the section smoothly.
        document.getElementById(`${evt.target.dataset.nav}`).scrollIntoView({ behavior: 'smooth' });

        // preventDefault() that prevent the default action from happening.
        evt.preventDefault();
    }
}
);

