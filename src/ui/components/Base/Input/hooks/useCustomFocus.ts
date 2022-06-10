import React, { useState, useRef } from 'react';

export default function () {
  const $inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  
  const focus = () => {
    setIsFocused(true);
    console.log('focus');
    $inputRef && $inputRef.current!.focus();
  }

  const blur = () => {
    setIsFocused(false);
    $inputRef && $inputRef.current!.blur();
  }

  return [$inputRef, isFocused, focus, blur] as const;
}
