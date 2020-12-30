import Link from "next/link";
import {getUserById} from "../../../db/users";
import {MainLayout} from "../../../layouts/MainLayout";
import {getMoviesById} from "../../../db/movie";
function PersonDetails ({firstName, lastName, email, gender, ipAddress, dateOfBirth}) {

    return (
        <MainLayout headerTitle={'Person details'}>
            <p><b>Last name: </b> {lastName} </p>
            <p><b>First name: </b> {firstName} </p>
            <p><b>Email address: </b> {email} </p>
            <p><b>Gender: </b> {gender} </p>
            <p><b>IP address v4: </b> {ipAddress} </p>
            <p><b>Date of birth: </b> {dateOfBirth} </p>
            <Link href={'/persons'}><a>GO BACK</a></Link>
        </MainLayout>
    );
};

export async function getStaticProps({ params }) {
    const {
              firstName,
              lastName,
              email,
              gender,
              ipAddress,
              dateOfBirth
          } = getUserById(params.personId)
    return {
        props: {
            firstName,
            lastName,
            email,
            gender,
            ipAddress,
            dateOfBirth
        },
    }
}

export default PersonDetails;