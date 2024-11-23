import styled from "styled-components";
export const HeroContainer = styled.div`
  padding: 2rem 12rem;

  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;

  div {
    max-width: 50%;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      line-height: 4rem;
      font-family: "Baloo 2";
      font-size: 3rem;
      color: ${props => props.theme["gray-900"]};
    } 
    p {
      line-height: 2rem;
      font-size: 1.2rem;
    }

    a {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      padding: 1rem;
      border-radius: 999px;
      font-weight: bold;

      text-decoration: none;
      color: ${props => props.theme.white};
      background: ${props => props.theme["gray-900"]};
    }
  }

  img {
    width: 40%;
    animation: appear alternate 2s infinite;
  }

  @keyframes appear {
    0% {
      transform: scale(0.9);
    }
  }
`