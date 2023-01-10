import Link from "next/link";
import Head from "next/head";
import Script from 'next/script'


export default function Login() {
    return (
        <>
        <Head>
            <title>LOGIN</title>
        </Head>
        
      <a href="https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fclient_id%3D20e07b9a3e3b4bb8b303721a3d9afa41%26response_type%3Dcode%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A3000%2Fcallback%26scope%3Duser-library-read" passhref={true}>LOGIN</a>
        </>
        )
}