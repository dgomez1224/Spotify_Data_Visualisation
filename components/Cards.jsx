import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 290px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background: black;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  overflow: scroll; 
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${props => props.img});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 130%;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background-clip: text;
  -webkit-background-clip: text;
  color: white;
  padding: 30px 10px 0px 10px;

`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0px 10px;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
`;

export const CardContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row wrap;
  background: transparent;
  
  padding: 10px 0px;
`;

export const SpotifyLink = styled.a`
color: white;
text-decoration: none;
&:hover {
    color: blue;
    font-size: ${props => props.size ? props.size : "1.5rem" };
  }
`

export const GenreList = styled.ul`
    list-style-position: inside;
    display:flex;
    justify-content: space-evenly;
    flex-flow: column;
    padding: 0px;
    font-size: 70%;
`

export const GenreItems = styled.li`

  padding: 2px 0px;

`

