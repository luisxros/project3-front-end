import styles from './Pages.module.css';

function TvPage(props) {

    
    return (

        
        <main className="Page">
            

        <div className={styles.Card}>
            <img src={`https://image.tmdb.org/t/p/w200${props.result.poster_path}`} alt= "" />
            <h5>{props.result.name}</h5>
        </div>
            
          
        </main>
        
    )
}

export default TvPage;