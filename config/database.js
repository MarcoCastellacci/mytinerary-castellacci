const mongoose = require('mongoose');

mongoose.connect(process.env.MYTINERARY,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to Database'))
.catch(err => console.log(err));
