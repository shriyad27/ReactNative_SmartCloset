// CameraScreen.js
import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <TouchableOpacity onPress={takePicture} style={{marginBottom: 20}}>
        <Icon name="camera-outline" size={80} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
