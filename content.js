// content.js

// Replace all input elements with textarea elements
setTimeout(() => {


const slider = ({pre, post, value, text}) => {
  const range = document.createElement('input');
  const preE = document.createElement('span');
  const postE = document.createElement('span');
  const wrapper = document.createElement('div');
  preE.innerText = pre;
  postE.innerText = post;
  range.setAttribute('min', 1);
  range.setAttribute('max', 5);
  range.setAttribute('step', 1);
  range.setAttribute('value', value);
  range.setAttribute('disabled', 'disabled');
  range.setAttribute('type', 'range');
  range.setAttribute('title', text);
  range.setAttribute('class', 'p2Range');
  preE.setAttribute('class', 'p2Pre');
  postE.setAttribute('class', 'p2Post');
  wrapper.setAttribute('class', 'p2Wrapper');
  wrapper.appendChild(range);
  wrapper.appendChild(preE);
  wrapper.appendChild(postE); 
  return wrapper;
}

const workBest= {pre: 'solo', post:'in a group'};
const comminicate = {pre: 'in text', post:'in voice/video'};
const recieveFeedback = {pre: 'async', post:'sync'};
const feedbackDelivery = {pre: 'use tact', post:'blunt'};
const feedback = {pre: 'on the spot', post:'within 24 hours'};
const workday = {pre: 'flex alot', post:'set your clock by me'};

const reponses = {
  'in a group': {...workBest, value:5},
  'independently': {...workBest, value:1},
  'Always text': {...comminicate, value:1},
  'Prefer text': {...comminicate, value:2},
  'Either text or video': {...comminicate, value:3},
  'Prefer voice/video': {...comminicate, value:4},
  'Always voice/video': {...comminicate, value:5},
  'Always async': {...recieveFeedback, value:1},
  'Prefer async': {...recieveFeedback, value:2},
  'Either async or sync': {...recieveFeedback, value:3},
  'Prefer sync': {...recieveFeedback, value:4},
  'Always sync': {...recieveFeedback, value:5},
  'Always with tact': {...feedbackDelivery, value:1},
  'Prefer with tact': {...feedbackDelivery, value:2},
  'Either with tact or blunt': {...feedbackDelivery, value:3},
  'Prefer blunt': {...feedbackDelivery, value:4},
  'Always blunt': {...feedbackDelivery, value:5},
  'Always on the spot': {...feedback, value:1},
  'Prefer on the spot': {...feedback, value:2},
  'Either on the spot or within 24 hours': {...feedback, value:3},
  'Prefer within 24 hours': {...feedback, value:4},
  'Always within 24 hours': {...feedback, value:5},
  'I flex my time a lot': {...workday, value:1},
  'I flex my time often': {...workday, value:2},
  'I so not flex very often': {...workday, value:4},
  'You can set your clock by me': {...workday, value:5},
}
document.querySelectorAll('a').forEach(function(input) {
  if (props = reponses[input.innerText]) {
    const wrapper = slider({...props, text:input.innerText});
    input.parentNode.replaceChild(wrapper, input);
  }
    // Copy the attributes and values from the input element
    Array.prototype.forEach.call(input.attributes, function(attr) {
      //textarea.setAttribute(attr.name, attr.value);
    });
  
    // Replace the input element with the textarea element
    // input.parentNode.replaceChild(textarea, input);
    // console.log(input.innerText)
});
},1000)