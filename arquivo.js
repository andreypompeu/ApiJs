const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const {method, url, headers} = req;

    console.log("method: ", method);
    console.log("url: ", url);
    console.log("headers: ", headers);

    res.writeHead(200,{
        'Content-Type': 'text/html'
    });

    res.end ('<h1>Hello World</h1>')
})

server.listen(PORT, () => {
    console.log (`Server is running on http://localhost:${PORT}`);
})