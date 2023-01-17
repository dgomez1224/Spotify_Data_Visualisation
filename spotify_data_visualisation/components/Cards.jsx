import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
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
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background-clip: text;
  -webkit-background-clip: text;
  color: green;
`;

export const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

export const Separator = styled.span`
margin-left: 10px;
margin-right: 10px;
`;

