import styled, { css } from 'styled-components';

export const Container = styled.section`
`;

export const Header = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

export const Description = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const Content = styled.div`
  margin-top: 30px;
`;
