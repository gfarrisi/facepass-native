import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    background: 'linear-gradient(45deg, #4c669f, #3b5998, #192f6a)',
    width: '100%',
    color: 'white',
    position: 'relative',
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'Tenor Sans',
    fontSize: 17,
    zIndex: 10,
  },
  logo: {
    width: 166,
    height: 166,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 100,
    color: 'white',
    zIndex: 100,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  dots: {
    position: 'absolute',
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
  camera: {},
  buttonContainer: {},
  button: {},
});

export default styles;
