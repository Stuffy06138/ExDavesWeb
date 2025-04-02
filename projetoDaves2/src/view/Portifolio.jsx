import Card from "../../components/Card/Card"
import Titulo from "../../components/Titulo/Titulo"
import "./Portifolio.css"

const Portifolio = ()=>{

    return (
        <div className="board">
            <Titulo valor="Componentes React" />
            
            <Card titulo="Desafio 01 - Passagem de Parâmetro" cor="#fa4" >
                <Aluno nome="Zezin da Silva" nota={8} />
            </Card>

            <Card titulo="Exemplo 02" cor="#bb4" >
                <h3>Aleatório</h3>
            </Card>

            <Card titulo="Desafio 03 - Lista" >
                
                <Turma turma="Front end" />

            </Card>

            <Card titulo="Desafio 04 - Exercício" >
                Exercício 2 da lista
            </Card>

            <Card titulo="Desafio 05 - Componentes Filhos" >

                <Familia sobrenome="Martins" >
                    <Membro nome="Zezin" sobreNome="Silverio" />
                    <Membro nome="Mariazinha" sobreNome="XXXXXX" />
                    <Membro nome="Pedrin" sobreNome="Martins" nivel={1} />
                    <Membro nome="Gustin" sobreNome="Martins" nivel={2} />
                </Familia>

                <Familia sobrenome="Perreira" >
                    <Membro nome="Alberto" />
                    <Membro nome="Marquin"  nivel={1} />
                    <Membro nome="Betin"  nivel={3} />
                </Familia>
                
            </Card>


        </div>
    )    
}

export default Portifolio