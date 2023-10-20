// const express = require('express')
// const app = express()
// const port = 8000

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(express.static('public'))
// app.get('/api/form-get', (request, response) => {

//     let t = request.query.target || ''
//     let k = request.query.kw || ''
//     let n = parseInt((Math.random() * 1000))
//     let r = {
//         target: t,
//         kw: k,
//         results: n
//     }
//     response.json(r)
// })
// app.listen(port, () => {
//     console.log('Server listening on port ' + port)
// })

const express = require('express')
const app = express()
const port = 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))

app.get('/api/form-get', (request, response) => {
    let t = request.query.target || ''
    let k = request.query.kw || ''
    let n = parseInt((Math.random() * 1000))
    let r = {
        target: t,
        kw: k,
        results: n
    }
    response.json(r)
})

app.post('/api/form-post', (request, response) => {
    let name = request.body.name || '';
    let email = request.body.email || '';
    let msg = request.body.message || '';
    let text = `
        <table border="1">
            <caption>ข้อมูลที่ส่งขึ้นไป</caption>
            <tr><td>ชื่อ :</td><td>${name}</td></tr>
            <tr><td>อีเมล :</td><td>${email}</td></tr>
            <tr><td>ข้อความ :</td><td>${msg}</td></tr>
        </table>`
        ;
    response.send(text);
})
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})