import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import LoginButton from '../components/LoginButton'
import LeftText from '../components/LeftText'
import { RightText, RightTextPadding } from '../components/RightText'
import spotifyLogoImg from '../public/images/spotifyLogo.png'
import LoginText from '../components/LoginText'
import FullData from '../components/FullData'
import {
  CardImage,
  CardWrapper,
  CardTextTitle,
  CardContainer,
  SpotifyLink,
  CardTextBody,
  CardTextWrapper,
  GenreList,
  GenreItems,
} from '../components/Cards'
import { SignedIn, SignInMessage, NavButtons } from '../components/SignedIn'

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
    }

    const getMyArtists = async () => {
      const res = await fetch('/api/artists')
      const { items } = await res.json()
      setTopArtists(items)
    }

    getMyPlaylists()
    getMyTracks()
    getMyArtists()
  }, [])

  // console.log({ 'top artists': topArtists })
  // console.log({ 'top track': listTracks })
  console.log({ playlists: listPlaylists })

  if (session) {
    return (
      <>
      <Head>
        <title>Spotify Data Visualization</title>
      </Head>
        <SignedIn>
          <SignInMessage>Signed in as {session?.token?.email}</SignInMessage>{' '}
          <br />
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
            Get my top tracks
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
                <CardContainer>
                  <CardWrapper>
                    <CardImage img={item.images[0]?.url} />
                    <CardTextWrapper>
                      <CardTextTitle>
                        <SpotifyLink href={item.external_urls.spotify}>
                          {item.name}
                        </SpotifyLink>
                      </CardTextTitle>
                      <CardTextBody>
                        Total Tracks: {item.tracks.total}
                      </CardTextBody>
                      <CardTextBody>
                        Owner:{' '}
                        <SpotifyLink href={item.owner.external_urls.spotify} size = {"1.3rem"} >
                          {' '}
                          {item.owner.display_name}
                        </SpotifyLink>
                      </CardTextBody>
                    </CardTextWrapper>
                  </CardWrapper>
                </CardContainer>
              ))
            : null}

          {showTracks
            ? listTracks.map((item) => (
                <CardContainer>
                  <CardWrapper>
                    <CardImage img={item.album.images[0]?.url} />
                    <CardTextWrapper>
                      <CardTextTitle>
                        <SpotifyLink href={item.external_urls.spotify}>
                          {item.name}
                        </SpotifyLink>
                      </CardTextTitle>
                      <CardTextBody>
                        Artist:{' '}
                        {item.artists.map((artist) => (
                          <div>{artist.name}</div>
                        ))}
                      </CardTextBody>
                      <CardTextBody>Album: {item.album.name}</CardTextBody>
                      <CardTextBody>
                        Release Date: {item.album.release_date}
                      </CardTextBody>
                    </CardTextWrapper>
                  </CardWrapper>
                </CardContainer>
              ))
            : null}

          {showArtists
            ? topArtists.map((item) => (
                <CardContainer>
                  <CardWrapper>
                    <CardImage img={item.images[0]?.url} />
                    <CardTextWrapper>
                      <CardTextTitle>
                        <SpotifyLink href={item.external_urls.spotify}>
                          {item.name}
                        </SpotifyLink>
                      </CardTextTitle>
                      <CardTextBody>
                        Total Followers: {item.followers.total}
                      </CardTextBody>
                      <CardTextBody>
                        Genres:
                        <GenreList>
                          {item.genres.map((genre) => (
                            <GenreItems>{genre}</GenreItems>
                          ))}
                        </GenreList>
                      </CardTextBody>
                    </CardTextWrapper>
                  </CardWrapper>
                </CardContainer>
              ))
            : null}
        </FullData>
      </>
    )
  } else if (session === null)
    return (
      <>
      <Head>
        <title>Login</title>
      </Head>
        <LeftText>
          <h1> Spotify Data Visualization Website</h1>
          <h2> To login press the login button.</h2>
        </LeftText>
        <br />
        <div>
          <RightText>
            <RightTextPadding>
              <Image
                src={spotifyLogoImg}
                alt="Spotify Logo"
                width={150}
                height={150}
              />
            </RightTextPadding>
            <RightTextPadding>
              <LoginButton onClick={() => signIn()}>Login</LoginButton>
            </RightTextPadding>
          </RightText>
        </div>
      </>
    )
}
