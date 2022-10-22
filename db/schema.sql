CREATE DATABASE profolio;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT
);

CREATE TABLE portfolios (
    portfolio_id SERIAL PRIMARY KEY,
    fullname TEXT NOT NULL,
    job_title TEXT,
    picture TEXT,
    description TEXT
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    portfolio_id INTEGER REFERENCES portfolios(portfolio_id),
    project_title TEXT NOT NULL,
    project_url TEXT NOT NULL,
    project_description TEXT NOT NULL  
);

CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    portfolio_id INTEGER REFERENCES portfolios(portfolio_id),
    client_name TEXT NOT NULL,
    email TEXT NOT NULL,
    enquiry TEXT NOT NULL
);
