import mongoose, { Schema, Document } from "mongoose";

// 1. Define the TypeScript interface for your Project data
export interface IProject extends Document {
  title: string;
  description: string;
  src: string;
  tags: string[];
  githubUrl: string;
  projectUrl: string;
}

//  2. Define the Mongoose Schema
const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this project."],
      maxLength: [60, "Title cannot be more than 60 characters"],
    },

    description: {
      type: String,
      required: [true, "Please provide a project description."],
      maxlength: [200, "Description cannot be more than 200 characters"],
    },

    src: {
      type: String,
      required: [true, "Please provide an image source URL."],
    },

    tags: {
      type: [String],
      required: [true],
    },

    githubUrl: {
      type: String,
      required: [true, "Please provide a GitHub URL."],
    },
    projectUrl: {
      type: String,
      required: [true, "Please provide the live project URL."],
    },
  },
  {
    // Adds createdAt and updatedAt timestamps to the document
    timestamps: true,
  }
);

// 3. Create and export the Mongoose model
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the model 'Project', Mongoose will create/use the 'projects' collection in the database.
// The `mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema)` part prevents
// overwriting the model if it's already been compiled, which is a common issue in Next.js's
// hot-reloading environment.
export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
