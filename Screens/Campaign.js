import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import CheckBox from 'react-native-check-box';
import Footer from './Footer';
import firestore from '@react-native-firebase/firestore';

class Campaign extends Component {
  state = {
    reason: '',
    yourName: '',
    mobile: '',
    whatsappUpdates: false,
    admitted: false,
    notAdmitted: false,
    underHomeTreatment: false,
    raisingFundFor: '',
    patientName: '',
    patientAge: '',
    patientAddress: '',
    diseaseName: '',
    requiredAmount: '',
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };
  
  onSubmitSteps = () => {
    console.log('called on submit step.');
    this.storeDataToFirestore();
    const { name, email } = this.state;
    this.props.navigation.navigate('CampaignThankYou', { userName: name, userEmail: email });
  };

  storeDataToFirestore = async () => {
    try {
      await firestore().collection('Campaigns').add({
        reason: this.state.reason,
        yourName: this.state.yourName,
        mobile: this.state.mobile,
        whatsappUpdates: this.state.whatsappUpdates,
        admitted: this.state.admitted,
        notAdmitted: this.state.notAdmitted,
        underHomeTreatment: this.state.underHomeTreatment,
        raisingFundFor: this.state.raisingFundFor,
        patientName: this.state.patientName,
        patientAge: this.state.patientAge,
        patientAddress: this.state.patientAddress,
        diseaseName: this.state.diseaseName,
        requiredAmount: this.state.requiredAmount,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      console.log('Data added to Firestore!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: '#1BBF00',
      activeLabelColor: '#1BBF00',
      activeStepNumColor: '#003198',
      activeStepIconColor: '#1BBF00',
      completedStepIconColor: '#1BBF00',
      completedProgressBarColor: '#1BBF00',
      completedCheckColor: '#003198',
    };

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.headerText}>Start your Fundraiser</Text>
        </View>
        <ScrollView>
          <ProgressSteps {...progressStepsStyle}>
            <ProgressStep
              label="1"
              onNext={this.onNextStep}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={styles.buttonText}
              nextBtnStyle={styles.button}
            >
              <View style={styles.stepContainer}>
                <Text style={styles.stepTitle}>Fill Your Details</Text>
                <Text style={styles.subtitle}>I am raising funds for</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Choose Your Reason"
                  value={this.state.reason}
                  onChangeText={(text) => this.setState({ reason: text })}
                />
                <Text style={styles.subtitle}>Enter Your Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Name"
                  value={this.state.yourName}
                  onChangeText={(text) => this.setState({ yourName: text })}
                />
                <Text style={styles.subtitle}>Enter Your Mobile No.</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+91-7894387297"
                  value={this.state.mobile}
                  onChangeText={(text) => this.setState({ mobile: text })}
                />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    style={styles.checkbox}
                    onClick={() => {
                      this.setState({
                        whatsappUpdates: !this.state.whatsappUpdates
                      })
                    }}
                    isChecked={this.state.whatsappUpdates}
                  />
                  <Text style={styles.checkboxText}>Get Updates on WhatsApp</Text>
                </View>
              </View>
            </ProgressStep>
            <ProgressStep
              label="2"
              onNext={this.onNextStep}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={styles.buttonText}
              nextBtnStyle={styles.button}
            >
              <View style={styles.stepContainer}>
                <Text style={styles.stepTitle}>Patient Details</Text>
                <Text style={styles.subtitle}>Enter Patient Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Patient Name"
                  value={this.state.patientName}
                  onChangeText={(text) => this.setState({ patientName: text })}
                />
                <Text style={styles.subtitle}>Patient Age</Text>
                <TextInput
                  style={styles.input}
                  placeholder="48"
                  value={this.state.patientAge}
                  onChangeText={(text) => this.setState({ patientAge: text })}
                />
                <Text style={styles.subtitle}>Patient Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Patrika Nagar, Hyderabad, Telengana"
                  value={this.state.patientAddress}
                  onChangeText={(text) => this.setState({ patientAddress: text })}
                />
              </View>
            </ProgressStep>
            <ProgressStep
              label="3"
              onNext={this.onNextStep}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={styles.buttonText}
              nextBtnStyle={styles.button}
            >
              <View style={styles.stepContainer}>
                <Text style={styles.stepTitle}>Treatment Details</Text>
                <Text style={styles.subtitle}>Enter Disease Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Disease name here"
                  value={this.state.diseaseName}
                  onChangeText={(text) => this.setState({ diseaseName: text })}
                />
                <Text style={styles.subtitle}>Enter Required Amount</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Rs.0.00"
                  value={this.state.requiredAmount}
                  onChangeText={(text) => this.setState({ requiredAmount: text })}
                />
                <Text style={styles.subtitle}>Patient’s Current Situation</Text>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    style={styles.checkbox}
                    onClick={() => {
                      this.setState({
                        admitted: !this.state.admitted
                      })
                    }}
                    isChecked={this.state.admitted}
                  />
                  <Text style={styles.checkboxText1}>Admitted</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    style={styles.checkbox}
                    onClick={() => {
                      this.setState({
                        notAdmitted: !this.state.notAdmitted
                      })
                    }}
                    isChecked={this.state.notAdmitted}
                  />
                  <Text style={styles.checkboxText2}>Not Admitted</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    style={styles.checkbox}
                    onClick={() => {
                      this.setState({
                        underHomeTreatment: !this.state.underHomeTreatment
                      })
                    }}
                    isChecked={this.state.underHomeTreatment}
                  />
                  <Text style={styles.checkboxText3}>Under Home Treatment</Text>
                </View>
              </View>
            </ProgressStep>
            <ProgressStep
              label="4"
              onSubmit={this.onSubmitSteps}
              scrollViewProps={this.defaultScrollViewProps}
              finishBtnTextStyle={styles.buttonText}
              finishBtnStyle={styles.button}
            >
              <View style={styles.stepContainer}>
                <Text style={styles.stepTitle}>Upload Hospital Document</Text>
                <Text style={styles.subtitle}>Upload Hospital Document</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Estimation Letter"
                  value={this.state.reason}
                  onChangeText={(text) => this.setState({ reason: text })}
                />
                <View style={styles.uploadSection}>
                  <TouchableOpacity>
                    <Image source={require('../assets/uploadfile.png')} style={styles.uploadIcon} />
                    <View style={styles.textContainer}>
                      <Text style={styles.sectionTitle}>Upload A file </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FF',
  },
  content: {
    padding: 20,
    backgroundColor: '#3B5998',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFDF39',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  stepContainer: {
    alignItems: 'center',
    padding: 20,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003198'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  checkbox: {
    padding: 10,
    color: '#3B5998',
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#686868',
    marginRight: 90,
  },
  checkboxText1: {
    fontSize: 16,
    marginLeft: 10,
    color: '#0D42CA',
    marginRight: 210,
  },
  checkboxText2: {
    fontSize: 16,
    marginLeft: 10,
    color: '#0D42CA',
    marginRight: 180,
  },
  checkboxText3: {
    fontSize: 16,
    marginLeft: 10,
    color: '#0D42CA',
    marginRight: 110,
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    color: '#0D42CA'
  },
  input: {
    height: 40,
    borderColor: '#0D42CA',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFDF39',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#003198',
    fontWeight: 'bold',
  },
  uploadSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
    height: 200
  },
  uploadIcon: {
    marginLeft: 15,
    marginTop: 25,
    width: 80,
    height: 80,
    alignItems: 'center'
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#686868',
  },
});

export default Campaign;