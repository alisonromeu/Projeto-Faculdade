import './style.css';

export default function Produto({product, name, price}) {
    return (
        <div className="containerProduct">
            <img src={product} alt="Imagem do Produto" className='imgProduct' />
            <h4 className="titleProduct">{name}</h4>
            <p>Em até 5x de</p>
            <p><strong>{price}</strong></p>
        </div>
    )
}