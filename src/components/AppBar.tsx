import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.textPrimary,
    marginBottom: 10,
  },
  links: {
    flexDirection: 'row',
    gap: 15,
  },
  navText: {
    color: 'white',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.links}>
          <Link to="/">
            <Text style={styles.navText}>Repositories</Text>
          </Link>
          <Link to="/signin">
            <Text style={styles.navText}>Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
