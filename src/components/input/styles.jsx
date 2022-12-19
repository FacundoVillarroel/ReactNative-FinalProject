import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'MartinMono-Regular',
    marginBottom: 10,
  },
  message: {
    marginBottom:15
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'MartinMono-Regular',
    color: COLORS.white,
  },
});
