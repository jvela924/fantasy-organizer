# Fantasy Manager

## About
Fantasy Manager is an app used to manually log your fantasy sports teams, independant of platform. For regular fantasy sports managers, it solves the issue of having to switch between two-plus apps to view all of your teams. Although their is no add/drop, trade, or lineup functionality, Fantasy Manager offers an easy to use experience for viewing your teams at a glance. 

## Approach
I started by building out the basic CRUD functionality with my seed data. I then moved on to styling the app, using the Bootstrap CSS framework to build a nav bar and a players table.

#### User Stories
* User will be able to enter their team name and add a logo.
* Users will be able to edit their teams and manually add players.
  * Players have a name, image, team, and position
* Users will be able to edit players, including images, names, teams, and positions.
  * Implement autofill if possible for teams and positions in the player model
* Users will be able to delete a player and a team
* If possible:
  * User will be able to login to their teams

## Technologies Used
#### Node.js
Node.js is an event driven, lock-free javascript runtime. It handles multiple events concurrently, and fires callbacks upon each connection.

#### Express
Express is a web framework for Node.js.

#### Mongoose
Mongoose is a schema based framework for modeling application data. It connects to MongoDb, and has built-in type-casting and validation.

#### EJS
EJS is a templating language for generating HTML markup with plain javascript. It makes connecting your HTML and data easy. It can also be used to create 'partials', which are code components that you can use on multiple pages.

## Unvolved Problems
I didn't implement signup/login functionality yet. Also, a user needs to go into the edit team page to edit a single player. I would like to implement a button above the players table that says "edit players", which brings up only the edit players option. This would be future state.

Also, I was unable to get the full nav functionality to work on show and edit pages, since they were using specific team IDs. 

## Notes
* How to implement signup/login so that each user sees a different view of their teams?
