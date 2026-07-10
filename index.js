import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()

app.get("/api/v1/create", (req, res) => {
    const { id, name, raca, idade} = req.query

    if(!id || !name || !raca || !idade) {
        res.status(404).send({ massage: "Por favor informar as informaçoes do cachorro"})
        return
    }
    const cao = {
        id,
        name,
        raca,
        idade,
    }

    bancoDeDados.push(cao)

    res.status(200).send({ message: "Cão adicionado com sucesso" })
    return
    
})

app.get ("/api/v1/getone/:id", (req, res) => {
    const id = req.params.id

    const cao = bancoDeDados.find(it => it.id == id)

    if(!cao) {
        res.status(404).send({ massage: "Cão não encontrado"})
        return
    }
    return
    res.status(200).send({ 
        massage: cao
    })
})

app.get("/api/v1/getall", (req, res) => {
    console.log(bancoDeDados)
})

app.get("/api/deletar/:id", (req, res) => {
    const id = req.params.id
    const cao = bancoDeDados.find(it => it.id == id)
    if(!cao) {
        res.send({ message: "Favor informar id e name" })
        return 
    }
    bancoDeDados.splice(it => it.id == id, 1)
    res.send({ message: "Pessoa deletada com sucesso" })
})

app.listen(3000, () => {
    console.log("Servidor está ouvindo a porta 3000")
})