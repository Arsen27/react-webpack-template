import { withTheme } from 'styled-components';
import { TChildren } from '../../../../types';

import { useExpand, useHover } from '../../../hooks';
import BaseExpand from '../../Base/Expand';
import BaseInput from '../../Base/Input';
import { Container, Main, Title, Period, Content } from './ItemStyles';

type TItemProps = {
  theme: any;
  children: TChildren;
}

const EditorItem = ({ theme, children }: TItemProps) => {
  const [isExpanded, open, close, toggle] = useExpand();
  const [isMainHovered, mainHoverEvents] = useHover();
  
  const getExpandedStyles = {
    background: theme.colors.bg.lightPrimary,
    borderRadius: '0 0 12px 12px',
  };

  const Activator = () => (
    <Main
      { ...mainHoverEvents }
      isExpanded={isExpanded}
      onClick={toggle}
    >
      <Title>(Not specified)</Title>
      <Period>Jun 2022 - Jun 2022</Period>
    </Main>
  );

  return (
    <Container>
      <BaseExpand
        activator={<Activator />}
        isExpanded={isExpanded}
        isPreviewShown={isMainHovered}
        styles={getExpandedStyles}
      >
        <Content>
          { children }
        </Content>
      </BaseExpand>
    </Container>
  );
};

export default withTheme(EditorItem);

