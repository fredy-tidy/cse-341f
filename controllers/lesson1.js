const rootRoute = (req, res) => {
  res.send(" this is the root route")
}

const firstRoute = (req, res) => {
    res.send("Test node server, and test nodemon");
  };
  
const secondRoute = (req, res) => {
      res.send("nuevo now is the file controller, changes Test node server, and test nodemon");
    };


module.exports = {
    rootRoute,
    firstRoute,
    secondRoute
};