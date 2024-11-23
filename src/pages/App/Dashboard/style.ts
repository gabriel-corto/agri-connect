import styled from "styled-components";

export const DashboardContainer = styled.div`
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    color: ${props => props.theme["gray-900"]};
  }

  table {
    margin-top: 3rem;
    
  }
`