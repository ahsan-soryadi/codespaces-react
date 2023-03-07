import '../App.css';

const Home = () => {
    const logInUser = {
        firstName: 'pandu',
        lastName : 'wibisana',
        id: '20961546'
    }

   return (
    <div className="main">
                    <h2>WELCOME TO WTM ONLINE {logInUser.firstName.toUpperCase()}</h2>
                    <p>ini ceritanya gambar</p>
    </div>
   )
}
export default Home;