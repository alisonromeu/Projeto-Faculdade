import Produto from '../Produto';
import './style.css';

import Calça from '../../img/calca.png';
import Tenis from '../../img/tenis.png';



export default function Main() {
    return (
        <main className='mainContent'>
            <h2>Seja estrela do seu estilo com as roupas incríveis da nossa loja em Taquaritinga!</h2>
            <p>
                Nós temos tudo o que você precisa para se vestir bem e com conforto. Encontre as últimas tendências da moda a preços acessíveis e tenha um guarda-roupa sempre atualizado. Com nossa equipe de atendimento amigável e prestativa, encontrar a roupa certa nunca foi tão fácil. Visite nossas redes sociais ou nossa loja física agora e comece a desfrutar de uma moda mais acessível e descolada!
            </p>

            <div className="containerProducts">
                <Produto product={Calça} name="Calça Jeans" price="R$ 25,90" />
                <Produto product={Tenis} name="Tênis" price="R$ 15,90" />
            </div>

            <p>
                Caiu, caiu, caiu o preço das roupas, hein? A loja toda em promoção, para você levar as peças mais lindas da região pagando uma mixaria!
            </p>
        </main>
    )
}