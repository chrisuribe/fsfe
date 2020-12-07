const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

	res.send('Hello world from EXPRESS');
});

app.get('/demo', (req, res) => {
	res.set('X-hello-world-header');
	res.status(418);
	res.send('You just got a hello world header. And a teapot response. And yet more updates.');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
