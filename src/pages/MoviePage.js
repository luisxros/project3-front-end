import styles from './Pages.module.css';
import MovieCard from '../components/MovieCard/MovieCard';


function MoviePage(props) {

    
    return (
     <main className="Page">


        <h1>Trending Movies for Today</h1>

      

            <div className={styles.Card}>

            {props.movieData.results.map((result, idx) => (
                <MovieCard key={idx} result={result} />
             ))}         

            </div>

    </main>
        
    )
}

export default MoviePage;