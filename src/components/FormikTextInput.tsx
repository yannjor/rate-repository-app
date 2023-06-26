import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import { TextInputProps } from '../types';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.errorColor,
    marginTop: 5,
    marginBottom: 5,
  },
  errorInput: {
    borderColor: theme.colors.errorColor,
  },
  input: { marginBottom: 10 },
});

interface Props extends TextInputProps {
  name: string;
}

const FormikTextInput = ({ name, ...props }: Props) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        style={showError ? styles.errorInput : styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
