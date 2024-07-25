import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('hello this is server')
})

const port = process.env.PORT || 3007

app.get('/api/jokes', (req, res) => {
    const jokes = [{
        id: 1,
        title: "joke 1",
        content: "i am joke 1"
    },

    {
        id: 2,
        title: "joke 2",
        content: "i am joke 2"
    },
    {
        id: 3,
        title: "joke 3",
        content: "i am joke 4"
    },
    {
        id: 4,
        title: "joke 4",
        content: "i am joke 4 "
    }

]
    res.send(jokes)
})
app.listen(port, () => {
    console.log(`this is a port ${port}`)
})