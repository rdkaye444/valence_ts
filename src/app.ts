// Import the express in typescript file
import express from 'express';

// Import json file containing chemical data
import elements from "./data/PeriodicTableJSON.json"
 
// Initialize the express engine
const app: express.Application = express();

 
// Take a port 3000 for running server.
const port: number = 3001;
 
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
 
// Handling the base element request
app.get('/data/:selectedElement', (_req, _res) => {
    console.log(`Request for ${_req.params.selectedElement} received`)
    _res.set('Access-Control-Allow-Origin', '*');
    _res.send(elements.elements.filter((element) => element['symbol']==_req.params.selectedElement))
});


// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});

