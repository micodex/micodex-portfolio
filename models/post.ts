import mongoose, { Schema, Document } from "mongoose";

// 1. define interface for typescript
export interface IPost extends Document {
  title: string;
  description: string;
  author: string;
  date: string; // Stored as Date in DB, but you can format it as string when sending to frontend
  src: string; // Image URL or path
  tags: string[];
  content: string;
  slug?: string;
}

// 2. define the schema
const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      trim: true,
      maxlength: [250, "Description cannot be more than 250 characters"],
    },
    author: {
      type: String,
      required: [true, "Please provide an author name"],
      trim: true,
    },
    date: {
      type: String,
      default: String(Date.now), // Automatically sets to current time if not provided
    },
    src: {
      type: String,
      required: [true, "Please provide an image source (src)"],
    },
    tags: {
      type: [String],
      default: [],
    },
    content: {
      type: String,
      required: [true, "Please provide the post content"],
    },
    slug: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple nulls/undefined values
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  },
);

// 3. create the model
export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema);
