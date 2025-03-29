export function requestHandler(req, resp) {
    const url = req.url;
    const method = req.method;
    resp.setHeader('Content-Type', 'text/html');

    console.log(method);
    if (url === '/' && method == 'GET') {
        resp.write(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>update Hello</h1>
    <form action="/create-user" method="POST">
        <input type="text" name="username" />
        <button type="submit">Create</button>
    </form>
</body>
</html>
        `);
        return resp.end();
    } else if (url === '/users') {
        resp.write(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
    </ul>
</body>
</html>
        `);
        return resp.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split('=')[1];
            console.log('CREATE USER: ' + username);
            resp.statusCode = 302;
            resp.setHeader('Location', '/');
            return resp.end();
        });
    }
}