import exp from 'express';
import { MongoClient } from 'mongodb';
import usersApp from './APIs/RegisterApi';

const app = exp();

// Your MongoDB connection URL and database name
const mongoURL = 'mongodb://127.0.0.1/27017';
const dbName = 'sampledb';

// Create a new MongoClient instance
const mclient = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
mclient.connect()
  .then(() => {
    console.log('Db is connected');

    // Get the database and collection objects
    const dbObj = mclient.db(dbName);
    const userscollectionObj = dbObj.collection('userscollection');

    // Set the collection object on the app for later use
    app.set('usercollectionObj', userscollectionObj);

    // Start the server
    app.listen(3800, () => {
      console.log('Server is running on port 3800');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Register your API routes
app.use('/RegisterApi', usersApp);
export default app;
