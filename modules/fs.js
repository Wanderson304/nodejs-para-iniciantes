const fs = require('fs')
const path = require('path')

// //Criaruma pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//     if (error) {
//         return console.log("Erro: ", error);
//     }

//     console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.html'),
    'hello nodejs!',
    (error) => {
        if (error) {
            return console.log("Erro: ", error);
        }

        console.log("Arquivo criado com sucesso");

        //Adicionar conteúdo ao um arquivo
        fs.appendFile(
            path.join(__dirname, "/teste", "teste.txt"),
            "hello world!",
            (error) => {
                if (error) {
                    return console.log("Erro: ", error)
                }

                console.log("Arquivo modificado com sucesso!");

            }
        );

        // Ler arquivo

        fs.readFile(
            path.join(__dirname, "/test", "test.txt"),
            "utf8",
            (error, data) => {
                if (error) {
                    return console.log("Erro: ", error);
                }
                console.log(data);
            }
        );

    }
);