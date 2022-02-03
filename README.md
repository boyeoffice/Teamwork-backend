# Teamwork-backend

## About the project

Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.

[![Build Status](https://travis-ci.org/boyeoffice/Teamwork-backend.svg?branch=develop)](https://travis-ci.org/boyeoffice/Teamwork-backend)
[![Coverage Status](https://coveralls.io/repos/github/boyeoffice/Teamwork-backend/badge.svg?branch=develop)](https://coveralls.io/github/boyeoffice/Teamwork-backend?branch=develop)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1b7fa2d4b7049c70dcb2/test_coverage)](https://codeclimate.com/github/boyeoffice/Teamwork-backend/test_coverage)

## Tech Stack

**Server:** Node.js, Express.js, PostgreSQL,

###  Testing the app locally
Clone the project

```bash
 git clone https://github.com/boyeoffice/Teamwork-backend.git
```

Go to the project directory

```bash
  cd Teamwork-backend
```

Install dependencies

```bash
  npm install
```

Setup enviroment

```bash
cp .env.example .env
```

Run migrations

```bash
npm run migrate
```

Rollback migrations

```bash
npm migrate:rollback
```

Seed data into database

```bash
npm run seed
```

Start server

```bash
npm start
```

Run test

```
npm test
```
