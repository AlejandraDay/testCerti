//npm install mongoose
const mongoose = require('mongoose')
const URI = ('mongodb+srv://adminTest:1234@cluster0.kr8im.mongodb.net/user?retryWrites=true&w=majority')

mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology :  true,
    useCreateIndex: true,
    useFindAndModify : false
}).then(db => console.log('Database Connected')
).catch(error => console.log(error))

module.exports = mongoose