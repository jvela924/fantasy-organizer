//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const jquery = require('jquery');
const app = express ();
const db = mongoose.connection;
const Team = require('./models/teams.js')
const session = require('express-session');


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.use(session({
    secret: "chickenwafflesurprise", //some random string
    resave: false,
    saveUninitialized: false
}));

//___________________
// Routes
//___________________
//localhost:3000

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

// INDEX
app.get('/' , (req, res) => {
  Team.find({}, (error, allTeams)=> {
    res.render('index.ejs', {
      teams: allTeams,
      currentUser: req.session.currentUser
    });
  })
});

// app.get('/app', (req, res)=>{
//     res.send('the party');
// });


// CREATE
app.get('/new', (req,res) => {
  Team.find({}, (error, allTeams)=> {
    res.render('new.ejs', {
      teams: allTeams,
      currentUser: req.session.currentUser
    });
  })
})

// POST
app.post('/', (req,res) => {
  let playersArr = []
  // console.log(req.body.players);
  // console.log(req.body.players.length);
  // console.log();
  for (let i = 0; i < req.body.players.length; i+=3) {
    let obj = {name:"", team:"", position:""}
    obj.name = req.body.players[i]
    obj.team = req.body.players[i+1]
    obj.position = req.body.players[i+2]
    playersArr.push(obj)
    // console.log(obj);
    // console.log(i);
  }
  req.body.players = playersArr
  req.body.sport = req.body.sport.charAt(0).toUpperCase() + req.body.sport.slice(1)
  // req.body.username = req.session.currentUser
  console.log(req.session.currentUser.username);
  req.body.username = req.session.currentUser.username
  // console.log(req.session.currentUser);
  Team.create(req.body, (error, createdTeam) => {
    res.redirect('/')
  })
  console.log(req.body);
})

// ABOUT
app.get('/about/', (req,res) => {
  Team.find({}, (error, allTeams)=> {
    res.render('about.ejs', {
      teams: allTeams,
      currentUser: req.session.currentUser
    });
  })
});

// SHOW
app.get('/:id', (req,res) => {
  Team.findById(req.params.id, (err, foundTeam) => {
    res.render('show.ejs', {
      team: foundTeam,
    })
  })
})

// DELETE
app.delete('/:id', (req,res) => {
  Team.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/')
  })
})

// EDIT
app.get('/:id/edit', (req,res) => {
  Team.findById(req.params.id, (err, foundTeam) => {
    res.render('edit.ejs',
    {
      team:foundTeam
    }
    )
  })
})

app.put('/:id', (req,res) => {
  let playersArr = []
  for (let i = 0; i < req.body.players.length; i+=3) {
    let obj = {name:"", team:"", position:""}
    obj.name = req.body.players[i]
    obj.team = req.body.players[i+1]
    obj.position = req.body.players[i+2]
    playersArr.push(obj)
    // console.log(obj);
    // console.log(i);
  }
  req.body.players = playersArr
  Team.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/' + req.params.id)
  })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
