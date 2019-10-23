import express = require('express');
import bodyParser = require("body-parser");

import {User} from '../gfc-gui/src/app/user';
import {UserRegister} from './user_register';

import {Bills} from '../gfc-gui/src/app/bills'
import {BillsRegister} from './bills_register';

var billsReg: BillsRegister = new BillsRegister();

var app = express();

var userReg: UserRegister = new UserRegister();

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

// Wishlist Section
app.get('/wishlist', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "wishlist get"}));
})

app.post('/wishlist/add', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "wishlist create"}));
})

app.put('/wishlist/edit', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "wishlist update"}));
})

// Possessions Section
app.get('/possessions', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "possessions get"}));
})

app.post('/possession', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "possessions create"}));
})

app.put('/possession', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"todo": "possessions update"}));
})

// Vault Section
app.get('/vault', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  //res.send(JSON.stringify({"todo": "bills get"}));
  res.send(JSON.stringify(billsReg.getBills()));
})

app.post('/vault/operate', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  //res.send(JSON.stringify({"todo": "bills create"}));
  var bill: Bills = <Bills> req.body;
  console.log(req.body);
  //console.log(bill);
  bill = billsReg.create(bill);
  if (bill) {
    res.send({"success": "User successfully inserted"});
  } else {
    res.send({"failure": "Failure inserting user"});
  }
})


// Bills Section
app.get('/bills', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  //res.send(JSON.stringify({"todo": "bills get"}));
  res.send(JSON.stringify(billsReg.getBills()));
})

app.post('/bill', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  //res.send(JSON.stringify({"todo": "bills create"}));
  var bill: Bills = <Bills> req.body;
  console.log(req.body);
  //console.log(bill);
  bill = billsReg.create(bill);
  if (bill) {
    res.send({"success": "User successfully inserted"});
  } else {
    res.send({"failure": "Failure inserting user"});
  }
})

app.put('/bill', function (req: express.Request, res: express.Response) {
  res.setHeader('Content-Type', 'application/json');
  var bill: Bills = <Bills> req.body;
  console.log(req.body);
  bill = billsReg.update(bill);
  if (bill) {
    res.send({"success": "Bill successfully updated"});
  } else {
    res.send({"failure": "Failure updating bill"});
  }
})

var server = app.listen(8000, function () {
  console.log('GFC Server running on port 8000.')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }