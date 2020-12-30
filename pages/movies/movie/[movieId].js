import { useRouter } from "next/router";
import Link from "next/link";
import {MainLayout} from "../../../layouts/MainLayout";
import {getMoviesById} from "../../../db/movie";

const MovieId = ({ title, revised, genre }) => {
    return (
        <MainLayout headerTitle={'Movies details'}>
            <p><b>Title:</b> {title}</p>
            <p><b>Revised date:</b> {revised}</p>
            <p><b>Genre:</b> {genre}</p>
            <Link href={'/movies'}><a>GO BACK</a></Link>
        </MainLayout>
    );
};

export async function getServerSideProps({ query }) {
    const { title, revised, genre } = getMoviesById(query.movieId)
    return {
        props: { title, revised, genre },
    }
}

export default MovieId;