import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    position: 'relative',
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
  },
  dots: {
    position: 'absolute',
  },
  //    blur: {
  //     `--gradient-start`: `#6DE195`,
  //     `--gradient-start-text`: `#6DE195`,
  //     `--gradient-end`: `#C4E759`,
  //     `--gradient-end-text`: `#C4E759`,
  //    }
});

export default styles;
