import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const articles = [
  {
    id: Date.now().toString() + 1, // Unique ID for the article
    title: "PS Exam",
    description:
      "In my PS exam, 5 out of 12 test cases passed. But I am being optimistic. Until and unless I work on it, there is no fix.",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: Date.now().toString() + 2, // Unique ID for the article
    title: "New Hostel",
    description:
      "In the new hostel, my goal is to move fast by securing a good internship and by staying focused.",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: Date.now().toString() + 3, // Unique ID for the article
    title: "Butterfly Effect",
    description:
      "The butterfly effect emphasizes making tiny changes, like improving eating habits and following routines, which can lead to significant positive outcomes.",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: Date.now().toString() + 4, // Unique ID for the article
    title: "Spaced Repetition",
    description:
      "Spaced repetition is crucial. It involves regularly revising material to enhance retention and understanding.",
    createdAt: new Date().toLocaleDateString(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { articles });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/articles", (req, res) => {
  const { title, description } = req.body;
  const newArticle = {
    id: Date.now().toString(), // Add a unique ID for each article
    title,
    description,
    createdAt: new Date().toLocaleDateString(),
  };
  articles.push(newArticle);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const article = articles.find((a) => a.id === req.params.id);
  res.render("edit", { article });
});

app.post("/update/:id", (req, res) => {
  const { title, description } = req.body;
  const article = articles.find((a) => a.id === req.params.id);
  article.title = title;
  article.description = description;
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const index = articles.findIndex((a) => a.id === req.params.id);
  articles.splice(index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
