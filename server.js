const http = require('http')
const url = require('url')

const fs = require('fs')
const home = fs.readFileSync(`${__dirname}/pages/home.html`,'utf-8' );
const bio = fs.readFileSync(`${__dirname}/pages/bio.html`,'utf-8' );
const about = fs.readFileSync(`${__dirname}/pages/about.html`,'utf-8' );
const contact = fs.readFileSync(`${__dirname}/pages/contact.html`,'utf-8' );

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    console.log(query);

    if (pathname === '/' || pathname === '/home') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(home);
    } else if (pathname === '/bio') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(bio);
    } else if(pathname === '/about') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(about);
    } else if(pathname === '/contact') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(contact);
    } else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('<h1>Page not found!</h1>');
    }
})

server.listen(4000, "127.0.0.1")
console.log("server created!")