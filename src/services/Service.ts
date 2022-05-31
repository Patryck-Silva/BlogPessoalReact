import axios from "axios";


export const api = axios.create({
  baseURL: 'https://blossom-studio.herokuapp.com'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}

export const login = async (url: any, dados: any, setToken: any) => {
  const resposta = await api.post(url, dados)
  setToken(resposta.data.token)
}