// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
 *
 *
 */
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions*/
// function takes main trials as input
function create_practice_trials(b) {

  var old_trials = b;

  var trials = [];
  var i = 0;

  for (var k = 0; k < old_trials.length; k++) {
    trials[i] = {
      option1: "false",
      option2: "true",
      question: old_trials[k].statements,
      type: old_trials[k].type,
      condition: old_trials[k].condition,
      vignette: old_trials[k].vignette,
      expectedAnswer: old_trials[k].expectedAnswer
    };
    i += 1;
  }
  return (trials);


};


function create_main_trials(b) {

  var old_main_trials = b;

  var trials = [];
  var i = 0;

  for (var k = 0; k < old_main_trials.length; k++) {
    if ((old_main_trials[k].condition == 0) || (old_main_trials[k].condition == 6) || (old_main_trials[k].condition == 9)) {

      trials[i] = {
        option1: "false",
        option2: "true",
        question: old_main_trials[k].sentence,
        type: old_main_trials[k].type,
        condition: old_main_trials[k].condition,
        vignette: old_main_trials[k].vignette,
        expectedAnswer: old_main_trials[k].expectedAnswer
      };
      i += 1;
    }
  }
  return (trials);

};

//|| "6" || "9" || "none"


/* For generating random participant IDs */
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function (dec) {
  return ("0" + dec.toString(16))
    .substr(-2);
};
// generateId :: Integer -> String
const generateID = function (len) {
  let arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, this.dec2hex)
    .join("");
};
// Declare your helper functions here



/* Hooks
 *
 *
 */

// Error feedback if participants exceeds the time for responding
const time_limit = function (data, next) {
  if (typeof window.timeout === 'undefined') {
    window.timeout = [];
  }
  // Add timeouts to the timeoutarray
  // Reminds the participant to respond after 5 seconds
  window.timeout.push(setTimeout(function () {
    $('#reminder')
      .text('Please answer more quickly!');
  }, 5000));
  next();
};

// compares the chosen answer to the value of `option1`
check_response = function (data, next) {
  $('input[name=answer]')
    .on('change', function (e) {
      if (e.target.value === data.correct) {
        alert('Your answer is correct! Yey!');
      } else {
        alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
      }
      next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
 *
 *
 */
