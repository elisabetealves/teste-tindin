import express from 'express'
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send({
        title: "Teste Tindin",
        version: "1.0.0",
        mensagem: "Seja bem-vindo(a)"
    })
})

export default router;