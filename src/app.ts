// Import the express in typescript file
import express from 'express';

// Import json file containing chemical data
import elements from "./data/PeriodicTableJSON.json"
 
// Initialize the express engine
const app: express.Application = express();

 
// Take a port 3000 for running server.
const port: number = 3000;
 
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
 
// Handling the base element request
app.get('/data/:selectedelement', (_req, _res) => {
    _res.send(elements.elements.filter((element) => element['symbol']==_req.params.selectedelement))
});


// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});

