import styled from "styled-components";

export const SummaryContainer = styled.div`
`
export const SummaryHeaderContainer = styled.header`
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
  }
  `
export const SummaryCardContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  div {
    width: 100%;
    padding: 2rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 8px #d6d3d1;

    h1 {
      display: flex;
      align-items: center;
      font-weight: 500;
      justify-content: space-between;
      font-size: 1.5rem;
      color: #404040;
    }

    strong {
      display: flex;
      margin-top: 1rem;
      font-family: "Baloo 2";
      font-size: 1.5rem;
      color: #16a34a;
    }
  }
`