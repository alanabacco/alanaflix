import styled from "styled-components";

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  overflow: hidden;
  cursor: pointer;

  width: 298px;
  height: 197px;
  background-image: ${({ $url }) => `url(${$url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  padding: 16px;

  display: flex;
  align-items: flex-end;
  flex: 0 0 298px;
  gap: 20px;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  /* &:not(:first-child) {
    margin-left: 20px;
  } */
`;

export default VideoCardContainer;
