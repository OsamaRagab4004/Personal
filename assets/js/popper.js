
//edit the width for the smallest screen, that you made.
if(window.innerWidth > 800 ) {


// Popper For Home
/****************************** */
const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

const popperInstance = Popper.createPopper(button, tooltip, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
          offset: [0, 10],
         
      },
      

    },
  ],
});





function show() {
  // Make the tooltip visible
  tooltip.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance.update();
}

function hide() {
  // Hide the tooltip
  tooltip.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});

/****************************** */




/****************************** */


/*Popper For Projects*/ 
/****************************** */



const button2 = document.querySelector('#button2');
const tooltip2 = document.querySelector('#tooltip2');

const popperInstance2 = Popper.createPopper(button2, tooltip2, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
          offset: [0, 10],
         
      },
      

    },
  ],
});





function show2() {
  // Make the tooltip visible
  tooltip2.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance2.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance2.update();
}

function hide2() {
  // Hide the tooltip
  tooltip2.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance2.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents2 = ['mouseenter', 'focus'];
const hideEvents2 = ['mouseleave', 'blur'];

showEvents2.forEach((event) => {
  button2.addEventListener(event, show2);
});

hideEvents2.forEach((event) => {
  button2.addEventListener(event, hide2);
});

/****************************** */



/*Profile*/ 

const button3 = document.querySelector('#button3');
const tooltip3 = document.querySelector('#tooltip3');

const popperInstance3 = Popper.createPopper(button3, tooltip3, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
          offset: [0, 10],
         
      },
      

    },
  ],
});





function show3() {
  // Make the tooltip visible
  tooltip3.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance3.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance3.update();
}

function hide3() {
  // Hide the tooltip
  tooltip3.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance3.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents3 = ['mouseenter', 'focus'];
const hideEvents3 = ['mouseleave', 'blur'];

showEvents3.forEach((event) => {
  button3.addEventListener(event, show3);
});

hideEvents3.forEach((event) => {
  button3.addEventListener(event, hide3);
});


/********************************************************** */


/*CV*/


const button4 = document.querySelector('#button4');
const tooltip4 = document.querySelector('#tooltip4');

const popperInstance4 = Popper.createPopper(button4, tooltip4, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
          offset: [0, 10],
         
      },
      

    },
  ],
});





function show4() {
  // Make the tooltip visible
  tooltip4.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance4.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance4.update();
}

function hide4() {
  // Hide the tooltip
  tooltip4.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance4.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents4 = ['mouseenter', 'focus'];
const hideEvents4 = ['mouseleave', 'blur'];

showEvents4.forEach((event) => {
  button4.addEventListener(event, show4);
});

hideEvents4.forEach((event) => {
  button4.addEventListener(event, hide4);
});
/*********************************************** */


/*Brain : Future Plans*/

const button5 = document.querySelector('#button5');
const tooltip5 = document.querySelector('#tooltip5');

const popperInstance5 = Popper.createPopper(button5, tooltip5, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
          offset: [0, 10],
         
      },
      

    },
  ],
});





function show5() {
  // Make the tooltip visible
  tooltip5.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance5.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance5.update();
}

function hide5() {
  // Hide the tooltip
  tooltip5.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance5.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents5 = ['mouseenter', 'focus'];
const hideEvents5 = ['mouseleave', 'blur'];

showEvents5.forEach((event) => {
  button5.addEventListener(event, show5);
});

hideEvents5.forEach((event) => {
  button5.addEventListener(event, hide5);
});


/********************************************************************* */


/*Contact ME*/



const button6 = document.querySelector('#button6');
const tooltip6 = document.querySelector('#tooltip6');

const popperInstance6 = Popper.createPopper(button6, tooltip6, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
          offset: [0, 10],
         
      },
      

    },
  ],
});





function show6() {
  // Make the tooltip visible
  tooltip6.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance6.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance6.update();
}

function hide6() {
  // Hide the tooltip
  tooltip6.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance6.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents6 = ['mouseenter', 'focus'];
const hideEvents6 = ['mouseleave', 'blur'];

showEvents6.forEach((event) => {
  button6.addEventListener(event, show6);
});

hideEvents6.forEach((event) => {
  button6.addEventListener(event, hide6);
});
/*********************************************** */




}