import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import Footer from './Footer';
import { useRoute, useNavigation } from '@react-navigation/native';

const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { userName, userEmail } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [dob, setDob] = useState('21.07.2004');
  const [contact, setContact] = useState('+91 - 7387257752');
  const [address, setAddress] = useState('Patrika Nagar, Hyderabad, Telangana');

  const [targetAmount, setTargetAmount] = useState(1000);
  const [raisedAmount, setRaisedAmount] = useState(100);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveChanges = () => {
    setEditMode(false);
    // Handle saving changes to the backend here if needed
  };

  const cancelChanges = () => {
    setEditMode(false);
    setName(userName);
    setEmail(userEmail);
    setDob('21.07.2004');
    setContact('+91 - 7387257752');
    setAddress('Patrika Nagar, Hyderabad, Telangana');
  };

  const calculateProgress = () => {
    const progress = (raisedAmount / targetAmount) * 100;
    return progress;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.notificationIcon} onPress={() => navigation.navigate('Notification', { userName, userEmail })}>
            <Image source={require('../assets/notification_icon.png')} style={styles.notificationImage} />
          </TouchableOpacity>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} style={styles.profileImage} />
          <Text style={styles.userName}> {name} </Text>
          <TouchableOpacity style={styles.settingsIcon} onPress={toggleModal}>
            <Image source={require('../assets/settings.png')} style={styles.settingsImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          {editMode ? (
            <>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name</Text>
                <TextInput style={styles.detailInput} value={name} onChangeText={setName} />
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Email Address</Text>
                <TextInput style={styles.detailInput} value={email} onChangeText={setEmail} />
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date Of Birth</Text>
                <TextInput style={styles.detailInput} value={dob} onChangeText={setDob} />
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Contact No.</Text>
                <TextInput style={styles.detailInput} value={contact} onChangeText={setContact} />
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Address</Text>
                <TextInput style={styles.detailInput} value={address} onChangeText={setAddress} />
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={cancelChanges}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name</Text>
                <Text style={styles.detailValue}>{name}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Email Address</Text>
                <Text style={styles.detailValue}>{email}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date Of Birth</Text>
                <Text style={styles.detailValue}>{dob}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Contact No.</Text>
                <Text style={styles.detailValue}>{contact}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Address</Text>
                <Text style={styles.detailValue}>{address}</Text>
              </View>
              <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.progressBarContainer}>
          <Text style={styles.progressBarLabel}>Raised: ${raisedAmount} / ${targetAmount}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressBarInner, { width: `${calculateProgress()}%` }]} />
          </View>
        </View>
      </ScrollView>
      <Footer />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>App Settings</Text>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Terms & Condition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}>
              <Text style={styles.modalItemText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#3B5998',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  settingsImage: {
    width: 30,
    height: 30,
  },
  notificationIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  notificationImage: {
    width: 30,
    height: 30,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 20,
  },
  detailRow: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#3B5998',
  },
  detailInput: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    color: '#3B5998',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  editButton: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#3B5998',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 20,
  },
  modalItem: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAF0F8',
  },
  modalItemText: {
    fontSize: 18,
    color: '#3B5998',
  },
  progressBarContainer: {
    padding: 20,
    backgroundColor: '#EAF0F8',
    borderTopWidth: 1,
    borderTopColor: '#EAF0F8',
  },
  progressBarLabel: {
    fontSize: 16,
    color: '#3B5998',
    marginBottom: 10,
  },
  progressBar: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
  },
  progressBarInner: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3B5998',
  },
});

export default Profile;
