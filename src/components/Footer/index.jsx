import './style.css';

import { BsWhatsapp } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


export default function Footer() {
    return (
        <footer>
            <div className="endereco">
                <h3>Endereço:</h3>
                <p>Rua Floriano Peixoto, 675, Centro</p>
                <p>Taquaritinga/SP</p>
            </div>
            <div className="contato">
                <h3>Contato:</h3>
                <p>Whatsapp: (16) 99713-6311</p>
                <p>Instagram: @vem-que-tem</p>
            </div>
            <div className="atendimento">
                <h3>Atendimento:</h3>
                <p>Segunda a Sexta: 09:00 às 17:30</p>
                <p>Sábado: 09:00 às 13:00</p>
            </div>
            <div className="links">
                <BsWhatsapp />
                <BsTelegram />
                <BsInstagram />
            </div>
        </footer>
    )
}