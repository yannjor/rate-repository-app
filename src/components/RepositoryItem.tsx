import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Repository } from '../types';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: 7,
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  primaryMetadata: {
    flex: 1,
  },
  description: {
    marginBottom: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
  },
  secondaryMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const formatNum = (num: number): string => {
  return num >= 1000 ? `${(Math.abs(num) / 1000).toFixed(1)}k` : num.toString();
};

const RepoositoryItem = (props: Repository) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.authorAvatar}
          source={{ uri: props.ownerAvatarUrl }}
        />
        <View style={styles.primaryMetadata}>
          <Text fontWeight="bold">{props.fullName}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.language}>{props.language}</Text>
        </View>
      </View>
      <View style={styles.secondaryMetadata}>
        <View>
          <Text fontWeight="bold">{formatNum(props.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View>
          <Text fontWeight="bold">{formatNum(props.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View>
          <Text fontWeight="bold">{formatNum(props.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View>
          <Text fontWeight="bold">{formatNum(props.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepoositoryItem;
