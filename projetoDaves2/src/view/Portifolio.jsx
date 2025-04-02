import Card from "../components/Card/Card"
import Titulo from "../components/Titulo/Titulo"
import RelogioDigital from "../components/RelogioDigital/RelogioDigital"
import BarraProgresso from "../components/BarraProgresso/BarraProgresso"
import Votacao from "../components/Votacao/Votacao"
import "./Portifolio.css"

const Portifolio = () => {
    return (
        <div className="board">
            <Titulo valor="Exercícios Daves" />
            
            <Card titulo="Relógio Digital" cor="#fa4" >
                <RelogioDigital />
            </Card>

            <Card titulo="Barra de Progresso Interativa" cor="#bb4" >
                <BarraProgresso valor={50} />
            </Card>

            <Card titulo="Sistema de Votação" >
                <Votacao />
            </Card>
        </div>
    )    
}

export default Portifolio