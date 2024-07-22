import styles from './MovieBox.module.css'

export default function MovieBox({ movie }) {
  let url = 'public/PosterNotFound.png';
  if (movie?.poster_path) url = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

  return (
    <div className={styles.container} style={{backgroundImage: `url(${url})`}}>
      <p>{movie?.title}</p>
      <p>{movie?.release_date}</p>
    </div>
  )
}
