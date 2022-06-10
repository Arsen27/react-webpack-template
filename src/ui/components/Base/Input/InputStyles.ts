import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  height: 58px;
  min-width: 255px;
  width: 100%;

  padding: 20px;
  box-sizing: border-box;
  
  position: relative;

  border-radius: 11px;
  ${({ isValueSet, theme }) => isValueSet ? css`
    border: 1px solid ${theme.colors.border.light};
  ` : css`
    border: 1px solid ${theme.colors.border.primary};
  `}
 
  font-size: 14px;

  cursor: pointer;
  transition: .2s;
`;

const LABEL_TRANSITION = '.2s';
export const Label = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  transition: ${LABEL_TRANSITION};

  ${props => props.isFocused && css`
    font-size: 11px;
    color: ${props.theme.colors.text.dark};

    top: 15px;

    transition: ${LABEL_TRANSITION};
  `}
`;

export const InputElement = styled.input`
  background: transparent;
  border: 0;

  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;

  font-size: 16px;

  ${props => props.isFocused ? css`
    opacity: 1;
    transition: .2s;
  ` : css`
    overflow: hidden;
    opacity: 0;
    transition: .2s;
    cursor: inherit;
  `}
`;
