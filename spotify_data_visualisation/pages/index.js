import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';

export default function Home() {
  const {data: session} = useSession();
  const [list, setList] = useState([]);
  const [listTracks, setListTracks] = useState([])

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const {items} = await res.json();
    setList(items);
  };

  const getMyTracks = async () => {
    const res = await fetch('/api/tracks');
    const {items} = await res.json()
    setListTracks(items);
  };

  


  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
        <button onClick={() => getMyTracks()}>Get all my tracks</button>
        {list.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width="100" />
          </div>
        ))}
        {listTracks.map((item) => (
          <div key={item.track.name}>
            <h1>{item.track.name}</h1>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}