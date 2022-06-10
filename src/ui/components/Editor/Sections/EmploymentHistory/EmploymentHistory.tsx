import EditorItem from '../../Item/Item';
import EditorSection from '../../Section/Section';
import { Container } from './EmploymentHistoryStyles';
import EditorSectionsEmploymentHistoryItem from './Item/Item';

type TEmploymentHistoryProps = {
}

const description = 'Include your last 10 years of relevant experience and dates in this section. List your most recent position first.';

const EditorSectionsEmploymentHistory = ({}: TEmploymentHistoryProps) => {
  return (
    <EditorSection
      title='Employment History'
      description={description}
    >
      <EditorSectionsEmploymentHistoryItem />
    </EditorSection>
  );
};

export default EditorSectionsEmploymentHistory;

