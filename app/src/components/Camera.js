import React, {useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Camera = () => {
  const cameraRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        <View style={{backgroundColor: 'white', padding: 10}}>
          <Text style={{color: 'black'}}>Take Picture</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Camera;
