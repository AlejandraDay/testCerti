const express = require('express')
const router = express.Router()
const PersonCtl = require('../controllers/person.controller')

router.get('/user', PersonCtl.getList)

router.post('/user', PersonCtl.savePerson)

router.put('/user', PersonCtl.deletePerson)

router.delete('/user', PersonCtl.deletePerson)

module.exports = router