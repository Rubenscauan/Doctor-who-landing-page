import "./Detalhes.css"
import casal from "./asserts/casal.png"
import estrela from "./asserts/estrela.png"
import star2 from "./asserts/star2.png"
import tardis from "./asserts/tardis.png"
import bill from "./asserts/Bill.png"
import linkedin from "./asserts/linkedin.png"
import BackForm from "./asserts/BackForm.png"
import instagram from "./asserts/instagram.png"
import twitter from "./asserts/twitter.png"
import estrelatexto from "./asserts/estrela-texto.png"

const Detalhes = () => {
    return (
        <div className="center">

            <div className="posstar" style={{ display: 'row', textAlign: "center", marginTop: '2%' }}>
                <img src={estrela} />
            </div>

            <div className="detalhes">
                <div className="inscricao">
                    <h1>Ja pensou em viajar pelo espaço tempo?</h1>
                    <h3>Viaje para onde você quiser, </h3>
                    <h3>quiser na companhia de um senhor do </h3>
                    <h3>tempo com centenas de anos de </h3>
                    <h3>experiência em viagem no tempo!</h3>
                    <a className="inscrevase" href="/">Inscreva-se já!</a>
                </div>
            </div>

            <div className="casal">
                <img src={casal} />
                <div className="texto-casal">
                    <h1 style={{ fontSize: '25px', marginBottom: "5%" }}>Muitas histórias já foram vividas pelo Doutor e suas companions!</h1>
                    <h3>
                        Qualquer lugar e época que você puder imaginar o Doutor
                        pode te levar! Clique na imagem ao lado e veja mais detalhes de
                        uma dessas aventuras, a Bill tem muitas coisas divertidas pra
                        relatar da vez que ela e o Doutor foram pra uma feira em Londres
                        em 1814 e descobriram um monstro centenário vivendo embaixo do
                        Tâmisa!
                    </h3>
                </div>
            </div>

            <div className="companions">

                <h1>O que as companions dizem</h1>

                <div className="companions-div">
                    <div className="companions-titulo">
                        <h2>Bill Potts</h2>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px', marginLeft:'20px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                    </div>
                    <p>Achava que ele era só um velho maluco no
                        começo mas depois a gente vê que ele sabe o
                        que tá fazendo , vocês vão encotrar muita gente doida nas
                        viagens com ele mas é assim mesmo, recomendo super!
                    </p>
                </div>

                <div className="companions-div">
                    <div className="companions-titulo">
                        <h2>Clara Oswald</h2>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px', marginLeft:'20px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                    </div>
                    <p>Ele só bateu aqui em casa parecendo um sem teto e eu
                        deixei entrar, acabou ajudando com uns problemas com o Wi-Fi e depois
                        me chamou pra viajar com ele.
                        Aí eu aceitei né, uma oportunidade assim não aparece todo dia.
                    </p>
                </div>

                <div className="companions-div">
                    <div className="companions-titulo">
                        <h2>Donna Noble</h2>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px', marginLeft:'20px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>
                        <img src={estrelatexto} style={{width:'30px',height:'30px',marginTop:'15px'}}/>

                    </div>
                    <p>Na verdade não lembro de muita coisa</p>
                </div>


            </div>

            <div className="tardis">
                <h1>E o melhor ainda está por vir!</h1>
                <h3>Conheça a TARDIS, o véiculo usado pelo doutor em suas viagens</h3>

                <div className='tardis-box'>
                    <div className='tardis-fatos'>
                        <h1>Alguns fatos sobre a TARDIS</h1>
                        <div className="fatos-box">
                            <img src={star2} />
                            <p>Saída diretamente das oficinas de Gallifrey, planeta natal do Doutor!</p>
                        </div>

                        <div className="fatos-box">
                            <img src={star2} />
                            <p>Equipada com biblioteca, piscina e camas beliche!</p>
                        </div>

                        <div className="fatos-box">
                            <img src={star2} />
                            <p>Sistema de camuflagem para se adaptar à qualquer período!
                                (pena que ficou travado em uma cabine telefônica do séc XX :/ )</p>
                        </div>

                        <div className="fatos-box">
                            <img src={star2} />
                            <p>Apesar de ser uma máquina do tempo, a TARDIS é
                                senciente e as vezes tem vontade própria!</p>
                        </div>

                        <div className="fatos-box" style={{ marginBottom: '50px' }}>
                            <img src={star2} />
                            <p>Parece pequena por fora mas acredite: é maior por dentro!</p>
                        </div>

                        <p>*Veículo de modelo 40, não é o modelo mais recente,
                            pode ser temperamental as vezes mas na maior parte
                            dos casos é muito confiável!</p>
                    </div>

                    <div className="tardis-foto">
                        <img src={tardis} style={{marginLeft:'100px'}} />
                    </div>

                </div>

                <div className="bill-form" >
                    <div className="bill">
                        <img src={bill} className="base-image" />
                        <div className="overlay-container">
                            <img src={BackForm} className="overlay-image" />
                        </div>
                    </div>

                    <div className="formulario">
                        <h1>Gostou do que viu? Inscreva-se já</h1>
                        <h3>Preencha seus dados abaixo e tenha a chance
                            de se tornar uma companion do doutor!
                        </h3>

                        <div className="formulario-box">
                            <div className="formulario-titulo">
                                <h1>Entre em contato com nosso time!</h1>
                                <p>Sem complicações, é so preencher que o doutor
                                    entrará em contato!
                                </p>
                                <div className="formulario-campos">
                                    <h2>Nome Completo</h2>
                                    <input></input>

                                    <h2>E-mail</h2>
                                    <input></input>

                                    <h2>Telefone para contato</h2>
                                    <input></input>

                                    <div className="button-container">
                                        <button className="enviar">Enviar</button>
                                    </div>

                                    <p style={{ fontSize: '14px' }}>*Ao enviar seus dados você aceita nossos termos e condições</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="rodape" >
                    <div>
                        <h3>ORGANIZAÇÃO</h3>
                        <h4>Sobre o doutor</h4>
                        <h4>Nossas tecnologias</h4>
                        <h4>Vagas</h4>
                    </div>

                    <div>
                        <h3>RECURSOS</h3>
                        <h4>Blog</h4>
                        <h4>FAQ</h4>
                        <h4>API</h4>
                    </div>

                    <div className="contatos">
                        <h3>NOS ACOMPANHE</h3>
                        <div className="icones">
                            <a><img src={linkedin} /></a>
                            <a><img src={twitter} /></a>
                            <a><img src={instagram} /></a>
                        </div>
                    </div>

                </div>

            </div>
                <div className="fim" >
                    <div className="fim-escrita">
                        <h5>Copyright © 2023 DW, Inc. Todos os direitos reservados.</h5>
                        <h5>Termos de uso</h5>
                    </div>
                </div>


        </div>
    )
}

export default Detalhes;