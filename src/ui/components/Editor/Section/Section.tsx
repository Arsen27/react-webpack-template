import { ReactChild } from 'react';
import { useExpand } from '../../../hooks';
import BaseExpand from '../../Base/Expand/Expand';

import { Container, Header, Title, Description, Content } from './SectionStyles';

type TSectionProps = {
  title: string;
  description: string;
  children?: JSX.Element | JSX.Element[];
}

const EditorSection = ({ title, description, children }: TSectionProps) => {
  const [isExpanded, open, close, toggle] = useExpand();

  const Activator = () => (
    <Header onClick={() => toggle()}>
      <Title>{ title }</Title>
    </Header>
  );

  return (
    <Container>
      <BaseExpand
        activator={<Activator />}
        isExpanded={isExpanded}
      >
        <Description>{ description }</Description>

        <Content>
          { children }
        </Content>
      </BaseExpand>
    </Container>
  );
};

export default EditorSection;

