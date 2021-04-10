export default class AuthLogin {

    handleAuthentication = (resultLogin) => {
        localStorage.setItem('idCuentaUsuario', resultLogin.idCuentaUsuario);
        localStorage.setItem('Correo', resultLogin.Correo);
        localStorage.setItem('nombre_completo', resultLogin.nombres+' '+resultLogin.apellidos);        
        localStorage.setItem('token', resultLogin.token);
    }

    logout = () => {
        localStorage.removeItem('idCuentaUsuario');
        localStorage.removeItem('Correo');
        localStorage.removeItem('nombre_completo');        
        localStorage.removeItem('token');
    }

    token = () => {    
        return localStorage.getItem("token");          
    }

    useAuth = () =>{
        return localStorage.getItem("token") !== null ? true : false;
    }
}  
