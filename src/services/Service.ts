import axios from "axios";

//crio a constante api com o endereço da minha api
export const api = axios.create({
  baseURL: 'https://blossom-studio.herokuapp.com'
})

// url:any = endereço da minha api concatenado com a rota(/usuarios/cadastrar);dados:any = enviando os dados utilizados para cadastro(nome,senha,usuario...); setDados:any = captura os dados que retornaram da api(objeto JSON) e vai atribui-los a um state.
export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async (url: any, dados: any, setToken: any) => {
  const resposta = await api.post(url, dados)
  setToken(resposta.data.token)
}

