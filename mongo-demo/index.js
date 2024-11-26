const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to db...."))
  .catch((err) => console.log("Could not connected to db", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "Backend Course",
    author: "Redul",
    tags: ["node", "backend"],

    isPublished: true,
  });
  const result = await course.save();
}

async function getCourse() {
  const courses = await Course.find({ author: "Redul" })
    .limit(10)
    .sort({ name: 1 });
  console.log(courses);
}
//  createCourse();
getCourse();
