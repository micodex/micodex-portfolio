import mongoose, { Schema, Document } from "mongoose";

// 1. Define the TypeScript interface for your Blog data
export interface IBlog extends Document {
  title: string;
  description: string;
  author: string;
  date: string;
  src: string;
  tags: string[];
  content: string;
}

//  2. Define the Mongoose Schema
const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
      required: [true],
    },
    author: {
      type: String,
      required: [true],
    },
    date: {
      type: String,
      required: [true],
    },
    src: {
      type: String,
      required: [true],
    },
    tags: {
      type: [String],
      required: [true],
    },
    content: {
      type: String,
      required: [true],
    },
  },
  { timestamps: true }
);

// 3. Create and export the Mongoose model
export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
