import "reflect-metadata";

export let dbOptions: any = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "jazeera",
  password: "postgres",
  database: "calendar",
  logging: true,
  synchronize: false,
  entities: [__dirname + "/../entities/**/*{.ts,.js}"]
};
