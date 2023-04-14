require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
const connectDb  = require("./db/connect");
const authRouter = require("./routes/authRoutes");
const studentInfoRoute = require('./routes/studentInfoRoute')
const companyRoute = require('./routes/companyRoutes')
const internshipRoute = require("./routes/internshipRoute")
const adminRoute = require("./routes/AdminRoutes");
const morgan = require("morgan") ;
const port = process.env.PORT;
const logger = require("./loggers/app-logger") ;
const serverLogStream = require("./loggers/server-logger") ;
const LOGTYPE = require("./utils/constants/app_constants") ;
const ROUTING = require("./utils/constants/app_constants") ;


app.use(cors({                          
    origin:["http://localhost:3000", "https://internschool.onrender.com"],
    method:["GET","POST","DELETE","PUT"],
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());

app.use(morgan(LOGTYPE.LOG.LOGGER.MORGAN_TYPE,{stream : serverLogStream})) ;

app.use(ROUTING.ROUTE_PATH.AUTH, authRouter);

app.use(ROUTING.ROUTE_PATH.STUDENT,studentInfoRoute);

app.use(ROUTING.ROUTE_PATH.COMPANY,companyRoute); 

app.use(ROUTING.ROUTE_PATH.INTERNSHIP,internshipRoute);

app.use(ROUTING.ROUTE_PATH.ADMIN,adminRoute);

const start = async()=>{ 
try{
   await connectDb(process.env.MONGO_URI);
   app.listen(port, () => logger.info(`Server running on port ${port}`));
}catch(err){ 
    logger.error(err + " in Starting Server") ;
}
}

start();






