import React from "react";
import { View, StyleSheet } from "react-native";
import FontText from "../common/fontload";
import Icon from "./../common/icon_categ";

import Icon_Marcador from "./../../../assets/icon/bookmark.svg";
import Icon_Gramatica from "./../../../assets/icon/abc.svg";
import Icon_Frases from "./../../../assets/icon/pencil.svg";

const categorias_items = () => {
  return (
    <View style={classStyle.Container}>
      <View>
        <Icon iconType={Icon_Marcador} />
      </View>
      <View>
        <Icon iconType={Icon_Frases} />
      </View>
      <View>
        <Icon iconType={Icon_Gramatica} />
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
export default categorias_items;
