import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('hello this is server')
})

const port = process.env.PORT || 3006

app.get('/obj', (req, res) => {
    const obj = [{
        id: 1,
        name: "sachin",
        about: "i am sachin"
    },

    {
        id: 2,
        name: "steve",
        about: "i am steve"


    }]
    res.send(obj)

})
app.listen(port, () => {
    console.log(`this is a port ${port}`)
})