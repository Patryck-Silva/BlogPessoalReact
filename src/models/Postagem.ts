import Tema from './Tema'

interface Postagem {
  id: number
  titulo: String //max length: 100, min length: 5
  texto: string //maxLength: 1000, minLength: 10
  data: string
  curtir: number
  tema?: Tema | null

}

export default Postagem;