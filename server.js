const express = require('express');

const hubsRouter = require('./hubs/hubs-router.js')

const server = express();

server.use(express.json());

server.use("/api/hubs", hubsRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// this should always be at the bottom
// usually used for errors
server.get('*', (req, res) => {
    res.status(404).send(`
    <h2> Page not found</h2>
    `)
});

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

module.exports = server;


// // async has to be written in order to work... 
// const asyncAwaitEx = async () => {
// //   Hubs.find({})
// //   .then(hubs => {
// //     //do stuff with hubs
// //     res.json(hubs);
// //   }).catch(err => {
// //     // do stuf with err
// //     res.status(500).json(e);
// //   });
// // will NOT work with an async method
//   const hubs = Hubs.find({})
//   // point of async to try to code something like this
//   // but for it to actually work...

//   // async await style

//   // this try catch method is what we should work with more. 
//   // project uses this. 
//   try {
//   const hubs = await Hubs.find({});
//   res.json(hubs);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// }

// server.get('/api/hubs', async (req, res) => {
//   try {
//     console.log("query", req.query)
//     // http://localhost:9090/api/hubs?limit=4&sortdir=desc - ex of what you can do
//     const hubs = await Hubs.find(req.query);
//     res.status(200).json(hubs);
//   } catch (error) {
//     // log error to database
//     console.log(error);
//     res.status(500).json({
//       message: 'Error retrieving the hubs',
//     });
//   }
// });

// server.get('/api/hubs/:id', async (req, res) => {
  
//   try {
//     const hub = await Hubs.findById(req.params.id);

//     if (hub) {
//       res.status(200).json(hub);
//     } else {
//       res.status(404).json({ message: 'Hub not found' });
//     }
//   } catch (error) {
//     // log error to database
//     console.log(error);
//     res.status(500).json({
//       message: 'Error retrieving the hub',
//     });
//   }
// });

// server.post('/api/hubs', async (req, res) => {
//   try {
//     const hub = await Hubs.add(req.body);
//     res.status(201).json(hub);
//   } catch (error) {
//     // log error to database
//     console.log(error);
//     res.status(500).json({
//       message: 'Error adding the hub',
//     });
//   }
// });

// server.delete('/api/hubs/:id', async (req, res) => {
//   try {
//     const count = await Hubs.remove(req.params.id);
//     if (count > 0) {
//       res.status(200).json({ message: 'The hub has been nuked' });
//     } else {
//       res.status(404).json({ message: 'The hub could not be found' });
//     }
//   } catch (error) {
//     // log error to database
//     console.log(error);
//     res.status(500).json({
//       message: 'Error removing the hub',
//     });
//   }
// });

// server.put('/api/hubs/:id', async (req, res) => {
//   try {
//     const hub = await Hubs.update(req.params.id, req.body);
//     if (hub) {
//       res.status(200).json(hub);
//     } else {
//       res.status(404).json({ message: 'The hub could not be found' });
//     }
//   } catch (error) {
//     // log error to database
//     console.log(error);
//     res.status(500).json({
//       message: 'Error updating the hub',
//     });
//   }
// });

// // add an endpoint that returns all the messages for a hub
// // add an endpoint for adding new message to a hub

// server.listen(PORT, () => {
//   console.log(`*** Server Running on http://localhost:${PORT} ***`);
// });

