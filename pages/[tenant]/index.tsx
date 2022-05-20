import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css'

const Home = () => {

  function showMenu() {
    //
  }

  function handleSearch(searchValue: string) {
    //
  }

  return (
    <div className={styles.header}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo(a)</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
             <div className={styles.menuButton} onClick={showMenu}>
               <div className={styles.menuButtonLine}></div>
               <div className={styles.menuButtonLine}></div>
               <div className={styles.menuButtonLine}></div>
             </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor="#FB9400"
            onSearch={handleSearch}
          />
        </div>
      </header>
    </div>
  );
}

export default Home