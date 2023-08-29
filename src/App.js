import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState("login");

  // TERNÁRIO: Outra forma de fazer guardando em uma variável:
  // const renderizaTela = tela === "login" ? <TelaLogin /> : <TelaCadastro />;

  //Função para alterar o estado tela para "cadastro":
  //   const irParaTelaCadastro = () => {
  //     setTela("cadastro")
  //  }

  // Função que pode ser utilizada para alterar a tela de acordo com o argumento passado para a função
  const alterarTela = (screen) => {
    setTela(screen);
  };

  //---- USANDO O SWITCH CASE ------
  // switch (tela) {
  //   case "login":
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //         <TelaLogin alterarTela={alterarTela} />
  //       </MainContainer>
  //     );
  //   case "cadastro":
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //         <TelaCadastro alterarTela={alterarTela} />
  //       </MainContainer>
  //     );
  //   case "principal":
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //         <TelaPrincipal alterarTela={alterarTela} />
  //       </MainContainer>
  //     );
  //   default:
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //         <p>Página não encontrada</p>
  //       </MainContainer>
  //     );
  // }

  // ------ USANDO if/else ----------
  // if (tela === "login") {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaLogin alterarTela={alterarTela} />
  //     </MainContainer>
  //   );
  // }
  // if (tela === "cadastro") {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaCadastro alterarTela={alterarTela} />
  //     </MainContainer>
  //   );
  // }
  // if (tela === "principal") {
  //   return (
  //     <MainContainer>
  //       <GlobalStyled />
  //       <TelaPrincipal alterarTela={alterarTela} />
  //     </MainContainer>
  //   );
  // }

  return (
    <MainContainer>
      <GlobalStyled />

      {/* ------ USANDO TERNÁRIO ------ */}

      {/* Chamando a a variável que guarda o ternário: */}
      {/* {renderizaTela} */}

      {/* Usando o ternário diretamente no JSX: */}
      {/* {tela === "login" ? <TelaLogin /> : <TelaCadastro />} */}

      {/* ------ USANDO CURTO-CIRCUITO ------ */}

      {tela === "login" && <TelaLogin alterarTela={alterarTela} />}
      {tela === "cadastro" && <TelaCadastro alterarTela={alterarTela} />}
      {tela === "principal" && <TelaPrincipal alterarTela={alterarTela} />}
    </MainContainer>
  );
}

export default App;