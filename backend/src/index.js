const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const { v1 } = require('uuid');

const app = express();


// settings
app.set('port', process.env.PORT || 4000);

//middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/img/uploads"),
    filename: (req, file, cb, filename) => {
      cb(null, v1() + path.extname(file.originalname));
    }
  });
app.use(multer({ storage: storage }).array("image", 10));
  


//routes

app.use("/" , require('./routes/store.Routes'));
app.use("/user" , require('./routes/user.Routes'));
app.use("/product" , require('./routes/product.Routes'));
app.use("/search" , require('./routes/search.Routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), ()=> {
    console.log('server on port', app.get('port'))
})  