const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const verficationTokenSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User",
    required: true,
  },
  token :{
    type:String,
    required:true,
  },
  createdAt :{
    type : Date,
    expires : 3600,
    default:Date.now()
  }
 
});

verficationTokenSchema.pre("save" , async function (next) {
    if(this.isModified("token")){
        const hash = await bcrypt.hash(this.token,9)
        this.token = hash;
    }
    next()
})


verficationTokenSchema.methods.compareToken = async function (token){
    const result = await bcrypt.compareSync(token, this.token)
    return result;
}
const VerificationToken = mongoose.model("VerificationToken", verficationTokenSchema);
module.exports = VerificationToken;
