import { useRef } from 'react';
import { Container, Activator, ContentWrapper, Content, Preview } from './ExpandStyles';

type TExpandProps = {
  activator: JSX.Element;
  isExpanded: boolean;
  children: JSX.Element | JSX.Element[];
  transition?: number;
  isPreviewShown?: boolean;
  styles?: Record<string, string>;
}

const BaseExpand = ({ isExpanded, styles, activator, isPreviewShown = false, transition = 0.3, children }: TExpandProps) => {
  const $ref = useRef<HTMLDivElement>(null);

  const getScrollHeight = () => $ref && $ref.current && $ref.current.scrollHeight;

  return (
    <Container
      ref={$ref}
    >
      <Activator>
        { activator }
      </Activator>

      {/* <ContentWrapper>
        <Preview
          isExpanded={isExpanded}
          isPreviewShown={isPreviewShown}
          transition={transition}
        /> */}

        <Content
          isExpanded={isExpanded}
          scrollHeight={getScrollHeight()}
          transition={transition}
          style={styles}
        >
          { children }
        </Content>
      {/* </ContentWrapper> */}
    </Container>
  );
};

export default BaseExpand;

