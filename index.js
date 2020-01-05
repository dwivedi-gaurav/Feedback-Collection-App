const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const passport=require('passport');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
require('./models/User');
require('./services/passport');

const app=express();
app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`);
});