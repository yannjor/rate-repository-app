import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.textPrimary,
    marginBottom: 10,
  },
  navText: {
    color: 'white',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.navText}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
