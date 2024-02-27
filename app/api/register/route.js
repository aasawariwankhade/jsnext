import { connectMongoDB } from '../../../lib/mongodb';
import User from '@/models/user';
import {NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req){  
  try{
  // destrcuture the data 
  const{name,email,password} = await req.json();
  const hashedPassword = await bcrypt.hash(password,10);
  //console.log("Name:",name);
  await connectMongoDB();
  await User.create({name,email,password:hashedPassword}); // store data in DB

  return NextResponse.json({message: "user registered"},{status:201});
  }catch(error){
    return NextResponse.json({message: "error occurred while registering"},
     {status:500});
  }
}