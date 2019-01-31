React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage
```
npm install
npm start
open http://localhost:3000
```

### Dependencies
* React
* React-Dom
* Webpack
* WebSockets
* Express
* UUID
* WS


### How it works
- Users can join a chatroom together
- If all users on on the same instance, they will received real time notifications via WebSockets.
- There is a tracker that displays how many current users are in the session located on the top right.
- When a user updated their name, the rest of the chatroom is then notified.

### Update user name
- Bob is the default user. If one would like to update their screen name, they can type out a new name on the bottom left, then hitting enter.
- The chatroom will be notified of the change.

![Landing Page](https://github.com/JasonJiron/chatty-app/blob/master/docs/Chatty-1.png)
![Example](https://github.com/JasonJiron/chatty-app/blob/master/docs/Chatty-2.png)



