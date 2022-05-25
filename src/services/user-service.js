import api from "./api";

function login(code, password){
   return (code == '123456' && password == 'senhas');

    // return new Promise((resolve, reject) => {
    //     return api.post(`/login`, { codigo, senha})
    //     .then(response => resolve(response))
    //     .catch(error => reject(error));
    // });
}

function getById(id){
    return new Promise((resolve, reject) => {
        return api.get(`/user/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

export default {
    login,
    getById
}