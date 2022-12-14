// content.js

// Replace all input elements with textarea elements
setTimeout(() => {


const slider = ({pre, post, value, text}) => {
  const range = document.createElement('input');
  const preE = document.createElement('span');
  const postE = document.createElement('span');
  const midE = document.createElement('span');
  const wrapper = document.createElement('div');
  preE.innerText = pre;
  postE.innerText = post;
  if (value >1 && value < 5) {
  midE.innerText = text;
  }
  const midClasses = {
    1: '',
    2: 'p2MidLeft',
    3: 'p2MidCenter',
    4: 'p2MidRight',
    5: ''
  }
  range.setAttribute('min', 1);
  range.setAttribute('max', 5);
  range.setAttribute('step', 1);
  range.setAttribute('value', value);
  range.setAttribute('disabled', 'disabled');
  range.setAttribute('type', 'range');
  range.setAttribute('title', text);
  range.setAttribute('class', 'p2Range');
  preE.setAttribute('class', 'p2Pre ' + (value!==1 ? 'p2PreNotSelected' : ''));
  postE.setAttribute('class', 'p2Post ' + (value!==5 ? 'p2PreNotSelected' : ''));
  midE.setAttribute('class', 'p2Mid ' + midClasses[value]);
  wrapper.setAttribute('class', 'p2Wrapper');
  wrapper.appendChild(range);
  wrapper.appendChild(preE);
  wrapper.appendChild(midE);
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
  'in a group.': {...workBest, value:5},
  'independently.': {...workBest, value:1},
  'always text.': {...comminicate, value:1},
  'prefer text.': {...comminicate, value:2},
  'either text or video.': {...comminicate, value:3},
  'prefer voice/video.': {...comminicate, value:4},
  'always voice/video.': {...comminicate, value:5},
  'always async.': {...recieveFeedback, value:1},
  'prefer async.': {...recieveFeedback, value:2},
  'either async or sync.': {...recieveFeedback, value:3},
  'prefer sync.': {...recieveFeedback, value:4},
  'always sync.': {...recieveFeedback, value:5},
  'always with tact.': {...feedbackDelivery, value:1},
  'prefer with tact.': {...feedbackDelivery, value:2},
  'either with tact or blunt.': {...feedbackDelivery, value:3},
  'prefer blunt.': {...feedbackDelivery, value:4},
  'always blunt.': {...feedbackDelivery, value:5},
  'always on the spot.': {...feedback, value:1},
  'prefer on the spot.': {...feedback, value:2},
  'either on the spot or within 24 hours.': {...feedback, value:3},
  'prefer within 24 hours.': {...feedback, value:4},
  'always within 24 hours.': {...feedback, value:5},
  'I flex my time a lot.': {...workday, value:1},
  'I flex my time often.': {...workday, value:2},
  'I so not flex very often.': {...workday, value:4},
  'You can set your clock by me.': {...workday, value:5},
}
document.querySelectorAll('.profile-section__field').forEach((e) => {
  if (e.textContent.match(/(My super|My blind|I want to do)/)) {
    e.setAttribute('style', 'width:50%');
  }
})
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