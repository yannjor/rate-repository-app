import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { TextInputProps } from '../types';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }: TextInputProps) => {
  const textInputStyle = [style, styles.input];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
