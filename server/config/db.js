const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://saakethtallam:SN6ww1GDdd0P0xyp@cluster0.mla517z.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

module.exports = client;