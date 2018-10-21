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
        <Icon bgType="#fc5c65" iconType={Icon_Marcador} />
      </View>
      <View>
        <Icon bgType="#45aaf2" iconType={Icon_Frases} />
      </View>
      <View>
        <Icon bgType="#fed330" iconType={Icon_Gramatica} />
      </View>
    </View>
  );
};
const classStyle = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
export default categorias_items;
