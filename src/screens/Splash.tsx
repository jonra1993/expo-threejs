import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

interface ISplashProps {
  setIsLoading: () => void;
}

const Splash = (props: ISplashProps): React.JSX.Element => {
  const { setIsLoading } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
      <LottieView
        source={require("../../assets/1709333197696.json")}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={setIsLoading}
      />
    </View>
  )
}


export default Splash;