import styled from "styled-components";

export const Container = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  margin: 1rem 0;

  td {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
