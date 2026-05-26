const express = require("express");
const cors = require("cors");

const pool = require("./config/db");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {

  try {

    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Backend conectado a PostgreSQL",
      databaseTime: result.rows[0]
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Error conexión DB"
    });

  }

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});