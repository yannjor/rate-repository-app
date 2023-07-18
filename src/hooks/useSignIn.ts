import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/queries';

interface Credentials {
  username: string;
  password: string;
}

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => console.log(error),
  });

  const signIn = async ({ username, password }: Credentials) => {
    const response = await mutate({ variables: { username, password } });
    return response;
  };
  return [signIn, result];
};

export default useSignIn;
