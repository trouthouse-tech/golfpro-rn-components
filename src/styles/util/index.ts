import {Dimensions} from 'react-native';

// iPhone 11 Height = 896
// iPhone 8 Height = 736

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export {DEVICE_HEIGHT, DEVICE_WIDTH};
