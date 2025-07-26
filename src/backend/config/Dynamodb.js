require("dotenv").config();
const dynamoose = require("dynamoose");

const isOffline = process.env.IS_OFFLINE === "true";

// ✅ Use a custom client to avoid AWS credential errors
if (isOffline) {
  const { DynamoDB } = require("@aws-sdk/client-dynamodb");

  const ddb = new DynamoDB({
    endpoint: "http://localhost:8000",
    region: "local",
    credentials: {
      accessKeyId: "fakeMyKeyId", // Required by SDK, but ignored by DynamoDB Local
      secretAccessKey: "fakeSecretKey",
    },
  });

  dynamoose.aws.ddb.set(ddb); // Fully override client
  console.log("✅ Connected to DynamoDB Local (forced, no credentials)");
} else {
  dynamoose.aws.sdk.config.update({
    region: process.env.AWS_REGION || "us-west-2",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  console.log("✅ Connected to AWS DynamoDB");
}

module.exports = dynamoose;
