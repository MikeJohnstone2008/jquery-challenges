/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function() {
  'use strict';
  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // $(function() {
  //   let id = "teamone-shoot"
  // $("#teamone-numshots").click()

  //VARIABLES:
  // let shots1btn = document.querySelector("#teamone-shoot");--JS way of doing it, longer than jQuery way below
  let shots1Btn = $("#teamone-shoot");
  let goals1 = $("#teamone-numhits");
  let shots1Taken = $("#teamone-numshots");
  let shots2Btn = $("#teamtwo-shoot");
  let goals2 = $("#teamtwo-numhits");
  let shots2Taken = $("#teamtwo-numshots");
  let resetCount = $("#num-resets");
  let resetBtn = $("#reset");

  //my code:
  shots1Btn.click(function() {
    if (getRandomInt(0, 100) > 50) {
      shots1Taken.html(parseInt(shots1Taken.html()) + 1); //David wrote: let score = parseInt(shots1Taken.html()) + 1;
      goals1.html(parseInt(goals1.html()) + 1);
      // $("body.div").css("background-color": "red");
    } else {
      shots1Taken.html(parseInt(shots1Taken.html()) + 1);
    }
  })
  shots2Btn.click(function() { //add an if stmt
    if (getRandomInt(0, 100) > 50) {
      shots2Taken.html(parseInt(shots2Taken.html()) + 1); //David wrote: let score = parseInt(shots1Taken.html()) + 1;
      goals2.html(parseInt(goals2.html()) + 1);
      // $("body.div").css("background-color": "blue");
    } else {
      shots2Taken.html(parseInt(shots2Taken.html()) + 1);
    }
  })
  resetBtn.click(function() {
    resetCount.html(parseInt(resetCount.html()) + 1);
    goals1.html(0);
    shots1Taken.html(0);
    goals2.html(0);
    shots2Taken.html(0);
  })
  // $("div.left").css("background-color": "white");
  // $("div.right").css("background-color": "white");


})();
