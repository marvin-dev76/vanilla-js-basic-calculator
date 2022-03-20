import './js/theme.js';
const prompt = document.querySelector('.prompt');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.equal');
const result = document.querySelector('.result');

let promptArr = [];
let uiPromptArr = [];

btns.forEach(btn => {
  let dataSign = btn.getAttribute('data-sign');
  btn.addEventListener('click', () => {
    if (!btn.id.match('delete')) {
      promptArr.push(btn.value);
      uiPromptArr.push(dataSign);
      prompt.textContent = uiPromptArr.join("");
    }
    if (btn.id.match('delete')) {
      promptArr.pop();
      uiPromptArr.pop();
      prompt.textContent = uiPromptArr.join("");
    }
    if (btn.id.match('clear')) {
      promptArr = [];
      uiPromptArr = [];
      prompt.textContent = uiPromptArr.join("");
      result.textContent = "";
    }
    console.log(promptArr);
    console.log(uiPromptArr);
  })
})

equal.addEventListener('click', () => {
  try {
    if (typeof eval(promptArr.join("")) == 'undefined') {
      return;
    }
    console.log(eval(promptArr.join("")));
    result.textContent = eval(promptArr.join(""));
  } catch (error) {
    console.log(promptArr);
    result.textContent = "Error";
  }
})
