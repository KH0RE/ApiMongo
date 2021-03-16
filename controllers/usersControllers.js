const express = require('express')
const path = require('path')
const User = require('../models/user')
const ObjectId  = require("mongodb")
const fs = require('fs-extra');
const { unlink } = require('fs-extra')

async function verTodos(req, res) {
    const users = await User.find();
    console.log(users);
    return res.json(users);

}

async function crearOne(req, res) {
    const { name, password } = req.body;
    
    const imagen = {
        name: req.body.name,
       password: req.body.password,
        imagenPath:   req.file.path
    };
    
    await User.create(imagen);
    console.log(imagen)

    return res.json({
        msg: 'creada',
        imagen
    })
}

async function eliminar (req, res) {
    const { id } = req.params
    const img = await User.findByIdAndDelete(id)

    if(img) {
       await unlink(path.resolve(img.imagenPath))
       //await fs.unlink(path.resolve(img.imagenPath))
       console.log('Eliminado con exito')
    }else{
        console.log('Eliminado con exito')
    }

    return res.json(img);
}

/*async function editar (req, res) {
    const { id } = req.params;
    const body = req.body;
    const img = await User.findByIdAndUpdate(id, body)
    
     return res.json(img);
}*/

async function editar (req, res) {
    const { id } = req.params;
    const body = req.body;

    const img = await User.findByIdAndUpdate(id, body)
   
    return res.json({
        msg: 'Actualizada',
        img
    })
}


module.exports = {
    crearOne,
    eliminar,
    verTodos,
    editar
}