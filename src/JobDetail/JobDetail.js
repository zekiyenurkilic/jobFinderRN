import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getJobDetail, setJobLike} from '../../action/jobs';

const JobDetail = ({navigation, route}) => {
  let params = route.params;
  const dispatch = useDispatch();
  const jobDetail = useSelector((state) => state.jobs.jobDetail);

  React.useEffect(() => {
    dispatch(getJobDetail(params.id, true));
  }, []);
  const [mostTag, setMostTag] = React.useState('description');

  if (jobDetail === null) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <>
      <ScrollView style={styles.general}>
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
          <TouchableOpacity style={styles.headPageButton}>
            <MaterialCommunityIcons
              color={'gray'}
              size={20}
              name="share-variant"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.firstInf}>
          <View style={styles.imageView}>
            <Image source={{uri: jobDetail.image}} style={styles.jobImage} />
          </View>
          <Text style={styles.positionText}>{jobDetail.positionName}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text style={styles.firmText}>
              {jobDetail.firmName} /
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={15}
                color={'#a09bb2'}
                style={{alignSelf: 'center'}}
              />
              <Text style={styles.countryText}>{jobDetail.country}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.mostTagGeneral}>
          <TouchableOpacity
            style={{
              ...styles.mostTags,
              backgroundColor:
                mostTag === 'description'
                  ? '#312750'
                  : Colors.grayInputBackground,
            }}
            onPress={() => setMostTag('description')}>
            <Text
              style={{
                ...styles.mostTagsText,
                color: mostTag === 'description' ? 'white' : Colors.grayTagText,
              }}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.mostTags,
              backgroundColor:
                mostTag === 'company' ? '#312750' : Colors.grayInputBackground,
            }}
            onPress={() => setMostTag('company')}>
            <Text
              style={{
                ...styles.mostTagsText,
                color: mostTag === 'company' ? 'white' : Colors.grayTagText,
              }}>
              Company
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.mostTags,
              backgroundColor:
                mostTag === 'reviews' ? '#312750' : Colors.grayInputBackground,
            }}
            onPress={() => setMostTag('reviews')}>
            <Text
              style={{
                ...styles.mostTagsText,
                color: mostTag === 'reviews' ? 'white' : Colors.grayTagText,
              }}>
              Reviews
            </Text>
          </TouchableOpacity>
        </View>
        {mostTag === 'description' && (
          <View style={styles.textView}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: Colors.darkTextColor,
              }}>
              Qualifications:
            </Text>
            <Text style={{color: Colors.grayTagText}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        )}
        {mostTag === 'company' && (
          <View style={styles.textView}>
            <Text style={{color: Colors.grayTagText}}>
              {jobDetail.firmName}
            </Text>
          </View>
        )}
        {mostTag === 'reviews' && (
          <View style={styles.textView}>
            <Text style={{color: Colors.grayTagText}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Text>
          </View>
        )}
        <View style={styles.textBottom}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.darkTextColor,
            }}>
            About Job:
          </Text>
          <Text style={{color: Colors.grayTagText}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.orangeButtonColor,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginRight: 10,
          }}>
          <MaterialCommunityIcons
            color={Colors.orangeButtonColor}
            size={30}
            name={jobDetail.like ? 'heart' : 'heart-outline'}
            onPress={() => {
              dispatch(setJobLike(jobDetail.id));
              dispatch(getJobDetail(jobDetail.id, false));
            }}
          />
        </View>
        <Button
          mode="contained"
          color={Colors.orangeButtonColor}
          style={styles.bottomSheetButton}
          labelStyle={{color: 'white'}}
          uppercase={false}>
          Apply for job
        </Button>
      </View>
    </>
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
  },
  headPageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.grayInputBackground,
    borderRadius: 5,
  },
  firstInf: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobImage: {
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  positionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: Colors.darkTextColor,
    textAlign: 'center',
  },
  firmText: {
    fontSize: 16,
    color: Colors.darkTextColor,
    textAlign: 'center',
  },
  countryText: {
    fontSize: 14,
    color: '#726b87',
    marginLeft: 2,
  },
  mostTagGeneral: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mostTags: {
    padding: 10,
    backgroundColor: Colors.grayInputBackground,
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mostTagsText: {
    color: Colors.grayTagText,
    fontSize: 12,
  },
  textView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textBottom: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  bottomSheetButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexBasis: 1,
    flexGrow: 1,
  },
});
export default JobDetail;
