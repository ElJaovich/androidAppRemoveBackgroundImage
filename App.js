import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Image source={{ uri: image.assets[0].uri }} style={{ width: 200, height: 200 }} />
          <Text>URI: {image.assets[0].uri}</Text>
          <Text>Width: {image.assets[0].width}</Text>
          <Text>Height: {image.assets[0].height}</Text>
          <Text>Type: {image.assets[0].type}</Text>
        </View>
      )}
    </View>
  );
}

