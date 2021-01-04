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
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Colors';
import {useSelector, useDispatch} from 'react-redux';
import {getAllDatas, setJobLike} from '../../action/jobs';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const popularJobs = useSelector((state) => state.jobs.jobs);

  React.useEffect(() => {
    dispatch(getAllDatas());
  }, []);

  const tags = [
    {id: 1, name: 'Product'},
    {id: 2, name: 'Design'},
    {id: 3, name: 'Development'},
  ];

  const _renderItem = ({item, index}) => {
    let job = item;
    return (
      <TouchableOpacity
        style={styles.cardGeneral}
        onPress={() => navigation.push('JobDetail', job)}>
        <Image key={index} source={{uri: job.image}} style={styles.firmImage} />

        <View style={{width: '70%'}}>
          <Text style={styles.cardFirmName} numberOfLines={1}>
            {job.firmName}
          </Text>

          <Text style={styles.cardPositionName} numberOfLines={1}>
            {job.positionName}
          </Text>
        </View>
        <View style={{width: '70%', flexDirection: 'row'}}>
          <Text style={styles.cardPrice} numberOfLines={1}>
            {job.price}
          </Text>
          <Text style={{color: 'white'}}> - </Text>
          <Text style={styles.cardCountry} numberOfLines={1}>
            {job.country}
          </Text>
        </View>
        <MaterialCommunityIcons
          name={job.like ? 'heart' : 'heart-outline'}
          size={25}
          onPress={() => dispatch(setJobLike(job.id))}
          style={{
            position: 'absolute',
            color: Colors.orangeButtonColor,
            top: 10,
            right: 10,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title}>Hello Zekiye Nur</Text>
        <Text style={styles.subTitle}>Find your perfect job</Text>
      </View>
      <View>
        <View style={styles.inputAndButton}>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
            placeholderTextColor="#9392a4"
            selectionColor="#9392a4"
          />
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons
              name={'tune-vertical'}
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tags}>
          {tags.map((tag) => (
            <View style={styles.tag}>
              <Text style={styles.tagText}>{tag.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.populerMain}>
        <View style={styles.textAndLink}>
          <Text style={styles.textPopular}>Popular Job</Text>
          <Text
            style={styles.textShowAll}
            onPress={() => console.warn('deneme')}>
            Show All
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={popularJobs}
            keyExtractor={(item) => item._id}
            renderItem={_renderItem}
            extraData={popularJobs}
          />
        </View>
      </View>
      <View style={styles.nearbyJobsMain}>
        <View style={styles.textAndLink}>
          <Text style={styles.textPopular}>Nearby Job</Text>
          <Text
            style={styles.textShowAll}
            onPress={() => console.warn('deneme')}>
            Show All
          </Text>
        </View>
        {popularJobs.map((job) => (
          <TouchableOpacity
            style={styles.nearbyView}
            onPress={() => navigation.push('JobDetail', {id: job.id})}>
            <View style={styles.nearbyBottomView}>
              <View style={styles.nearbyImageGeneral}>
                <Image
                  key={job.id}
                  source={{uri: job.image}}
                  style={styles.nearbyImage}
                />
              </View>
              <View>
                <Text style={styles.textGeneral} numberOfLines={1}>
                  {job.positionName}
                </Text>
                <Text style={styles.nearbyJobTime} numberOfLines={1}>
                  {job.time}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.nearbyJobPrice}>{job.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'white',
  },
  titles: {
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    marginBottom: 3,
    color: Colors.darkTextColor,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    color: Colors.darkTextColor,
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
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grayTagBorder,
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginRight: 10,
    marginBottom: 5,
  },
  tagText: {
    color: Colors.grayTagText,
    fontSize: 12,
  },
  populerMain: {marginTop: 30},
  textAndLink: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPopular: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.darkTextColor,
  },
  textShowAll: {
    fontSize: 12,
    color: Colors.grayTagText,
    fontWeight: 'bold',
  },
  cardGeneral: {
    backgroundColor: Colors.darkTextColor,
    padding: 20,
    width: 250,
    height: 160,
    marginRight: 10,
    borderRadius: 20,
    position: 'relative',
  },
  firmImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  cardPositionName: {
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardFirmName: {color: 'white', marginTop: 5, fontSize: 12},
  cardPrice: {
    color: 'white',
    fontSize: 13,
  },
  cardCountry: {
    color: Colors.cardText,
    fontSize: 13,
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
});
export default HomePage;
