import express from 'express';

const app = express();

app.get('/', (request, response) => {
    console.log('listagem de usuarios');

    response.json([
        "bruno",
        "paulo",
        "pedro",
        "joe",
        "billy joel"
    ]);
});

app.listen(3333);