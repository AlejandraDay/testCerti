const PersonCtl = {}
const Person = require('../models/Person')
PersonCtl.getList = async (req,res) => {
    const Persons = await Person.find() 
    console.log(Persons)
    res.json(Persons)
}

PersonCtl.savePerson = async (req,res) => {
    const name=req.body.name
    const lastName=req.body.lastName
    const PersonOBJ = new Person({name,lastName})
    await PersonOBJ.save()
    res.json({'response':'ok'})
}

PersonCtl.updatePerson = async (req,res) => {
    await Person.updateOne({'name': 'certi'}, {'name': 'certi2'})
    res.json({'response':'ok'})
}
PersonCtl.deletePerson = async (req,res) => {
    await Person.remove({"name":"Node"})
    res.json({'response':'ok'})
}
module.exports = PersonCtl
