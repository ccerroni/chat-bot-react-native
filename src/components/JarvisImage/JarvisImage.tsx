import { View, Image } from "react-native"
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface JarvisImageProps {
  width?: number
  height?: number
}

export const JarvisImage: React.FC<JarvisImageProps> = ({width = wp(75), height = wp(75)}) => {
  return (
    <Image source={require('../../../assets/images/welcome.png')} style={{
      width: width,
      height: height
    }} />

  )
}

