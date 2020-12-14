import styles from './Pages.module.css';

function MoviePage(props) {

    
    return (
        <main className="Page">
           
          
        <div className={styles.Card}>
        <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt= "" />
         <h5>{props.result.title}</h5>
        </div>
            
          
        </main>
        
    )
}

export default MoviePage;