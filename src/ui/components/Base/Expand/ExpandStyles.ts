import styled, { css } from 'styled-components';

// const closedStyles = ({ isPreviewShown, transition, theme }) => {
//   const basePreviewStyles = `
//     border-radius: 0 0 10px 10px;
//     background: ${theme.colors.accent.additional[1]} !important;

//     margin: 0 auto;

//     overflow: hidden;
//     transition: ${transition}s;

//     width: 90%;
//   `;

//   const previewShownStyles = `
//     ${basePreviewStyles}

//     max-height: 6px;
//     height: 6px;

//     opacity: 1;
//     visiblity: visible;
//   `;

//   const previewHiddenStyles = `
//     ${basePreviewStyles}

//     max-height: 0;
//     height: 0;

//     visiblity: hidden;
//     opacity: 0;
//   `;

//   return isPreviewShown ? css([previewShownStyles]) : css([previewHiddenStyles]);
// }

export const Container = styled.div`
`;

export const Activator = styled.div``;

export const ContentWrapper = styled.div``;

const contentClosedStyles = ({ transition }) => css `
  max-height: 0;

  visiblity: hidden;
  opacity: 0;
  transition: ${transition}s;
`;

const contentOpenedStyles = ({ transition, scrollHeight }) => css`
  opacity: 1;
  transition: ${transition}s;
  visiblity: visible;

  max-height: ${scrollHeight}px;
  height: auto;
  width: 100%;
`;

export const Content = styled.div`
  ${(props) => props.isExpanded ? contentOpenedStyles(props) : contentClosedStyles(props)}
`;

const previewShownStyles = css`
  max-height: 6px;
  height: 6px;

  opacity: 1;
  visiblity: visible;
`;

const previewHiddenStyles = css`
  max-height: 0;
  height: 0;

  visiblity: hidden;
  opacity: 0;
`;

export const Preview = styled.div`
  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.colors.accent.additional[1]} !important;

  margin: 0 auto;

  overflow: hidden;
  transition: ${({ transition }) => transition}s;

  width: 90%;

  ${({ isPreviewShown, isExpanded }) => (isPreviewShown && !isExpanded) ? previewShownStyles : previewHiddenStyles}
`;

