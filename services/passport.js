const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys=require('../config/keys');

const User=mongoose.model('user');


passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'    //route to which user will be sent after granting permission on consent screen
},(accessToken,refreshToken,profile,done)=>{                        //This callback gets called when google replies with the user data.
    User.findOne({googleId:profile.id}).then((user)=>{
        console.log(user);
        if(!user){
            new User({googleId:profile.id}).save().then((user)=>{
                done(null,user);
            });
        }else{
            done(null,user);
        }
    }).catch((err)=>{
        console.log(err);
    });
}));

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
})