import Link from 'next/link'
import { getMovies } from "../../db/movie";
import {MainLayout} from "../../layouts/MainLayout";
const Locations = () => {
    const movies = getMovies();
    const moviesList = () => movies.map(({id, title, revised, genre}) => (
        <li key={id}>
            <Link  href={`/movies/movie/[movieId]`} as={`/movies/movie/${id}`}>
                <a>{`${id} - ${title}`}</a>
            </Link>
        </li>))
    return (
        <MainLayout headerTitle={'Movies list'}>
            <h2>These links are used pre-rendering «getServerSideProps»</h2>
            <ul>
                {moviesList()}
            </ul>
        </MainLayout>
    );
};

export default Locations;