// import mongoose from 'mongoose'

// const connection = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }

//   const db = await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//   });

//   connection.isConnected = db.connection[0].readyState;
// }

// export default dbConnect;

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

async function dbConnect() {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })

}

export default dbConnect;