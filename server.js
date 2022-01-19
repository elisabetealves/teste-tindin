import app from "./src/app";

const PORT = 7070;

app.listen(PORT, () => {
    console.log(`Servidor rodando... http://localhost:${PORT}`)
})
