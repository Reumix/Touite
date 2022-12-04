import { Link } from "react-router-dom";

const Inscription = () => {
    return (
        <div className="inscription">
            <h1>Inscription</h1>
            <form action="/" method="get">
                <input type="text" placeholder="Nom"></input>
                <input type="text" placeholder="Prénom"></input>
                <input type="text" placeholder="Adresse mail"></input>
                <input type="text" placeholder="Mot de passe"></input>
                <input type="text" placeholder="Confirmer le mot de passe"></input>
                <button type="submit">Inscription</button>
            </form>
            <Link to={'/'}>Retour</Link>
        </div>
    )
}

export default Inscription;