import Detalhes from "./Detalhes";
import Doctor from "./asserts/Doctor.jpg"
import Logo from "./asserts/Logo.png"
import "./Main.css"
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>

const Main = () => {
    return (
        <div>
            <div className="main">
                <div className="menu">
                    <div className="menu-items">
                        <a><img src={Logo} style={{ width: '20%', marginLeft: '65%' }} /></a>
                        <div className='items' >
                            <a href="/"> Sobre a Tardis</a>
                            <a href="/"> Atribuições</a>
                            <a href="/"> Duvidas Frequentes</a>
                            <a href="/" > Saiba Mais</a>
                        </div>
                    </div>
                </div>

                <div className="imagem-box">
                    <img className="imagem" src={Doctor} />
                </div>
            </div>
            <Detalhes />
        </div>


    )
}

export default Main;