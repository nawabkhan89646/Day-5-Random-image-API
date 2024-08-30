import express from "express";
const app = express();


const getRandomImage = async () => {
  let data = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=9rgcbEAWzIQ2U4lzGcnqo7JCPAj95ojrF8NtFWZPgGY&count=1"
  );
  let res = await data.json();
  return res[0].urls;
};

app.get("/api/image/random", async (req, res) => {
  try {
    const data = await getRandomImage();
    if (data.error) {
      res.status(500).json(data);
    } else {
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(1000, () => {
  console.log("server is running on port 1000");
});