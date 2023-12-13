import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, Linking, Text, StyleSheet, View} from 'react-native';

//Open Links and Deep Links (Universal Links)
// const supportedURL = 'https://google.com';
// const unsupportedURL = 'slack://open?team=123456';

// const OpenURLButton = ({url, children}) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };

//Open Custom Settings
// const OpenSettingsButton = ({children}) => {
//   const handlePress = useCallback(async () => {
//     // Open the custom settings if the app has one
//     await Linking.openSettings();
//   }, []);

//   return <Button title={children} onPress={handlePress} />;
// };

//Get the Deep Link
// const useInitialURL = () => {
//   const [url, setUrl] = useState(null);
//   const [processing, setProcessing] = useState(true);

//   useEffect(() => {
//     const getUrlAsync = async () => {
//       // Get the deep link used to open the app
//       const initialUrl = await Linking.getInitialURL();

//       // The setTimeout is just for testing purpose
//       setTimeout(() => {
//         setUrl(initialUrl);
//         setProcessing(false);
//       }, 1000);
//     };

//     getUrlAsync();
//   }, []);

//   return {url, processing};
// };

//Send Intents
const SendIntentButton = ({action, extras, children}) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e) {
      Alert.alert(e.message);
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

export default function App() {
  // const {url: initialUrl, processing} = useInitialURL();

  return (
    //Open Links and Deep Links (Universal Links)
    // <View style={styles.container}>
    //   <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
    //   <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    // </View>

    // Open Custom Settings
    // <View style={styles.container}>
    //   <OpenSettingsButton>Open Settings</OpenSettingsButton>
    // </View>

    //Get the Deep Link
    // <View style={styles.container}>
    //   <Text>
    //     {processing
    //       ? 'Processing the initial url from a deep link'
    //       : `The deep link is: ${initialUrl || 'None'}`}
    //   </Text>
    // </View>

    // Send Intents
    <View style={styles.container}>
      <SendIntentButton action="android.settings.SECURITY_SETTINGS">
        Power Usage Summary
      </SendIntentButton>
      <SendIntentButton
        action="android.settings.APP_NOTIFICATION_SETTINGS"
        extras={[
          {
            key: 'android.provider.extra.APP_PACKAGE',
            value: 'com.facebook.katana',
          },
        ]}>
        App Notification Settings
      </SendIntentButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
