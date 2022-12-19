import { StyleSheet } from 'react-native';

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'MartinMono-Regular',
    color: COLORS.primary,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'MartinMono-Regular',
    color: COLORS.gray,
  },
});
