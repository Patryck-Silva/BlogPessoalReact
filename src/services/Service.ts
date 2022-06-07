import axios from "axios";

//crio a constante api com o endereço da minha api
export const api = axios.create({
  baseURL: 'https://blossom-studio.herokuapp.com'
})

// url:any = endereço da minha api concatenado com a rota(/usuarios/cadastrar);dados:any = enviando os dados utilizados para cadastro(nome,senha,usuario...); setDados:any = captura os dados que retornaram da api(objeto JSON) e vai atribui-los a um state.
export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados)//passando para o back
  setDados(resposta.data)
}

//metodo de login
export const login = async (url: any, dados: any, setToken: any) => {
  const resposta = await api.post(url, dados)//pasando para o back
  setToken(resposta.data.token)
}

//buscar dados
export const busca = async (url: any, setDados: any, header: any) => {
  const resposta = await api.get(url, header)//passando para o back
  setDados(resposta.data)
}

//buscar dados pelo id
export const buscaId = async (url: any, setDados: any, header: any) => {
  const resposta = await api.get(url, header)//passando para  o back
  setDados(resposta.data)
}

//postar algo
export const post = async (url: any, dados: any, setDados: any, header: any) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

//atualizando algo
export const put = async (url: any, dados: any, setDados: any, header: any) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

//deletando algo
export const deleteId = async (url: any, header: any) => {
  await api.delete(url, header)
}


