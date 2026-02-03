import { Timestamp } from "bson";
import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "EMAIL SHOULD BE UNIQUE! TRY ANOTHER"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.Schema("User", userSchema);
