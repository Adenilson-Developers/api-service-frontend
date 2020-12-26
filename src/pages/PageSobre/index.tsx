import React from 'react';

import HeaderPage from '../../components/HeaderPage';
import tecnoImg from '../../assets/images/tecnologias.svg';
import imgsite from '../../assets/images/imgsite.webp';
import Iconsfooter from '../../assets/images/design.png';
import './styles.css';


function PageSobre(){
    return(
        <div className="page-sobre">
        <HeaderPage title="" />

        <main>
            <section className="container">
                <article className="info-card">
                    <img src={tecnoImg} alt="icon-img" />

                    <div>
                        <h2>Nossa missão é da um up nas suas ideias e colocar em prática,
                            para que junsto alcançamos grandes resultados.
                        </h2>
                        <br/>
                        <p>
                            A técnologia é a ferramenta central para o crescimento de um negócio. Nesse cenário
                            oferecer um solução personalizada para diferentes necessidades é algo que 
                            faz a diferença.
                        </p>
                    </div>
                </article>

                <article className="info-site">
                    <img src={imgsite}  alt="im-site" />
                    <h2>Mantenha tudo atualizado de forma simples é prática</h2>
                    <p>
                        As mudanças no meio digital são constante. portanto é preciso 
                        está sempre disposto a testar novas feature para que você possa 
                        está sempre acompanhando esse progresso.
                    </p>
                </article>

            </section>
            <footer>
                <img src={Iconsfooter} alt="icon-footer" />
            </footer>
        </main>
        </div>
    );
}

export default PageSobre;