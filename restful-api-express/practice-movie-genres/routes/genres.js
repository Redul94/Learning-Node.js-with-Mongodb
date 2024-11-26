const express = require("express");
const { z } = require("zod");
const router = express.Router();
const genres = [
  { id: 1, type: "Thiler" },
  { id: 2, type: "Thiler" },
  { id: 3, type: "Action" },
  { id: 4, type: "Crime" },
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The requested id not found");
  res.send(genre);
});

router.post("/", (req, res) => {
  const error = validateGenre(req.body);
  if (error) return res.status(400).send(error);
  const genre = {
    id: genres.length + 1,
    type: req.body.type,
  };
  genres.push(genre);
  res.send(genre);
});

router.put("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The requested id not found");
  const error = validateGenre(req.body);
  if (error) return res.status(400).send(error);

  genre.type = req.body.type;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The requested id not found");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

const validateGenre = (genre) => {
  const schema = z.object({
    type: z.string().min(3, "MIN 3 letter required"),
  });
  try {
    schema.parse(genre);
    return null;
  } catch (error) {
    return error.errors;
  }
};

module.exports = router;
