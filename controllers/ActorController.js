import db from "../config/database.js";

export const showActors = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM actor");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const showActorById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.query("SELECT * FROM actor WHERE actor_id = $1", [
      id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createActor = async (req, res) => {
  const { first_name, last_name } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO actor (first_name, last_name) VALUES ($1, $2) RETURNING *",
      [first_name, last_name]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateActor = async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name } = req.body;
  try {
    const result = await db.query(
      "UPDATE actor SET first_name = $1, last_name = $2 WHERE actor_id = $3 RETURNING *",
      [first_name, last_name, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteActor = async (req, res) => {
  const id = req.params.id;
  try {
    await db.query("DELETE FROM actor WHERE actor_id = $1", [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
