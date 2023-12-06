import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 50%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${props => props.theme.spacing(5)};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
