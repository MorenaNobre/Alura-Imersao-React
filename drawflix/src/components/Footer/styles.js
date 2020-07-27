import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid var(--primary);
  padding: 1px;
  color: var(--blackLighter);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  p{
    margin: 15px;
  }
`;
