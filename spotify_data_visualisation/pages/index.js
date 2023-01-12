import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import Head from 'next/head'
import LoginButton from '../components/LoginButton'
import LeftText from '../components/LeftText'
import RightText from '../components/RightText'

export default function Home() {
  const { data: session } = useSession()
  const [listPlaylists, setListPlaylists] = useState([])
  const [listTracks, setListTracks] = useState([])
  const [topArtists, setTopArtists] = useState([])
  const [showPlaylists, setShowPlaylists] = useState(false)
  const [showTracks, setShowTracks] = useState(false)
  const [showArtists, setShowArtists] = useState(false)

  useEffect(() => {
    const getMyPlaylists = async () => {
      const res = await fetch('/api/playlists')
      const { items } = await res.json()
      setListPlaylists(items)
    }

    const getMyTracks = async () => {
      const res = await fetch('/api/tracks')
      const { items } = await res.json()
      setListTracks(items)
      setTopArtists(items)
    }

    getMyPlaylists()
    getMyTracks()
  }, [])

  /* 

This function should create an array of objects where the key is the arist and the value is the total number of times the artist appears in the users library. Using this array we should be able to splice the top 10 or so results to use as inputs in a graphing framework.
*/

  // function tallyArtists(artists = []) {
  //   const tally = {}

  //   artists.forEach((key) => {
  //     tally[key] = tally[key] ? tally[key] + 1 : 1
  //   })
  //   console.log(tally.splice(0, 10))
  //   return tally.splice(0, 10)
  // }

  // console.log('show top artists ', showArtists)
  // console.log('artists ', topArtists)

  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <LoginButton onClick={() => signOut()}>Sign out</LoginButton>
        <hr />
        <button
          onClick={() => {
            setShowTracks(false)
            setShowArtists(false)
            setShowPlaylists(true)
          }}
        >
          Get all my playlists
        </button>
        <button
          onClick={() => {
            setShowPlaylists(false)
            setShowArtists(false)
            setShowTracks(true)
          }}
        >
          Get all my tracks
        </button>
        <button
          onClick={() => {
            setShowTracks(false)
            setShowPlaylists(false)
            setShowArtists(true)
          }}
        >
          Get my top artists
        </button>
        {showPlaylists
          ? listPlaylists.map((item) => (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <img src={item.images[0]?.url} width="100" />
              </div>
            ))
          : null}
        {showTracks
          ? listTracks.map((item) => (
              <div key={item.track.name}>
                <h1>{item.track.name}</h1>
              </div>
            ))
          : null}
        {showArtists
          ? topArtists.map((item) => (
              <div key={item.track.artists[0].name}>
                <h1>{item.track.artists[0].name}</h1>
              </div>
            ))
          : null}
      </>
    )
  }
  return (
    <>
      <LeftText>
        <h1> Welcome to my Spotify Data Visualization website!</h1>
        <h2> To login press the login button.</h2>
      </LeftText>
      <br />
      <div>
        <Image
          className=".image"
          src="/public/images/logo512.png"
          alt="Spotify Logo"
          width={100}
          height={100}
        />
        <RightText>
          <LoginButton onClick={() => signIn()}>Login</LoginButton>
        </RightText>
      </div>
    </>
  )
}
