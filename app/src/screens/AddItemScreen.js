import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


const CameraComponent = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
     
      <TouchableOpacity onPress={takePicture}>
        <View style={{ backgroundColor: 'white', padding: 10 }}>
          <Text style={{ color: 'black' }}>Take Picture</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CameraComponent;