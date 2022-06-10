import styled, { css } from 'styled-components';

export const Container = styled.div`
`;

export const Main = styled.div`
  cursor: pointer;

  padding: 28px 28px;

  border-radius: ${({ isExpanded }) => isExpanded ? '12px 12px 0 0' : '12px'};
  background: ${({ theme }) => theme.colors.bg.lightPrimary};

  transition: .3s;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Period = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const Content = styled.div`
  padding: 28px 28px;
  /* height: 6px;
  width: 90%;

  margin: 0 auto;

  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.colors.accent.additional[1]};
  opacity: 0.8; */
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
