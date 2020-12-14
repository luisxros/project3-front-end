import styles from './Pages.module.css';
import TvCard from '../components/TvCard/TvCard';

function TvPage(props) {

    
    return (

        
        <main className="Page">
            

             <h1>Trending Tv Shows for Today</h1>

             <div className={styles.Card}>

             {props.tvData.results.map((result, idx) => (
                <TvCard key={idx} result={result} />
                ))}         

             </div>
            
          
        </main>
        
    )
}

export default TvPage;