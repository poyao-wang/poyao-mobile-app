import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as Animatable from "react-native-animatable";

function ButtonShowHide({ style, down, onPress, size = 30 }) {
  return (
    <>
      <Animatable.View
        style={style}
        animation="rubberBand"
        duration={2000}
        iterationCount="infinite"
      >
        {down && (
          <MaterialCommunityIcons
            name="chevron-double-down"
            color={colors.medium}
            size={size}
            onPress={onPress}
          />
        )}
        {!down && (
          <MaterialCommunityIcons
            name="chevron-double-up"
            color={colors.medium}
            size={size}
            onPress={onPress}
          />
        )}
      </Animatable.View>
    </>
  );
}

export default ButtonShowHide;
