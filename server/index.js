import Express from "express";
import pg from "pg";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

env.config();

const app = Express();
const port = 5000;

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });

db.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
  res.send("Welcome to Motoguru API")
})

app.post("/cars", async (req, res) => {
    const model = req.body.model;
  
    if (!model) {
      return res.status(400).json({ error: "Topic is required" });
    }
  
    try {
      const result = await db.query("SELECT * FROM car WHERE model = $1", [model]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No cars found for the given model" });
      }
  
      console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching cars:", error);
      res.status(500).json({ error: "Server error" });
    }
  });

app.post("/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.query("SELECT * FROM car WHERE id = $1", [id]);
      const post = result.rows[0];
  
      if (!post) {
        return res.status(404).send("No post found");
      }

      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).send("Server error");
    }
  });

app.get("/staff", async (req, res)=>{
  try{
    const result = await db.query("SELECT * from staff");
    const post = result.rows

    if(!post){
      return res.status(404).send("No post found")
    }

    console.log(post);
    res.json(post)
  }
  catch(error){
    res.status(500).send("Server error")
  }
})

app.listen(port, ()=>{
    console.log(`Server is running from port ${port}`)
})