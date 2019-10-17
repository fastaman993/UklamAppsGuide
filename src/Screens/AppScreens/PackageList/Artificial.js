import React, {Fragment, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Fab, Icon} from 'native-base';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Card from '../../../Components/Card';
import {getAllPackage} from '../../../Public/Action/Package';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const Artificial = props => {
  const {packageList, navigation} = props;
  let artificialList = packageList.filter(item => item.type === 'Artificial');

  const goToDetail = item => {
    navigation.navigate('DetailPackage', {item});
  };

  const fetchPackage = async () => {
    await props.dispatch(getAllPackage('guide1@mail.com'));
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  useEffect(() => {
    const onFocuListener = () =>
      navigation.addListener('didFocus', () => {
        fetchPackage();
      });
    onFocuListener();

    return onFocuListener().remove();
  });

  return (
    <Fragment>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#FAFAFA',
        }}>
        {artificialList.length > 0 ? (
          artificialList.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => goToDetail(item)}>
              <Card item={item} />
            </TouchableOpacity>
          ))
        ) : (
          <View style={{margin: 100}}>
            <Text style={{fontSize: 18, textAlign: 'center', color: '#8C8D99'}}>
              You don't have any packages for this category
            </Text>
          </View>
        )}
      </ScrollView>
      <Fab
        onPress={() => {
          props.navigation.navigate('AddPackage');
        }}
        style={{backgroundColor: '#FB724A'}}
        position="bottomRight">
        <Icon type="Ionicons" name="add" />
      </Fab>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    packageList: state.packageCmd.packageList,
  };
};

export default connect(mapStateToProps)(Artificial);
