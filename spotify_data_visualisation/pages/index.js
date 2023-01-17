import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import LoginButton from '../components/LoginButton'
import LeftText from '../components/LeftText'
import RightText from '../components/RightText'
import spotifyLogoImg from '../public/images/spotifyLogo.png'
import LoginText from '../components/LoginText'
import FullData from '../components/FullData'
import {
  CardImage,
  CardWrapper,
  CardTextTitle,
  CardContainer,
  Separator,
} from '../components/Cards'
import { SignedIn , SignInMessage, NavButtons} from '../components/SignedIn'

export default function Card() {
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

  console.log({ 'top artists': topArtists })

  if (session) {
    return (
      <>
      <SignedIn>
        <SignInMessage>
        Signed in as {session?.token?.email}</SignInMessage> <br />
        <LoginButton onClick={() => signOut()}>Sign out</LoginButton>
        </SignedIn>
        <br />
        <NavButtons>
        <LoginButton
          onClick={() => {
            setShowTracks(false)
            setShowArtists(false)
            setShowPlaylists(true)
          }}
        >
          Get all my playlists
        </LoginButton>
        <LoginButton
          onClick={() => {
            setShowPlaylists(false)
            setShowArtists(false)
            setShowTracks(true)
          }}
        >
          Get all my tracks
        </LoginButton>
        <LoginButton
          onClick={() => {
            setShowTracks(false)
            setShowPlaylists(false)
            setShowArtists(true)
          }}
        >
          Get my top artists
        </LoginButton>
        </NavButtons>
        <FullData>
          {showPlaylists
            ? listPlaylists.map((item) => (
                <CardWrapper>
                  <CardImage img={item.images[0]?.url} />
                  <CardTextTitle>{item.name}</CardTextTitle>
                </CardWrapper>
              ))
            : null}

          {showTracks
            ? listTracks.map((item) => (
                <CardWrapper>
                  <CardImage img={item.track.album.images[0]?.url} />
                  <CardTextTitle>{item.track.name}</CardTextTitle>
                </CardWrapper>
              ))
            : null}

          {showArtists
            ? topArtists.map((item) => (
                <CardWrapper>
                  <div key={item.track.artists[0].name}>
                    <CardTextTitle>{item.track.artists[0].name}</CardTextTitle>
                  </div>
                </CardWrapper>
              ))
            : null}
        </FullData>
      </>
    )
  }
  return (
    <>
      <LeftText>
        <h1> Spotify Data Visualization Website</h1>
        <h2> To login press the login button.</h2>
      </LeftText>
      <br />
      <div>
        <RightText>
          <Image
            src={spotifyLogoImg}
            alt="Spotify Logo"
            width={150}
            height={150}
          />

          <LoginButton onClick={() => signIn()}>Login</LoginButton>
        </RightText>
      </div>
    </>
  )
}
