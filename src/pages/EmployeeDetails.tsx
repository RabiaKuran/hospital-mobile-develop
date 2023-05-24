import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EmployeeDetails = (props: { route: any }) => {
  const { employee } = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Çalışanın resmini buraya ekleyebilirsiniz */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{employee.adSoyad}</Text>
          <Text style={styles.jobTitle}>{employee.gorev}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailText}>Meşguliyet Durumu: {employee.adSoyad}</Text>
        <Text style={styles.detailText}>Katı Numarası: {employee.adSoyad}</Text>
        <Text style={styles.detailText}>E-posta: {employee.adSoyad}</Text>
        <Text style={styles.detailText}>Doğum Tarihi: {employee.adSoyad}</Text>
        {/* Diğer bilgileri burada gösterebilirsiniz */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  headerTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 18,
    color: 'gray',
  },
  details: {
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EmployeeDetails;
