import { ContatoTypes } from "../Componentes/ContatoForm";

export function EmailTemplate(body: ContatoTypes) {
    return (
        <div>
            <h1>Contato Site - Gripp & Baamonde</h1>
            <p>Nome: {body.nome}!</p>
            <p>E-mail: {body.email}!</p>
            <p>Telefone: {body.telefone}!</p>
            <p>Mensagem: <br /> {body.mensagem}!</p>
        </div>
    )
};