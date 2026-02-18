import { loginStyle, generalStyle } from '../styles/styles';
import LangSwitcher from './custom/LangSwitcher';


function HeaderComponent() {
    return (
        <header style={{ ...generalStyle.headerStyle, position: 'relative', zIndex: 1, height: 'auto' }}>
            <a href="https://www.upct.es/">
                <img
                    src="https://www.upct.es/img/estructura/logo_upct.svg"
                    alt="upct-logo"
                    style={{ height: '40px', marginRight: '10px' }}
                />
            </a>
            <a href="https://teleco.upct.es/">
                <img
                    src="https://teleco.upct.es/themes/teleco/assets/img/teleco.png"
                    alt="etsit-logo"
                    style={{ height: '40px', marginRight: '10px' }}
                />
            </a>
            <div style={{ marginLeft: 'auto' }}>
                <LangSwitcher />
            </div>
        </header>
    );
}

export default HeaderComponent;
