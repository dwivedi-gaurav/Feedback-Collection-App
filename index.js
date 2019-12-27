const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const passport=require('passport');
const cookieSession=require('cookie-session');
require('./models/User');
require('./services/passport');

const app=express();
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]    //here we can provide multiple cookies and cookie-session will randomly pick on to encrypt our cookie
    })
)
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true });

require('./routes/authRoutes')(app);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`);
});