// HomePage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Footer from './Footer';  // Import the Footer component

const HomePage = ({ navigation }) => {
  const route = useRoute();
  const { userName } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, title: 'Accident Emergency', image: require('../assets/accident.png') },
    { id: 2, title: 'Amputee Surgery', image: require('../assets/amputee.png') },
    { id: 3, title: 'Arthritis', image: require('../assets/arthritis.png') },
    { id: 4, title: 'Asthma', image: require('../assets/asthma.png') },
  ];

  const stories = [
    { id: 1, title: 'Raised Rs. 35.82 Lakhs', image: require('../assets/story1.png') },
    { id: 2, title: 'Raised Rs. 35.82 Lakhs', image: require('../assets/story2.png') },
    { id: 3, title: 'Raised Rs. 35.82 Lakhs', image: require('../assets/story3.png') },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.headerText}>Welcome, {userName}</Text>
          <View style={{ height: 20 }} />
          <Text style={styles.title}>Need Funds For Your Medical Treatment?</Text>
          <Text style={styles.subtitle}>Don't worry you have come to the right platform</Text>
          <TouchableOpacity style={styles.buttonHeader}>
            <Text style={styles.buttonHeaderText}>Start Your Fundraiser →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section1}>
          <Image source={require('../assets/coins.png')} style={styles.moneyIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Faster Fundraiser Approval</Text>
            <Text style={styles.sectionSubtitle}>Faster review and approval in less than 24 hour</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Top Medical Fundraising Categories</Text>
        <View style={styles.section2}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryCard, selectedCategory === category ? styles.selectedCategoryCard : null]}
                onPress={() => handleCategorySelect(category)}
              >
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.sectionTitle}>Our Top Stories</Text>
        <View style={styles.section3}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stories.map((story) => (
              <View key={story.id} style={styles.storyCard}>
                <Image source={story.image} style={styles.storyImage} />
                <Text style={styles.storyText}>{story.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Our Plans & Pricing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Our Happy Fundraisers Says About Us</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.testimonialCard}>
              <Image source={require('../assets/bed.png')} style={styles.testimonialImage} />
            </View>
            <View style={styles.testimonialCard}>
              <Image source={require('../assets/sreeja.png')} style={styles.testimonialPersonImage} />
              <Text style={styles.testimonialName}>Sreeja's Mother</Text>
              <Text style={styles.testimonialText}>It was positively overwhelming to see so many strangers and well wishers come to help us in through platform and thus its possible to cure my child's health condition.</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FF',
  },
  scrollContent: {
    paddingBottom: 100,  // Add padding to ensure the scrollable content is above the footer
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
    backgroundColor: '#3B5998',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
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
  buttonHeader: {
    backgroundColor: '#FFDF39',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonHeaderText: {
    color: '#220058',
    textAlign: 'center',
    fontSize: 16,
  },
  section1: {
    padding: 20,
    backgroundColor: '#7E98D1',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  section2: {
    padding: 20,
    backgroundColor: '#7E98D1',
    marginBottom: 10,
  },
  section3: {
    padding: 20,
    backgroundColor: '#A8B5D0',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#361273',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#fff',
  },
  moneyIcon: {
    width: 80,
    height: 80,
  },
  categoryCard: {
    padding: 15,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  selectedCategoryCard: {
    backgroundColor: '#2980b9',
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 12,
  },
  storyCard: {
    padding: 15,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
  },
  storyImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  storyText: {
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  section: {
    padding: 20,
    backgroundColor: '#A8B5D0',
    marginBottom: 10,
  },
  testimonialCard: {
    padding: 15,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  testimonialImage: {
    width: 200,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  testimonialPersonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 50,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  testimonialText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomePage;
