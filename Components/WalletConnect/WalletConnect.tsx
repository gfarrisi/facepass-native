import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const WalletConnect = () => {
  const [wsUri, setWsUri] = useState("");
  const [address, setAddress] = useState("");
  console.log(address);

  const onPress = () => {
    console.log("yes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet connect here!</Text>
      <View style={styles.greeting}>
        <TextInput
          style={styles.input}
          placeholder="Wallet Connect URI..."
          onChangeText={setWsUri}
          value={wsUri}
        />

        <TextInput
          style={styles.input}
          placeholder="EVM Address..."
          onChangeText={setAddress}
          value={address}
        />

        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    width: "100%",
    padding: "50px",
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "blue",
    padding: "12px",
    width: "100%",
    marginTop: "28px",
  },
  greeting: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
});

export default WalletConnect;
