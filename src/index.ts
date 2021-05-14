import "reflect-metadata";
import { createConnection, useContainer as useContainerForOrm } from "typeorm";
import { Action, createExpressServer, useContainer as useContainerForRouting } from "routing-controllers";
import { Container } from "typedi";
import bodyParser from "body-parser";

import * as Config from "./constants/config";

const port = 5000;
let run = async () => {
    try {
        useContainerForOrm(Container);
        useContainerForRouting(Container);
        createConnection(Config.dbOptions).then(async () => {
        const express = createExpressServer({
            cors: true,
            routePrefix: "/api",
            controllers: [__dirname + "/controllers/*{.ts,.js}"],
        });
        express.use(bodyParser.raw({ limit: "5mb" }));
        express.use(bodyParser.text({ limit: "5mb" }));
        express.use(bodyParser.json({ limit: "5mb" }));
        express.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
        express.listen(port, async (err: any) => {
            if (err) {
                return console.log(err);
            }
            return console.log(
                `
            ***********************************************
                    server is listening on ${port}
            ***********************************************
  `
            );
        });
    });
    } catch (error) {

    }

};

run();