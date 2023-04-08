import './style.css';
import Logo from '../../img/logo-semfundo.png';

export default function Navbar() {
    return (
        <div className='content'>
            <navbar className="menu">
                <img src={Logo} alt="Logo" className='logo' />
                <h1>Vem-que-Tem</h1>

                <ul className='list'>
                    <li className='list-item'><a href="#">Home</a></li>
                    <li className='list-item'><a href="#">Sobre</a></li>
                    <li className='list-item'><a href="#">Contato</a></li>
                </ul>
            </navbar>
        </div>
    )
}