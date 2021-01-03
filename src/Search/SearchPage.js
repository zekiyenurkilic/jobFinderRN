import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ViewBase,
  Slider,
  Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import moment from 'moment';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const SearchPage = () => {
  const jobs = [
    {
      id: 1,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      country: 'Tokyo,Japan',
      like: false,
      time: 'Freelance',
      mostTag: 'revelant',
      time: '2019-01-31T10:42:00.000Z',
    },
    {
      id: 2,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      country: 'Tokyo,Japan',
      like: false,
      time: 'Full Time',
      mostTag: 'recent',
      time: '2020-12-10T10:42:00.000Z',
    },
    {
      id: 3,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      country: 'Tokyo,Japan',
      like: false,
      time: 'Full Time',
      mostTag: 'recent',
      time: '2020-10-31T10:42:00.000Z',
    },
    {
      id: 4,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      country: 'Tokyo,Japan',
      like: false,
      time: 'Full Time',
      mostTag: 'revelant',
      time: '2020-11-30T10:42:00.000Z',
    },
    {
      id: 5,
      image: 'https://egegen.com/blog/wp-content/uploads/2017/03/google.jpg',
      firmName: 'Google',
      positionName: 'Senior Developer',
      price: '$8k',
      country: 'Tokyo,Japan',
      like: false,
      time: 'Part Time',
      mostTag: 'revelant',
      time: '2020-12-03T10:42:00.000Z',
    },
  ];
  const jobTypes = [
    'Freelance',
    'Part time',
    'Full time',
    'Remote',
    'Contract',
  ];
  const [mostTag, setMostTag] = React.useState('revelant');
  const [jobTypeClick, setJobTypeClick] = React.useState([]);
  const refRBSheet = React.useRef();
  const screen = Dimensions.get('screen');
  const [multiSliderValue, setMultiSliderValue] = React.useState([0, 25000]);
  const multiSliderValuesChange = (values) => setMultiSliderValue(values);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.inputAndButton}>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
            placeholderTextColor="#9392a4"
            selectionColor="#9392a4"
          />
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.filterButton}>
            <MaterialCommunityIcons
              name={'tune-vertical'}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={{color: Colors.grayTagText}}>32 Jobs Opportunity</Text>
        <View style={styles.mostTagGeneral}>
          <TouchableOpacity
            style={{
              ...styles.mostTags,
              backgroundColor:
                mostTag === 'revelant' ? '#312750' : Colors.grayInputBackground,
            }}
            onPress={() => setMostTag('revelant')}>
            <Text
              style={{
                ...styles.mostTagsText,
                color: mostTag === 'revelant' ? 'white' : Colors.grayTagText,
              }}>
              Most Relevant
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.mostTags,
              backgroundColor:
                mostTag === 'recent' ? '#312750' : Colors.grayInputBackground,
            }}
            onPress={() => setMostTag('recent')}>
            <Text
              style={{
                ...styles.mostTagsText,
                color: mostTag === 'recent' ? 'white' : Colors.grayTagText,
              }}>
              Most Recent
            </Text>
          </TouchableOpacity>
        </View>
        {jobs
          .filter((item) => item.mostTag === mostTag)
          .map((job) => (
            <View style={styles.nearbyView}>
              <View style={styles.nearbyBottomView}>
                <View style={styles.nearbyImageGeneral}>
                  <Image
                    key={job.id}
                    source={{uri: job.image}}
                    style={styles.nearbyImage}
                  />
                </View>
                <View>
                  <Text style={styles.nearbyJobTime} numberOfLines={1}>
                    {job.firmName}
                  </Text>
                  <Text style={styles.textGeneral} numberOfLines={1}>
                    {job.positionName}
                  </Text>
                  <View
                    style={{
                      width: '70%',
                      flexDirection: 'row',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    <Text style={styles.cardPrice} numberOfLines={1}>
                      {job.price}
                    </Text>
                    <Text style={{color: Colors.darkTextColor}}> - </Text>
                    <Text style={styles.cardCountry} numberOfLines={1}>
                      {job.country}
                    </Text>
                  </View>
                </View>
              </View>
              <MaterialCommunityIcons
                style={{position: 'absolute', top: 10, right: 10}}
                name="heart-outline"
                size={20}
                color={Colors.grayTagText}
              />
              <Text
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  fontSize: 12,
                  color: Colors.grayTagText,
                }}>
                {moment(job.time).fromNow()}
              </Text>
            </View>
          ))}
      </ScrollView>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        openDuration={30}
        height={screen.height - 120}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          wrapper: {
            backgroundColor: 'rgba(100, 100, 100, 0.5)',
          },
          draggableIcon: {
            backgroundColor: Colors.draggableIconColor,
          },
        }}>
        <ScrollView style={styles.bottomSheetGeneral}>
          <Text style={styles.bottomSheetTitle}>Set Filters</Text>
          <View style={{marginTop: 30}}>
            <Text style={styles.dropDownTitleStyle}>Category</Text>

            <DropDownPicker
              items={[
                {
                  label: 'Frontend Developer',
                  value: 'usa',
                  icon: () => (
                    <MaterialCommunityIcons
                      name="briefcase-variant"
                      size={18}
                      color={Colors.bottomSheetLetterColor}
                    />
                  ),
                },
                {
                  label: 'UK',
                  value: 'uk',
                  icon: () => (
                    <MaterialCommunityIcons
                      name="briefcase-variant"
                      size={18}
                      color={Colors.bottomSheetLetterColor}
                    />
                  ),
                },
                {
                  label: 'France',
                  value: 'france',
                  icon: () => (
                    <MaterialCommunityIcons
                      name="briefcase-variant"
                      size={18}
                      color={Colors.bottomSheetLetterColor}
                    />
                  ),
                },
              ]}
              containerStyle={{height: 50}}
              style={{
                backgroundColor: '#fafafa',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
              itemStyle={{
                justifyContent: 'flex-start',
                padding: 10,
              }}
              labelStyle={{
                fontSize: 16,
                textAlign: 'left',
                color: Colors.bottomSheetLetterColor,
              }}
              arrowStyle={{marginRight: 10}}
              arrowColor={Colors.bottomSheetLetterColor}
              arrowSize={25}
              dropDownStyle={{
                backgroundColor: '#fafafa',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.dropDownTitleStyle}>Location</Text>

            <DropDownPicker
              items={[
                {
                  label: 'Ankara,Turkey',
                  value: 'usa',
                  icon: () => (
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={18}
                      color={Colors.bottomSheetLetterColor}
                    />
                  ),
                },
                {
                  label: 'UK',
                  value: 'uk',
                  icon: () => (
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={18}
                      color={Colors.bottomSheetLetterColor}
                    />
                  ),
                },
                {
                  label: 'France',
                  value: 'france',
                  icon: () => (
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={18}
                      color={Colors.bottomSheetLetterColor}
                    />
                  ),
                },
              ]}
              containerStyle={{height: 50}}
              style={{
                backgroundColor: '#fafafa',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
              itemStyle={{
                justifyContent: 'flex-start',
                padding: 10,
              }}
              labelStyle={{
                fontSize: 16,
                textAlign: 'left',
                color: Colors.bottomSheetLetterColor,
              }}
              arrowStyle={{marginRight: 10}}
              arrowColor={Colors.bottomSheetLetterColor}
              arrowSize={25}
              dropDownStyle={{
                backgroundColor: '#fafafa',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.salaryStyle}>Min. Salary</Text>
            <Text style={styles.salaryStyle}>Max. Salary</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <MultiSlider
              markerStyle={{
                ...Platform.select({
                  ios: {
                    height: 30,
                    width: 30,
                    shadowColor: '#000000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowRadius: 1,
                    shadowOpacity: 0.1,
                  },
                  android: {
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderColor: Colors.orangeButtonColor,
                    borderWidth: 2,
                  },
                }),
              }}
              pressedMarkerStyle={{
                ...Platform.select({
                  android: {
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: '#fb9a80',
                  },
                }),
              }}
              selectedStyle={{
                backgroundColor: Colors.orangeButtonColor,
              }}
              trackStyle={{
                backgroundColor: '#CECECE',
              }}
              touchDimensions={{
                height: 40,
                width: 40,
                borderRadius: 20,
                slipDisplacement: 40,
              }}
              values={[multiSliderValue[0], multiSliderValue[1]]}
              sliderLength={screen.width - 100}
              onValuesChange={multiSliderValuesChange}
              step={500}
              min={0}
              max={25000}
              allowOverlap={false}
              minMarkerOverlapDistance={10}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 12, color: Colors.grayTagText}}>
              {multiSliderValue[0]}TL
            </Text>
            <Text style={{fontSize: 12, color: Colors.grayTagText}}>
              {multiSliderValue[1]}TL
            </Text>
          </View>
          <Text style={{...styles.dropDownTitleStyle, marginBottom: 0}}>
            Job Type
          </Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {jobTypes.map((type) => (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: jobTypeClick.some(
                    (clickedType) => clickedType === type,
                  )
                    ? Colors.cardBackground
                    : Colors.grayInputBackground,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                  marginTop: 10,
                  borderRadius: 10,
                }}
                onPress={() => {
                  let found = jobTypeClick.find(
                    (clickedType) => clickedType === type,
                  );
                  if (found !== undefined) {
                    let tmpType = jobTypeClick.filter(
                      (filteredType) => filteredType !== found,
                    );
                    setJobTypeClick(tmpType);
                  } else {
                    setJobTypeClick([...jobTypeClick, type]);
                  }
                }}>
                <Text
                  style={{
                    color: jobTypeClick.some(
                      (clickedType) => clickedType === type,
                    )
                      ? 'white'
                      : Colors.bottomSheetLetterColor,
                  }}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            mode="contained"
            color={Colors.orangeButtonColor}
            style={styles.bottomSheetButton}
            labelStyle={{color: 'white'}}
            uppercase={false}>
            Apply filters
          </Button>
        </ScrollView>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  inputAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.grayInputBackground,
    flexGrow: 1,
    flexBasis: 1,
    borderRadius: 15,
    height: 60,
    paddingHorizontal: 15,
  },
  filterButton: {
    width: 50,
    height: 60,
    borderRadius: 15,
    backgroundColor: Colors.orangeButtonColor,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mostTagGeneral: {flexDirection: 'row', marginTop: 10, marginBottom: 10},
  mostTags: {
    padding: 10,
    backgroundColor: Colors.grayInputBackground,
    borderRadius: 10,
    paddingHorizontal: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mostTagsText: {
    color: Colors.grayTagText,
    fontSize: 12,
  },
  nearbyJobsMain: {marginTop: 30, marginBottom: 50},
  nearbyView: {
    backgroundColor: Colors.grayInputBackground,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nearbyBottomView: {flexDirection: 'row', alignItems: 'center'},
  nearbyImageGeneral: {
    backgroundColor: Colors.grayTagBorder,
    padding: 5,
    borderRadius: 10,
  },
  nearbyImage: {width: 25, height: 25, borderRadius: 10},
  textGeneral: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.darkTextColor,
  },
  nearbyJobTime: {fontSize: 12, marginLeft: 10, color: 'gray'},
  nearbyJobPrice: {fontSize: 16, fontWeight: 'bold'},
  cardPrice: {
    color: Colors.darkTextColor,
    fontSize: 13,
  },
  cardCountry: {
    color: Colors.darkTextColor,
    fontSize: 13,
  },
  bottomSheetGeneral: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 35,
  },
  bottomSheetTitle: {
    alignSelf: 'center',
    color: Colors.bottomSheetLetterColor,
    fontSize: 17,
  },
  dropDownTitleStyle: {
    color: Colors.bottomSheetLetterColor,
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  salaryStyle: {color: '#a3a3a8', fontSize: 12},
  bottomSheetButton: {
    marginTop: 25,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 50,
  },
});

export default SearchPage;
