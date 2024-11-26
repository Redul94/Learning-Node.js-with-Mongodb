const express = require("express");
const z = require("zod");
const app = express();

app.use(express.json());

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];
app.get("/", (req, res) => {
  res.send("Hello backend with express");
});

app.get("/api/post/:year/:month", (req, res) => {
  res.send(req.params);
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The given was not founded");
  res.status(200).send(course);
});

app.post("/api/courses", (req, res) => {
  const schema = z.object({
    name: z.string().min(3, "Min 3 letter is requied"),
  });
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).send(result.error.errors);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.status(201).send(course);
});

app.put('/api/courses/:id',(req,res)=>{
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The given was not founded");
  const schema = z.object({
    name: z.string().min(3, "Min 3 letter is requied"),
  });
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).send(result.error.errors);
  };

  course.name=req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id',(req,res)=>{
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The given was not founded");

  const index = courses.indexOf(course);
  courses.splice(index,1);
  res.send(course);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
