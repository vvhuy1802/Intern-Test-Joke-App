import {StyleSheet} from 'react-native';
import COLORS from '../../assets/global/colors';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 55,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img_logo: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  container_user: {flexDirection: 'row', alignItems: 'center'},
  infor_title: {
    fontSize: 10,
    color: COLORS.gray,
  },
  infor_name: {
    fontSize: 10,
    color: COLORS.black,
    textAlign: 'right',
  },
  img_avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: 10,
  },
});
