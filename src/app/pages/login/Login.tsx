import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'teste@email.com' && senha === '12345') {
            navigate('/home');
        }
    }

    return (
        <div style={{
            display: 'flex', // Define o tipo de exibição para flex
            justifyContent: 'center', // Centraliza o conteúdo horizontalmente
            alignItems: 'center', // Centraliza o conteúdo verticalmente
            height: '100vh', // Altura total da janela de visualização
            width: '100vw', // Largura total da janela de visualização
        }}>
            <div style={{
                width: "300px",
                border: "1px solid #ddd",
                padding: "30px",
                borderRadius: "5px"
            }}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: "10px"
                }}>
                    <label>
                        <span>Email: </span>
                        <input style={{ width: "100%", height: "25px" }}
                               value={email}
                               placeholder="Email"
                               type="email"
                               onChange={(e) => setEmail(e.target.value)}
                               required />
                    </label>

                    <label>
                        <span>Senha: </span>
                        <input style={{ width: "100%", height: "25px" }}
                               value={senha}
                               placeholder="Senha"
                               type="password"
                               onChange={(e) => setSenha(e.target.value)}
                               required />
                    </label>

                    <button type="button"
                            onClick={handleLogin}
                            style={{
                                width: "150px",
                                alignSelf: "center",
                                marginTop: "20px",
                                height: "30px",
                                borderRadius: "4px"
                            }}>Entrar</button>
                </form>
            </div>
        </div>
    );
};
