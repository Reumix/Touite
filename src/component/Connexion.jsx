import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
    const [name, setName] = useState("");
    const [mdp, setMdp] = useState("");

    async function submitLogin(e) {
        e.preventDefault();

        window.sessionStorage.setItem("username", name);

        const requestOptionsToken = {

            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ 
                username: name,
                password: mdp
         })
        };

        await fetch('https://127.0.0.1:8000/api/login_check', requestOptionsToken)
            .then(response => response.json())
            .then((response) => {window.sessionStorage.setItem("token", response.token)})
    }

    return (
        <div className="connexion">
            <h4>Connexion</h4>
            <form onSubmit={submitLogin}>
                <input id="left-drop-input" type='text' placeholder="Nom d'utilisateur" value={name} onChange={(event) => setName(event.target.value)}/>
                <input id="no-drop-input" type='text' placeholder="Mot de passe" value={mdp} onChange={(event) => setMdp(event.target.value)}/>
                <button id="right-drop-button" type="submit">Connexion</button>
            </form>
            <Link to={'/'}>Retour</Link>
        </div>
    )
}

export default Connexion;