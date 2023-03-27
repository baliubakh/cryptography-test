import { Pool } from "pg";
import { config } from "../config";

const pool = new Pool(config.db);

const db = {
  query: async (text: string, params = []) => {
    const res = await pool.query(text, params);
    return res.rows;
  },
};

export default db;
