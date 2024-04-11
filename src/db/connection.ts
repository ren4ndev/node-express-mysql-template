import mysql from "mysql2/promise";

export const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: Boolean(process.env.MYSQL_WAIT_FOR_CONNECTIONS),
  connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT),
  queueLimit: Number(process.env.MYSQL_QUEUE_LIMIT),
});
