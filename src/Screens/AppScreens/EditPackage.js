import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';
import {Icon, Button, Thumbnail, Footer} from 'native-base';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const EditPackage = () => {
  const [type, setType] = useState('');

  return (
    <Fragment>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          flexDirection: 'column',
          paddingHorizontal: 20,
          paddingTop: 32,
        }}>
        {/* Arrow back... */}
        <Icon type="Ionicons" name="arrow-back" style={{color: '#FB724A'}} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#171719',
            marginTop: 18,
          }}>
          Update Package
        </Text>
        {/* Text input... */}
        <View style={{marginTop: 23}}>
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            placeholder="Insert package name..."
          />
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              marginTop: 10,
            }}
            placeholder="Insert package price..."
          />
          <View style={{height: 56, marginBottom: 0, paddingBottom: 0}}>
            <Picker
              style={{height: 56}}
              selectedValue={type}
              itemStyle={{color: '#FAFAFA', fontSize: 18}}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
              <Picker.Item label="Insert package type..." value="" />
              <Picker.Item label="Steve" value="steve" />
              <Picker.Item label="Ellen" value="ellen" />
              <Picker.Item label="Maria" value="maria" />
            </Picker>
          </View>
          <TextInput
            style={{
              height: 56,
              fontSize: 18,
              color: '#3C3C3E',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              // marginTop: 10,
            }}
            multiline={true}
            numberOfLines={4}
            placeholder="Insert package description..."
          />
          <View style={{flexDirection: 'row', marginTop: 10, height: 85}}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 8,
                color: '#8C8D99',
                paddingLeft: 5,
              }}>
              Select image
            </Text>
            <Button dark style={{borderRadius: 5, marginHorizontal: 20}}>
              <Text style={{fontSize: 18, color: '#FFF', margin: 10}}>
                Upload
              </Text>
            </Button>
          </View>
        </View>
        {/* Button update... */}
      </ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <Button
          style={{
            backgroundColor: '#FB724A',
            marginBottom: 20,
            marginTop: 'auto',
          }}
          block>
          <Text style={{color: '#FFF', fontSize: 18}}>Edit package</Text>
        </Button>
      </View>
    </Fragment>
  );
};

export default EditPackage;