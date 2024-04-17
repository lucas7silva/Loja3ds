import { useRef } from "react"
import Produtos from "./Produtos";
function Login() {

    /* Hock- UseRef- ele retorna uma referencia a
    um elemento ou componente sem ter que redezerizado novamente */
    const usuario = useRef();
    const senha = useRef();

    //pegando os dados do usuario e senha e gravando na sessao
    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha");


    const handleSubmit = () => {
        if (usuario.current.value == "Admin" && senha.current.value == "12345") {

            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);

            sessionStorage.setItem("usuario", "Admin");
            sessionStorage.setItem("senha", token);
        }
        else {
            alert("usuario e senha invalido")
        }
    }

    return (
        <section className="login">
            {getUsuario && getSenha ? (
                <Produtos />
            ) : (
                <form onSubmit={handleSubmit} >
                    <p>
                        Usuario:
                        <input type="text" placeholder="DIgite seu usuario" ref={usuario}></input>
                    </p>
                    <p>
                        Senha:
                        <input type="password" placeholder="DIgite sua senha" ref={senha}></input>
                    </p>
                    <button type="submit">Login </button>
                </form>
            )}  {/*final do operador ternario*/}
        </section>
    )
}
export default Login