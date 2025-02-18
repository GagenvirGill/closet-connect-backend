// src/config/db.js
import { Sequelize } from "sequelize";
import envConfig from "./envConfig.js";

const sequelize = new Sequelize({
	dialect: "postgres",
	host: envConfig.dbHost,
	username: envConfig.dbUser,
	password: envConfig.dbPassword,
	database: envConfig.dbName,
	port: envConfig.dbPort,
	logging: false,
});

async function testConnection() {
	try {
		console.log("Authenticating Sequelize");
		await sequelize.authenticate();
		console.log("Authentication Successful");
	} catch (err) {
		console.error("Error Authenticating Sequelize Instance:", err.message);
		process.exit(1);
	}
}

await testConnection();

export default sequelize;
