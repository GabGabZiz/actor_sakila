import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "tec_web",
  port: 5432,
});

pool.on("error", (err) => {
  console.error("Unexpected error on PostgreSQL client:", err);
  process.exit(-1);
});

export default pool;
