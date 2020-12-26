import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../../components/HeaderHome';
import ServicesItem from '../../components/ServicesItem';

import whatsappImg from '../../assets/images/Whatsapp.svg';
import sobreImg from '../../assets/images/livro-about.svg';

import Emailicon from '../../assets/images/icons/Emailicon.svg';
import github from '../../assets/images/icons/github.svg';
import Iconsfooter from '../../assets/images/design.png';
import linkedin from '../../assets/images/icons/linkedin.svg';
import instagram from '../../assets/images/icons/instagram.svg';



import './styles.css';


function PageHome(){
    return(
        <div id="page-home-content">
            <HeaderHome title="Bom vê você por aqui! seja bem vindo">
                <nav className="nav-top-bar">
                    <div className="menu-block">
                        <div className="menu-items">
                            <Link to="/contato" className="contato">
                                <img src={whatsappImg} alt="Entrar em contato" />
                                Contato
                            </Link>
                        </div>

                        <div className="menu-items">
                            <Link to="/sobre" className="sobre">
                                <img src={sobreImg} alt="sobre" />
                                Sobre
                            </Link>
                        </div>
                    </div>
                </nav>
            </HeaderHome>


            <main>
                <ServicesItem
                title="SISTEMAS WEB"
                description="Com inovação e tecnologia, ajudamos você a desenvolver soluções
                digitais úteis e eficiente para seu negócio.">
                </ServicesItem>
                

                <ServicesItem 
                title="SITES"
                description="Tenha um site profissional que vai ajudar você a anunciar
                suas ideias de forma rápida e simples. Cria seu site de forma simples e eficiente."
                />
 
                <ServicesItem 
                title="BLOGS"
                description="Um blog sempre é necessário para mostrar suas postagens
                e atualizar informações de seus conteúdos."
                />

                <ServicesItem 
                title="MARKETING"
                description="Que tal aumentar o foco no seu produto digital e melhorar suas vendas,
                utilizando os diversos meios digitais."
                />

                <ServicesItem 
                title="FOTOGRAFIA"
                description="Vamos falar sobre fotos, você está apresentando visualmente
                seus produtos para seu publico de forma correta ? "
                />

               <ServicesItem 
                title="SUPORTE"
                description="Otimização de serviços, atualização de sites e blogs, melhorias 
                em conteúdo digital e muito mais."
                />
            </main>

            <footer id="footer-card">
                <div className="info-emial">

                    <a href="mailto:adenilson.developers@gmail.com?Subject=Título%20da%20mensagem" target="email">
                    <img src={Emailicon} alt="email" />
                    </a>
                </div>

                <div className="info-github">
                    <a href="https://github.com/Adenilson-Developers" target="github">
                    <img src={github} alt="github" />
                    </a>
                </div>
                

                <div className="info-linkedin">
                    <a href="https://www.linkedin.com/in/adenilson-developer" target="linkedin">
                    <img src={linkedin} alt="linkedin" />
                    </a>
                </div>

                <div className="info-instagram">
                    <a href="" target="instagram">
                    <img src={instagram} alt="instagram" />
                    </a>
                </div>

            </footer>

        </div>
    );
}

export default PageHome;