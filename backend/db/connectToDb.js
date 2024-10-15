import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const connetToDb = async ()=>{

console.log(process.env.MONGO_URI)

    try {
      
		const conn = await mongoose.connect(process.env.MONGO_URI.toString());
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connetToDb;