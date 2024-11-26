import { loginStyle, generalStyle } from '../styles/styles';


function FooterComponent() {
    return (
        <footer style={{
            ...generalStyle.footerStyle,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
        }}>
            <p>&copy; 2024 Andrea Torres Lucas | <a href="mailto:andrea.torresl@edu.upct.es">andrea.torresl@edu.upct.es</a></p>
        </footer>
    );
}

export default FooterComponent;


