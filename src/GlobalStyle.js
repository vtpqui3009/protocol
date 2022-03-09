import styled from "styled-components";
export const StyledHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
  @media (max-width: 480px) {
    ${"" /* padding: 0 2rem; */}
  }
`;
export const StyledHeaderLink = styled.div`
  & > span,
  & > a {
    line-height: 3rem;
    margin-right: 3.6rem;
    text-decoration: none;
    color: #ffffff;
    transition: 0.2s ease-in-out;
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
      color: #e6007a;
    }
  }
`;
export const StyleHeroBanner = styled.div`
  height: 100%;
  width: 100%;
  & > img {
    background-attachment: fixed;
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
`;
