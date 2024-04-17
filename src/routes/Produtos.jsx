import { useNavigate } from "react-router-dom"


function Produtos() {

    //usenavigate tem a função efazer redirecionamento de componetes 
    const navigate = useNavigate

    // criando a função handleLogout
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("saindo da sessão...")
        navigate("/");

    }
    return (
        <>
            <h1>ACESSO RESTRITO</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Produtos