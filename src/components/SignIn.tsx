import { Formik } from 'formik';
import * as yup from 'yup';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

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
  const [signIn] = useSignIn();

  const onSubmit = async (values: FormValues) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
