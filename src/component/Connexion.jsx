import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
    //const { account, setAccount } = useAccountStore();

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((res) => setAccount(account))
    // })

    return (
        <div className="connexion">
            <h1>Connexion</h1>
            <form action="/" method="get">
                <input type='text' placeholder="Adresse mail" name="mail"></input>
                <input type='text' placeholder="Mot de passe" name="mdp"></input>
                <button type="submit">Connexion</button>
            </form>
            <Link to={'/'}>Retour</Link>
        </div>
    )
}

export default Connexion;