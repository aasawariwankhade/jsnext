import mongoose , {schema} from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
},
  { timestamps:true }
);

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;
