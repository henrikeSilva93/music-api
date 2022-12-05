import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "music-api",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*{.js,.ts}"],
    migrations: [],
    subscribers: [],
})
