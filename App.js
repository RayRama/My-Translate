import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const translate = () => {
    let data = {
      q: userInput,
      source: "auto",
      target: "en",
    };

    axios.post("https://libretranslate.de/translate", data).then((response) => {
      setResult(response.data.translatedText);
    });

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
        My Translate
      </Text>
      <Text style={[styles.header, { bottom: 10 }]}>
        Translate any language to English
      </Text>
      <StatusBar style="auto" />

      <View style={styles.translateView}>
        <Text
          style={{
            textAlign: "left",
            marginLeft: 20,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Word
        </Text>

        <TextInput
          style={styles.translateInput}
          placeholder="Enter word want to translate"
          multiline
          numberOfLines={2}
          maxLength={40}
          value={userInput}
          onChangeText={(value) => setUserInput(value)}
        />

        <Text
          style={{
            textAlign: "left",
            marginLeft: 20,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Translated Word
        </Text>

        <View
          style={{
            margin: 20,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "black",
            height: 100,
            borderRadius: 5,
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          <Text selectable={true}>{result}</Text>
        </View>

        <TouchableOpacity
          style={{
            alignSelf: "center",
            margin: 10,
            bottom: 5,
            backgroundColor: "black",
            borderRadius: 5,
            borderWidth: 5,
            width: 200,
            height: 40,
            justifyContent: "center",
            alignContent: "center",
          }}
          onPress={translate}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Translate It
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    lineHeight: 25,
  },
  translateInput: {
    margin: 20,
    height: 70,
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: 20,
    borderRadius: 5,
  },
});
