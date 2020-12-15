import { Link } from 'react-router-dom'
function HomePage(props) {
    return (
        <main className="Page">
            <div className="HomePage">

            <div className="Words">

                <h1>Welcome to #Trending!</h1>
                <p>A site where you will be able to see the Movies or Shows that are trending Today</p>
                <p>If you are new to the site <Link to='/signup'>Signup</Link>!</p>
                <p>Otherwise <Link to="login">Login</Link></p>
                <p>Have fun!</p>
            
            </div>

            </div>
        </main>
        
    )
}

export default HomePage;