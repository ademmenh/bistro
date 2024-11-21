import { Schema, Types } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  organization: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
//   organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});
