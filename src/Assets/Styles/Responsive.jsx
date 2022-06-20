import { css } from 'styled-components';

function Responsive(props) {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
}

export default Responsive;
