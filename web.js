const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const radius = req.query.radius;

  if (radius === undefined) {
    res.status(400).send('Error: Please provide a radius parameter in your query string.');
  } else {
    const area = Math.PI * radius ** 2;
    res.send(`The area of a circle with radius ${radius} is ${area}.`);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
