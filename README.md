# My Application

## Dependencies

### Server
  * node.js
  * loopback.js
  * mongodb

### Client

  * react 16.4.0
  * react-dom
  * react-router-dom
  * redux
  * react-redux
  * axios
  * semantic-ui-react

## Getting Started

1. Inside of the **root** directory run `npm install`, to *install server dependencies*
2. Inside of the **client** directory run `npm install`, to *install client side dependencies*
3. Inside of the of the **root** directory run `node bin/automigrate.js` to setup the database and run migrations
4. Inside of the of the **root** directory run `node .`, to start the server (running on `PORT:3000`)
5. **Switch to the client** directory and run `npm start` to start the react server (running on `PORT:3002`)
6. **Visit http://localhost:3002/**