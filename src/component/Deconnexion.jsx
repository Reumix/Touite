const Deconnexion = () => {
   
   function submit(e) {
      e.preventDefault();

      window.sessionStorage.setItem("token", "");

   }
   
   return (
      <form onSubmit={submit}>
         <button id="full-drop" type="submit">Se déconnecter</button>
      </form>
   )
}

export default Deconnexion;