import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ title, subtitle, leftComponent, rightComponent }) => (
  <View style={styles.headerContainer}>
    <View style={[styles.iconContainer, styles.left]}>{leftComponent}</View>
    <View style={styles.title}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
    <View style={[styles.iconContainer, styles.right]}>{rightComponent}</View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexGrow: 0,
    flexBasis: 40,
  },
  left: {
    justifyContent: 'flex-start',
  },
  title: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerSubtitle: {
    fontSize: 16,
  },
  right: {
    justifyContent: 'flex-end',
  },
});


export default CustomHeader;