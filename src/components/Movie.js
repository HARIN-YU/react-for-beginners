import PropTypes from "prop-types";
import styles from "./Moive.module.css";
import {Link} from "react-router-dom"

function Moive({id, coverImg, title, summary, genres}) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <img className={styles.img} src={coverImg} alt={title} />
                <div className={styles.divide}>
                    <h1 className={styles.title}>
                        <Link to={`/movie/${id}`}>{title}</Link>
                    </h1>
                    <p className={styles.des}>{summary}</p>
                    <ul className={styles.ul}>
                        {genres.map((g) => (
                            <li key={g} className={styles.li}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

Moive.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Moive;