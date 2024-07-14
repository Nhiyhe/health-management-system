import * as sdk from "node-appwrite";
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT,
} = process.env;
const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setKey(
    "2cb7f5262dbbb708663fee2e77af8ff7ab6be0f6e5823165a46e06c90368f2de6b82f7cae23714bc87e9c47716c48d857330bb51f5529e8789826497794c3678974de4440ec51b8f0603261b4f04cd314386fcbcd6267304bb5da0b2aa4e38550f4c8a341a20898cd77863cbe0b16584c23fb7f8724b27fef9440f462df1a5fa"
  )
  .setProject("6692ec52002e443c8db9");

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
