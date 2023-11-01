const content = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");

// so now we want to set up an event listener to our about sub-section and determine what we are clicking on within the sub-section and in this case if it is a button that has the data-(value) property that we added in our html, we would like to effect some changes.

// 1 we start by attaching an event listener to our about sub-section
// recall that the target method has the ability to show us the nested elements

about.addEventListener("click", function (evt) {
  // 1. console.log(evt.target);
  // now we want to go further and say that if what we are clicking on has the data-id property then and only then will our clicking return a result. Note that everything else will return undefined.
  console.log(evt.target.dataset.id);
  // now we go further and assign it to a variable
  const id = evt.target.dataset.id;
  // so we go further to say that if the id is true and not undefined, we want to remove the active class from all buttons and add it to the current target
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      evt.target.classList.add("active");
    });
  }
  // now we want to say that when a button is clicked, we want to remove the active class from all the articles and add it to the one being clicked which has the corresponding id value as the  button being clicked.
  content.forEach(function (content) {
    content.classList.remove("active");
    // here we want to select this class in reference to the button being clicked.  if we recall, all the articles have the content class and have an active class that makes themm visible. By creating an element and passing our previously created variable "id" which gives a value of the individual dataset embedded in each button (i.e vision, history and goal), when the button is clicked the element(with the button corresponding class data-id) will be given a class of active and then it corresponds with the button
    const element = document.getElementById(id);
    element.classList.add("active");
  });
});
