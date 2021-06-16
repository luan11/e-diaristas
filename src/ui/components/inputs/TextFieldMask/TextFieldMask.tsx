import InputMask from 'react-input-mask';

import { OutlinedTextFieldProps } from '@material-ui/core';

import TextField from 'ui/components/inputs/TextField/TextField';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

function TextFieldMask({ mask, ...props }: TextFieldMaskProps) {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
}

export default TextFieldMask;
