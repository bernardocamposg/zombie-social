var passport = require("passport");
var Zombie = require("./models/zombie");

var LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
    passport.serializeUser((zombie,done)=>{
        done(null,zombie._id);
    });
    passport.deserializeUser((id,done)=>{
        Zombie.findById(id,(err,zombie)=>{
            done(err,zombie);
        });
    });
};