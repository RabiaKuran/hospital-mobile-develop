import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
//ürünler sayfası yedek kulllanılmıyor şuanlk
const ProductsPage = (props: {navigation: any}) => {
  const {navigation} = props;
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSearch(search);
  }, [search]);
  const [secim, setSecim] = useState('column');
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        
        <PreviewLayout
          label="flexDirection"
          values={['column', 'row']}
          selectedValue={secim}
          setSelectedValue={setSecim}>
          <Image
            source={{
              uri: 'https://cdn.create.vista.com/api/media/medium/145612497/stock-photo-cups-of-fresh-made-coffee?token=',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{width: 100, height: 150}}
          />
          <Image
            source={{
              uri: 'https://cdn.create.vista.com/api/media/medium/180340334/stock-photo-flat-lay-tasty-healthy-breakfast?token=',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{width: 100, height: 150}}
          />
          <Image
            source={{
              uri: 'https://cdn.create.vista.com/api/media/medium/82344084/stock-photo-cream-soup?token=',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{width: 100, height: 150}}
          />

          <Image
            source={{
              uri: 'https://cdn.create.vista.com/api/media/medium/174635602/stock-photo-cups-of-tea?token=',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{width: 100, height: 150}}
          />

          

          <Image
            source={{
              uri: 'https://cdn.create.vista.com/api/media/medium/1651806/stock-photo-bean-soup?token=',
              cache: 'only-if-cached',
            }}
            style={{width: 150, height: 150}}
          />
          <ImageBackground
            source={{uri: 'https://cdn.create.vista.com/api/media/medium/173892782/stock-photo-pouring-water?token='}}
            style={{width: '100%', height: '100%'}}>
            <Text>Kuru Fasulye</Text>
          </ImageBackground>
        </PreviewLayout>
      </View>
    </ScrollView>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: {
  label: any;
  children: any;
  values: any;
  selectedValue: any;
  setSelectedValue: any;
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(
        (
          value:
            | any
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.Key
            | null
            | undefined,
        ) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ),
      )}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
export default ProductsPage;
