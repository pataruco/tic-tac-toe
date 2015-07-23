# Tic Tac Toe

My name is Pedro Martin.

Currently (May 2015) I am a student at London General Assembly Web Development Immersive Course.

The third week assignment was to make a functional Tic Tac Toe game on a browser.

The requirements were:

	•	Build a web application from scratch, without a starter codebase
	•	Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
	•	Separate HTML, CSS, and JavaScript files in your application
	•	Build an application to a spec that someone else gives you
	•	Build a dynamic game that allows two players to compete (bonus: compete from separate devices)
	•	Craft a readme.md file that explains your app to the world

So with that in mind I created this game.

The languages I used were:

* HTML 5
* CSS 3 (including animation)
* JavaScript
* jQuery

My approach was to make a grid of HTML `li` list elements with unique ID's, so that the user can click on a list element. In my code using jQuery I created functions that can take the value of the ID’s to populate an empty variable `var game`. This is used to store the users inputs.

On the other hand, I used another variable that stored 8 possible combinations to win the game (`var game`). Using arrays, this variable iterated through the first with the second ID’s declares if there is a winner or a draw.

The logic of game in JavaScript was a challenge for me at the beginning. I struggled during the comparison of two arrays, but I could manage with the `.some` and `.every`. On my third week in, this topic is new for me, but from the beginning I had an idea of what to do; my only problem now was HOW to do it!

Before I began to write some code, I started to think about the different approaches I could use to solve the problem, I had discussed this with some of my classmates and after their feedback I decided to go for the path I mentioned above. I created a [Trello](https://trello.com/b/f9L3Kpnr/pedro-martin-tic-tac-toe) board which I used to plan my ideas and approaches so that I could just follow the steps.

I solved the JS. I thought the CSS would be easy… but It wasn’t. In my previous experience I hadn’t had the opportunity to practice the styling, but I can now say I really enjoyed the experience.

When the teachers explained the task of Tic Tac Toe, my first thought was this will be a piece of paper from my school days, so my approach of styling was to replicate that.

I hope you enjoy it as much as I do.

## Take a look

![](http://pataruco.s3.amazonaws.com/ga/tic-tac-toe/tic-tac-toe-screen.png)