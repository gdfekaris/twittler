/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
streams.visitors = {};
streams.visitors.visitor = [];
window.users = Object.keys(streams.users);
window.visitor = Object.keys(streams.visitors); 

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  if (username === 'visitor') {
    streams.visitors.visitor.push(newTweet);
  } else {
  streams.users[username].push(newTweet);
  }
  streams.home.push(newTweet);
};

//Setting up a class for pseudoclassical refactoring
const Randomizer = function() {};

//pseudoclassical refactoring
let randomizer = new Randomizer;

//pseudoclassical refactoring
Randomizer.prototype.randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

//commented out to make room for pseudoclassical refactoring
// utility function
// var randomElement = function(array){
//   var randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// };

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

//pseudoclassical refactoring
Randomizer.prototype.randomMessage = function(){
  return [this.randomElement(opening), this.randomElement(verbs), this.randomElement(objects), this.randomElement(nouns), this.randomElement(tags)].join(' ');
};

//commented out to make room for pseudoclassical refactoring
// var randomMessage = function(){
//   return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
// };

//pseudoclassical refactoring
Randomizer.prototype.generateRandomTweet = function(){
  var tweet = {};
  tweet.user = this.randomElement(users);
  tweet.message = this.randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

//commented out to make room for pseudoclassical refactoring
// generate random tweets on a random schedule
// const generateRandomTweet = function(){
//   var tweet = {};
//   tweet.user = this.randomElement(users);
//   tweet.message = this.randomMessage();
//   tweet.created_at = new Date();
//   addTweet(tweet);
// };

for(var i = 0; i < 10; i++){
  randomizer.generateRandomTweet();//pseudoclassical refactoring
}

var scheduleNextTweet = function(){
  randomizer.generateRandomTweet();//pseudoclassical refactoring
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();