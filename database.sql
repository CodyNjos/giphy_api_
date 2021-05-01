CREATE DATABASE "giphy_api_challenge";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "rated" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (2083),
    "rating" INT
);
