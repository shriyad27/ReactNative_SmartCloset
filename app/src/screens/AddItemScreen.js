// CameraScreen.js
import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Camera} from 'react-native-vision-camera';

const CameraScreen = ({navigation}) => {
  const cameraRef = useRef(null);
  const [cameraDevices, setCameraDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    const getCameraDevices = async () => {
      const devices = await Camera.getAvailableCameraDevices();
      setCameraDevices(devices);
      setSelectedDevice(devices?.find(device => device.position === 'back'));
    };

    if (cameraDevices.length === 0) {
      getCameraDevices();
    }
  }, [cameraDevices]);

  const takePicture = async () => {
    if (cameraRef.current && selectedDevice) {
      const photo = await cameraRef.current.takePhoto({
        quality: 0.5,
        enableAutoStabilization: true,
      });
      navigation.navigate('Preview', {imageData: photo});
    }
  };

  return (
    <View style={{flex: 1}}>
      {selectedDevice && (
        <Camera
          ref={cameraRef}
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
          device={selectedDevice}
          autoFocus="on"
          enableCameraClips={false}
          isActive={true}
          photo={true}></Camera>
      )}
      <View style={{backgroundColor: 'black'}}>
        <TouchableOpacity
          onPress={takePicture}
          style={styles.captureButton}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  captureButton: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
  },
});

export default CameraScreen;
