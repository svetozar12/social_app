import { Schema, model } from "mongoose";

export interface BlogSchema {
  owner_id: Schema.Types.ObjectId;
  title: string;
  date: Date;
  status: "public" | "private";
}

const BlogSchema = new Schema<BlogSchema>({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["public", "private"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Blogs = model("Blogs", BlogSchema);

export default Blogs;
