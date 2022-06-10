import { TEditorField } from '../../types';
import BaseInput from '../../../Base/Input';
import { Container, Column } from './PersonalDetailsStyles';
import EditorSection from '../../Section';

type TPersonalDetailsProps = {
}

const EditorSectionsPersonalDetails = ({}: TPersonalDetailsProps) => {
  return (
    <EditorSection title='Personal Details'>
      <Container>
        <Column>
          <BaseInput label='First Name' />
        </Column>
        <Column>
          <BaseInput label='Last Name' />
        </Column>
      </Container>
    </EditorSection>
  );
};

export default EditorSectionsPersonalDetails;

