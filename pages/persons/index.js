import Link from "next/link";
import {getUsers} from "../../db/users";
import {MainLayout} from "../../layouts/MainLayout";

const Persons = () => {
    const personArray = getUsers();
    const personList = () => personArray.map(({id, firstName, lastName}) => (
        <li key={id}><Link  href={`/persons/person/[personId]`} as={`/persons/person/${id}`}><a>{`${id} - ${lastName} ${firstName}`}</a></Link></li>
    ))
    return (
        <MainLayout headerTitle={'Person list'}>
            <ul>
                {personList()}
            </ul>
        </MainLayout>
    );
};

export async function getStaticPaths() {
    const personArray = getUsers();
    return {
        paths: personArray.map(({id}) => ({params: {personId: id}}) ),
        fallback: false
    };
}

export default Persons