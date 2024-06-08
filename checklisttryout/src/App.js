import React, { useState } from 'react';
import { FeedDeNotificacoes } from './components/FeedDeNotificacoes';

function App() {
    const [notificacoes, setNotificacoes] = useState([
        {
            source: "Arrola!! Tudo bem?",
            content: "Pintãorest",
            color: "#FF5733"
        },
        {
            source: "ComponenteY",
            content: "Nova notificação 1",
            color: "#33FF57"
        },
        {
            source: "ComponenteY",
            content: "Nova notificação 2",
            color: "blue"
        },
        {
            source: "ComponenteY",
            content: "Nova notificação 3",
            color: "red"
        },
        {
            source: "ComponenteY",
            content: "Nova notificação 4",
            color: "cyan"
        },
        {
            source: "ComponenteY",
            content: "Nova notificação 5",
            color: "purple"
        },
        // Adicione mais notificações conforme necessário
    ]);

    const removeNotificacao = (novasNotificacoes) => {
        // Atualize o estado das notificações com a nova lista de notificações
        setNotificacoes(novasNotificacoes);
    };

    return (
        <div className="App">
            <FeedDeNotificacoes notificacoes={notificacoes} removeNotificacao={removeNotificacao} />
        </div>
    );
}

export default App;