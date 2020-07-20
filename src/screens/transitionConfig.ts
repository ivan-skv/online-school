import {
  Animated,
  Easing,
} from 'react-native';

const CollapseExpand = (index: any, position: any): any => {
  const inputRange: ReadonlyArray<any> = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY },
    ],
  };
};

const SlideFromRight = (index: any, position: any, width: any) => {
  const inputRange: ReadonlyArray<any> = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps: any): any => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene;
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      if (transition == 'collapseExpand') {
        return CollapseExpand(index, position);
      }
      return SlideFromRight(index, position, width);
    },
  };
};

export default transitionConfig;
