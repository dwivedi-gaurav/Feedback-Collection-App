const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys=require('../config/keys');

const User=mongoose.model('user');


passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback',    //route to which user will be sent after granting permission on consent screen
    proxy:true
},async (accessToken,refreshToken,profile,done)=>{                        //This callback gets called when google replies with the user data.
    const existingUser=await User.findOne({googleId:profile.id});
    if(!existingUser){
        const newUser= await new User({googleId:profile.id}).save();
        done(null,newUser);
    }else{
        done(null,existingUser);
    }
}));

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
})