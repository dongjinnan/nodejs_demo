const express = require('express')
const router = express.Router()

router.get('/user/list', (req, res) => {
    res.send('Get user list.')
})

router.post('/user/add', (req, res) => {
    res.send('Add new user.')
})

router.get('/get', (req, res) => {
    const query = req.query

    res.send({
        status: 0,
        msg: 'GET 请求成功！',
        data: query
    })
})

router.use(express.urlencoded({extended: false})) 
router.post('/post', (req, res) => {
    const body = req.body

    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    })
})

router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功！'
    })
})

module.exports = router