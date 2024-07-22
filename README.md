# Express.js REST API template with Sequelize and TypeScript

Structure is module pattern. 

## Installation

```bash
$ npm install
```

## Running

```bash
$ npm start
```

After starting the server, you can visit http://localhost:3000 in your browser

## Building

```bash
$ npm run build
```

## Development

```bash
$ npm run dev
```

## Testing

```bash
$ npm test
```

## Using Docker

```bash
$ docker build -t my-app .
$ docker run --name my-app-example --env-file ./.env -p 3000:3000 -d  my-app
```

## Configuration

Create a `.env` file and configure your settings by referring to the `.env.example` file.


## Locally

```bash
$ npm i
$ npm run build && npm start
```