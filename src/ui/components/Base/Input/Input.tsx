import { useState } from 'react';

import { useClickOutside } from '../../../hooks';
import { useCustomFocus } from './hooks';
import { Container, Label, InputElement } from './InputStyles';

type TInputProps = {
  label?: string;
};

const BaseInput = ({ label }: TInputProps) => {
  const [value, setValue] = useState('');
  const [$inputRef, isFocused, focus, blur] = useCustomFocus();

  const containerRef = useClickOutside(() => value || blur());

  const handleContainerClick = () => focus();

  return (
    <Container
      ref={containerRef}
      onClick={handleContainerClick}
      isValueSet={!!value}
    >
      <Label isFocused={isFocused}>{ label }</Label>

      <InputElement
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={$inputRef}
        isFocused={isFocused}
      />
    </Container>
  );
};

export default BaseInput;
