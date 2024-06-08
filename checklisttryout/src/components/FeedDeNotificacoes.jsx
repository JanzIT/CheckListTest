import React from 'react';
import { Notificacao } from './Notificacao';

export const FeedDeNotificacoes = ({ notificacoes, removeNotificacao }) => {
    const handleRemoverNotificacao = (index) => {
        // Remova a notificação na posição index
        const novasNotificacoes = notificacoes.filter((_, i) => i !== index);
        // Chame a função removeNotificacao passando a nova lista de notificações
        removeNotificacao(novasNotificacoes);
        console.log("Notificação removida!");
    }

    return (
        <div>
            {notificacoes.length !== 0 ? (
                notificacoes.map((notificacao, index) => (
                    <div key={notificacao.content}>
                        <Notificacao
                            content={notificacao.content}
                            source={notificacao.source}
                            color={notificacao.color}
                        />
                        <button onClick={() => handleRemoverNotificacao(index)}>Check</button>
                    </div>
                ))
            ) : (
                <p>Não há novas notificações</p>
            )}
        </div>
    );
}