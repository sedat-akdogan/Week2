const {StyleSheet} = require('react-native');
const {COLORS, SIZES} = require('../constants');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.c4,
  },
  sectionView: {
    padding: 5,
    gap: 10,
  },

  textBox: {
    padding: 10,
    borderRadius: 10,
  },

  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderColor: COLORS.t1,
    borderWidth: 1,
    width: SIZES.title,
    height: SIZES.title,
  },

  textBtn: {
    backgroundColor: COLORS.b1,
    color: 'white',
    fontWeight: '500',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
