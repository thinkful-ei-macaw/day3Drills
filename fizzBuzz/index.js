'use strict';
/* eslint-disable indent*/
/*
In this challenge, you'll re-implement FizzBuzz. This time you'll
 create an event listener that listens for when a user submits a 
 form indicating how high to count. This event should cause the program
  to create the FizzBuzz sequence up to the number requested by the user.

For each element in the FizzBuzz sequence, your code should insert 
an element into the .js-results div that looks like this:
${'<div>fizz-buzz-item</div>'};

<div class="fizz-buzz-item">
  <span>1</span>
</div>

If the element's content is the word "fizz", the div with .fizz-buzz-item
 should also get the class .fizz applied. So:
if 
<div class="fizz-buzz-item fizz">
  <span>fizz</span>
</div>
If the element's content is the word "buzz" it should get the class
 ".buzz" applied:

<div class="fizz-buzz-item buzz">
  <span>buzz</span>
</div>
If its content is the word "fizzbuzz" it should get the class "fizzbuzz"
 applied:

<div class="fizz-buzz-item fizzbuzz">
  <span>fizzbuzz</span>
</div>
Your function should append the resulting HTML to the .js-results DOM
 element.
*/


$(function(){ //number-chooser is the form id. The HTML tries to access 
    // 'some server endpoint which does not exist, so we --
    $('#number-chooser').submit( event => {
        // stop the default form submission behavior
        event.preventDefault();
        // if the program has already been run, there will be old info in 
        //results section, which need to be removed before new results can
        //be added
        $(".js-results").empty(); //the .empty method removes all text and 
        //child elements
        const num = parseInt( $(event.currentTarget).find(
          'input[name="number-choice"]').val());








});