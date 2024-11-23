import styled from "styled-components";

export const DashHeaderContainer = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: ${props => props.theme["green-300"]};
    color: #fff;
    padding: 0.875rem 1rem;
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background: ${props => props.theme["green-500"]};
    }
  }
`
export const SearchFormContainer = styled.form`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  input {
    flex: 1;
    padding: 0.7rem;

    border-radius: 8px;
    border: 1px solid #374151;

    &:focus {
      box-shadow: none;
    }
  }

  button {
    background: ${props => props.theme["yellow-500"]};
    color: #fff;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      cursor: pointer;
      box-shadow: none;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
export const DashboardContainer = styled.div`
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;

  }

  table {
    margin-top: 3rem;
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    box-shadow: 0px 2px 4px #d1d5db;

    th {
      background: #4b5563;
      color: #fff;
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      border-top: 1px solid #9ca3af;
      padding: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50% ;
      }
      &:last-child {
        padding-right: 1.5rem;
      } 
    }
  }
`