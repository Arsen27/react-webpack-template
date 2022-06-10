import BaseInput from '../../../../Base/Input';
import EditorItem from '../../../Item';
import { Row } from '../../../Item/ItemStyles';
import { Container } from './ItemStyles';

type TItemProps = {
}

const EditorSectionsEmploymentHistoryItem = ({}: TItemProps) => {
  return (
    <EditorItem>
      <Row>
        <BaseInput label='Job Title' />
        <BaseInput label='Employer' />
      </Row>
    </EditorItem>
  );
};

export default EditorSectionsEmploymentHistoryItem;

