import mongoose from 'mongoose';

export const connectMongoDB = async ()=>{
  try{
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("conneted to mongodb");
    }catch(error){
      console.log("error coonecting to mongodb");
   }
};