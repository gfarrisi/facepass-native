import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    // background: 'linear-gradient(45deg, #4c669f, #3b5998, #192f6a)',
    width: '100%',
    height: '100%',
    color: 'white',
    position: 'relative',
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 17,
    zIndex: 10,
  },
  textAddress: {
    color: 'white',
    fontFamily: 'helvetica',
    fontSize: 14,
    fontWeight: '600',
    zIndex: 10,
  },
  logo: {
    width: 166,
    height: 166,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
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
  dots: {
    position: 'absolute',
  },
  banner: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 100,
    width: 100,
    // borderRadius: 3,
    // borderColor: '#079697',
    // borderStyle: 'dot',
    // borderWidth: 5,
  },

  buttonContainer: {},
  button: {},
});

export default styles;
