const express = require('express')
const app = express()
app.use((request, response, next) => {
        console.log('有人请求服务器1');
        next()
    })

app.get('/students', (request, response) => {
    const students = [
        { id: '001', name: 'tom', age: 18 }
    ]
    response.send(students)
})
app.listen(5000, (err) => {
    if (!err) console.log('服务器1启动成功了，请求学生信息地址为：http://localhost:5000/students')
})