import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
});

interface Props {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const SignInForm = ({ onSubmit }: Props) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput
        name="password"
        secureTextEntry={true}
        placeholder="password"
      />
      <Pressable onPress={() => onSubmit()}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

interface FormValues {
  username: string;
  password: string;
}

const SignIn = () => {
  const initialValues = { username: '', password: '' };
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
