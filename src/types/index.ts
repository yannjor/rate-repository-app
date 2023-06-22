import { TextProps } from 'react-native/types';

export interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

export interface CustomTextProps extends TextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}
