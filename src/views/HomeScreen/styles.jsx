import {StyleSheet} from 'react-native';
import COLORS from '../../assets/global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    backgroundColor: COLORS.green,
    flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner_title: {
    fontSize: 18,
    color: COLORS.white,
  },
  banner_subtitle: {
    fontSize: 12,
    color: COLORS.white,
    marginTop: 20,
  },
  content: {
    backgroundColor: COLORS.white,
    flex: 3.85,
  },
  content_text: {
    fontSize: 13,
    color: COLORS.gray,
    fontWeight: '500',
    marginTop: 50,
    marginHorizontal: 20,
    lineHeight: 18,
  },
  vote: {
    backgroundColor: COLORS.white,
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    backgroundColor: COLORS.white,
    flex: 1.1,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray_break,
  },
  footer_container: {padding: 5, paddingHorizontal: 10},
  footer_text: {
    fontSize: 11,
    color: COLORS.grey,
    fontWeight: '400',
    textAlign: 'center',
  },
});
