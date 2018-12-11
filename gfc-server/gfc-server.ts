import express = require('express');
import bodyParser = require("body-parser");

import {User} from '../gfc-gui/src/app/user';
import {UserRegister} from './user_register';

import {Possession} from '../gfc-gui/src/app/possession'
import {PossessionsRegister} from './possessions_register';

var app = express();

var userReg: UserRegister = new UserRegister();
var possessionsReg: PossessionsRegister = new PossessionsRegister();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

// User Section

app.get('/users', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(userReg.getUsers()));
})

app.post('/user', function (req: express.Request, res: express.Response) {
  var user: User = <User> req.body;
  console.log(req.body);
  console.log(user);
  user = userReg.create(user);
  if (user) {
    res.send({"success": "User successfully inserted"});
  } else {
    res.send({"failure": "Failure inserting user"});
  }
})

app.put('/user', function (req: express.Request, res: express.Response) {
  var user: User = <User> req.body;
  user = userReg.update(user);
  if (user) {
    res.send({"success": "User successfully updated"});
  } else {
    res.send({"failure": "Failure updating user"});
  }
})

// Possessions Section
app.get('/possessions', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(possessionsReg.getPossessions()));
  console.log("Received GET on /possessions. Ok.");
})

app.post('/possession', function (req: express.Request, res: express.Response) {
  var item: Possession = <Possession> req.body;
  item = possessionsReg.create(item);
  res.setHeader('Content-Type', 'application/json');
  if (item){
    res.send({"success": "Item successfully added"});
  } else {
    res.send({"failure": "Failed to add item"})
  }
  console.log("Received POST on /possession. Ok.");
})

app.put('/possession', function (req: express.Request, res: express.Response) {
  var item: Possession = <Possession> req.body;
  item = possessionsReg.update(item);
  res.setHeader('Content-Type', 'application/json');
  if (item) {
    res.send({"success": "Item successfully updated"});
  } else {
    res.send({"failure": "Failure updating item"});
  }
  console.log("Received PUT on /possession. Ok.");

})

// Vault Section
app.get('/vault', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log("Received GET on /vault. Not Yet Implemented."); 
})

app.post('/vault/deposit', function (req: express.Request, res: express.Response) {
  console.log("Received POST on /vault/deposit. Not Yet Implemented."); 
})

app.post('/vault/operate', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "vault operation"}));
})


// Bills Section
app.get('/bills', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "bills get"}));
})

app.post('/bill', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "bills create"}));
})

app.put('/bill', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "bills update"}));
})

var server = app.listen(8000, function () {
  console.log('GFC Server running on port 8000.')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }