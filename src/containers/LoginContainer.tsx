import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import LoginComponent from '../components/LoginComponent';

function LoginContainer() {
  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      backgroundImage: 'url("https://rucampuscartuja.es/wp-content/uploads/2021/11/coger-apuntes.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <HeaderComponent />
      <LoginComponent />
      <FooterComponent />
    </div>
  );
}

export default LoginContainer;
