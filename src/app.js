var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
var passport = require("passport");
const { Sequelize } = require('sequelize');
const {DataTypes } = require('sequelize');

 var LocalStrategy = require("passport-local");
 var passportLocalMongoose = require("passport-local-mongoose");
 //var User = require("./models/user");
var pool=require('./conf/db.config');
var tutorialRoutes=require('../routes/tutorial.routes');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
postgreslink="postgres://dev:12345@localhost:5432/moviesdb";
const sequelize = new Sequelize(postgreslink);
/* app.use(passport.initialize());
app.use(passport.session());
  
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); */

// Handling user signup
/* app.post("/register", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(
            req, res, function () {
            res.render("secret");
        });
    });
}); */
/* async function dbcon()
{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfull.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
dbcon();
const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING(1124)
    },
    rate:{
       type: DataTypes.FLOAT,
       validate: {
        max:10,
        min:1
      }

    },
    year:{
        type: DataTypes.SMALLINT


    },
    genre:{
        type:DataTypes.STRING,
        validate:{
            isIn: [['Action', 'Comedy','Drama','Horror','Adventure','Animation']],
        }
    }
  }, {
    // Other model options go here
}), User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    username:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true,
        validate:{
            notEmpty: true
        }
    },
    hashedPassword: {
        type: DataTypes.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
    }

});

Movie.belongsTo(User, {foreignKey: 'fk_User'});

(async ()=>{
   await Movie.sync();
   await User.sync();
})();

app.get('/',async(req,res)=>{
    const movies = await Movie.findAll().then(
        (data)=>{
            res.send(data);
        }
    )
});

app.post('/',async(req, res)=>{
   await Movie.create({
       title : "movie 1",
       description: "something something",
       genre : "Action",
       year: 2000,
       rate: 9
   }).then((data)=>{
       res.send(data);
   }).catch(()=>{

   });
});
 */
app.use('/api/tutorials', tutorialRoutes);

function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}

app.use(notFound);

module.exports = app;
