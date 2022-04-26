const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from server !!')
})

const users = [
    {
        id: 1,
        name: "Shabnur",
        email: "shabnur@gmail.com",
        phone: "01222233332"
    },

    {
        id: 2,
        name: "Shabana",
        email: "shabana@gmail.com",
        phone: "01222233332"
    },
    {
        id: 3,
        name: "Suchorita",
        email: "shuchorita@gmail.com",
        phone: "01222233332",
    },
    {
        id: 4,
        name: "Bobita",
        email: "bobita@gmail.com",
        phone: "01222233332"
    },
    {
        id: 5,
        name: "Shuchitra",
        email: "shuchitra@gmail.com",
        phone: "01222233332",
    },
    {
        id: 6,
        name: "Moushumi",
        email: "moushumi@gmail.com",
        phone: "01222233332",
    },
    {
        id: 7,
        name: "Purnima",
        email: "purnima@gmail.com",
        phone: "01222233332"
    },
];

app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {

    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    // res.send('post success !!');
})

app.listen(port, () => {
    console.log("Listening to port", port);
});