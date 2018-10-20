"use strict"

const express = require("express");
const Knex = require("knex");
const path = require("path");

const app = express();
const knex = (function () {
    const config = {
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    };

    if (process.env.INSTANCE_CONNECTION_NAME 
            && process.env.NODE_ENV === "production") {
        config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
    }

    return Knex({
        client: "mysql",
        connection: config
    });
})();


// TODO find a way to set localization in server!
// TODO figure out what to do if some city isn't in DB!
function databaseFetch(table, id) {
    return knex(table).where({id: id}).select("eng");
}

function handleCityOrCountryRequest(resp, table, id) {
    databaseFetch(table, id).then(function (results) {
        resp
            .status(200)
            .set("Content-Type", "text/json")
            .send(results[0]["eng"])
            .end();
    });
}

app.get("/names/city/:id", function (req, resp) {
    handleCityOrCountryRequest(resp, "cities", req.params.id);
});

app.get("/names/country/:id", function (req, resp) {
    handleCityOrCountryRequest(resp, "countries", req.params.id);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

module.exports = app;
