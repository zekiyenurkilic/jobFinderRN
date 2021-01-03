import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {PROFILIMAGE} from '../../images/index';

const Profil = ({navigation}) => {
  const appliedJobs = [
    {
      id: 1,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      period: 'Monthly',
      status: 'Delivered',
    },
    {
      id: 2,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      period: 'Monthly',
      status: 'Opened',
    },
    {
      id: 3,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      period: 'Monthly',
      status: 'Cancelled',
    },
  ];

  const colorSelector = (status, background) => {
    let color = '';
    let backgroundColor = '';

    switch (status) {
      case 'Delivered':
        backgroundColor = '#f3f4f8';
        color = '#cacad5';
        break;
      case 'Opened':
        backgroundColor = '#e1fbd6';
        color = '#ace3a5';
        break;
      case 'Cancelled':
        backgroundColor = '#ffecec';
        color = '#f4a7a6';
        break;
      default:
        break;
    }
    return background ? backgroundColor : color;
  };

  return (
    <View style={styles.general}>
      <View style={styles.headPageButtonsView}>
        <TouchableOpacity
          style={styles.headPageButton}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            color={'gray'}
            size={20}
            name={'arrow-left'}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.darkTextColor,
          }}>
          Applications
        </Text>
        <TouchableOpacity style={styles.headPageButton}>
          <Image source={PROFILIMAGE} style={styles.profilImage} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10, marginBottom: 20}}>
        <Text style={styles.titleText}>Your</Text>
        <Text style={styles.titleText}>applications</Text>
      </View>
      {appliedJobs.map((apply) => (
        <TouchableOpacity
          style={styles.itemGeneral}
          onPress={() => navigation.push('JobDetail', job)}>
          <View style={styles.bottomView}>
            <View style={styles.imageGeneral}>
              <Image source={PROFILIMAGE} style={styles.firmImage} />
            </View>
            <View>
              <Text style={styles.grayText} numberOfLines={1}>
                {apply.firmName}
              </Text>
              <Text style={styles.textGeneral} numberOfLines={1}>
                {apply.positionName}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: colorSelector(apply.status, true),
                borderRadius: 10,
              }}>
              <Text style={{color: colorSelector(apply.status, false)}}>
                {apply.status}
              </Text>
            </View>
            <Text style={{color: Colors.darkTextColor, fontSize: 16}}>
              {apply.price}/{apply.period}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    padding: 30,
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  headPageButtonsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headPageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: Colors.grayInputBackground,
  },
  profilImage: {width: 30, height: 30, borderRadius: 5},
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkTextColor,
  },
  itemGeneral: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  bottomView: {flexDirection: 'row', alignItems: 'center'},
  imageGeneral: {
    backgroundColor: Colors.grayTagBorder,
    padding: 5,
    borderRadius: 10,
  },
  firmImage: {width: 30, height: 30, borderRadius: 10},
  textGeneral: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.darkTextColor,
  },
  grayText: {fontSize: 12, marginLeft: 10, color: 'gray', fontWeight: 'bold'},
  rightText: {fontSize: 16},
});
export default Profil;
