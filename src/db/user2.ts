import { Schema, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  // Use `Types.ObjectId` in document interface...
  organization: Types.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
//   organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});
