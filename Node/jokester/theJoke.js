const jokes = require("give-me-a-joke");
console.dir(jokes);
// if run from here it will tell choose one of these
//  getRandomCNJoke: [Function],
//   getCustomJoke: [Function],
//   getRandomDadJoke: [Function],
//   getRandomJokeOfTheDay: [Function]

// i will choose this

jokes.getRandomDadJoke(function (joke) {
  console.log(joke);
});
