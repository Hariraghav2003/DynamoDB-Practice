const { ObjectId } = require("bson");
const dynamoose = require("../config/Dynamodb");

const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: () => new ObjectId().toHexString(),
  },
  name: String,
  email: String,
});

const User = dynamoose.model("User", userSchema);

module.exports = User;
