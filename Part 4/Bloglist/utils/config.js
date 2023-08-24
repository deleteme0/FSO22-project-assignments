require('dotenv').config()

//const url = 'mongodb+srv://email1calvin:calvin2003@clustertest01.2vxxtje.mongodb.net/phonebook?retryWrites=true&w=majority'

const url = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {url};