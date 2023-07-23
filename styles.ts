import { Platform, StyleSheet } from 'react-native';

const isWeb = Platform.OS === 'web';

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    width: isWeb ? '100vw' : '100%',
    height: isWeb ? '100vh' : '100%',
    color: 'white',
    position: 'relative',
    zIndex: 1,
    // backgroundImage: './../assets/blur.png'
  },
  text: {
    color: 'white',
    // fontFamily: 'serif',
    fontFamily: 'helvetica',
    fontSize: 17,
    zIndex: 10,
  },
  textAddress: {
    color: 'white',
    fontFamily: 'helvetica',
    fontSize: 14,
    // fontWeight: '600',
    zIndex: 10,
    backgroundColor: 'black',
    padding: 5,
    opacity: 0.5,
  },
  title: {
    color: 'white',
    fontFamily: 'helvetica',
    fontSize: 20,
    padding: 30,
    // fontWeight: '600',
    zIndex: 10,
  },
  logo: {
    width: 166,
    height: 166,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: isWeb ? 50 : 100,
    paddingBottom: isWeb ? 10 : 100,
    color: 'white',
    zIndex: 100,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#079697',
    backgroundColor: 'white',
  },
  dots: {
    position: 'absolute',
  },
  imageBackground: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    zIndex: 0,
    // or 'stretch'
  },
  banner: {
    // backgroundColor: '#858084',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,

    // zIndex:
  },
  bannerDark: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    backgroundColor: 'black',
    padding: 5,
  },
  linearGradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.9,
  },
  camera: {
    height: 160,
    width: 150,
    borderRadius: 200,
    // borderColor: '#079697',
    // borderStyle: 'dot',
    // borderWidth: 5,
  },
  facePulse: {
    width: 100,
    height: 100,
  },
  buttonContainer: {},
  button: {},
  submitButton: {
    backgroundColor: '#079697',
  },
});

export default styles;
