/* require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
}); */
module.exports ={
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "logging": false,
    //"logging" : console.log,
    
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true
    }
  },
  "test":{
    "dialect": "sqlite",
    "storage": "./__tests__/database.sqlite",
    "logging": false,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true
    }
  }

}