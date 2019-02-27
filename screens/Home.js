import React from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Ionicons } from '@expo/vector-icons';
import {
  ContainerView,
  BottomView,
  BorderView,
  Button,
  InfoTitleText,
  InfoBodyText,
  ScrollView,
} from '../components/styled';
import { VictoryChart, VictoryCandlestick, VictoryAxis } from 'victory-native';

import CustomHeader from '../components/CustomHeader';

@inject('ApplicationState')
@observer
export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <CustomHeader
          title="BTCUSD"
          subtitle="Bitcoin/US Dollar"
          rightComponent={<Ionicons name="md-star" size={32} color="#d8d8d8" />} 
        />
      ),
    };
  };

  render() {
    return (
      <ContainerView>
        <VictoryChart
          padding={{top: 0, left: 0, right: 50, bottom: 0}}
          domain={{x: [-11, 0], y: [0.1233, 0.1243]}}
        >
          <VictoryAxis dependentAxis
            tickValues={this.props.ApplicationState.chartData.ticks}
            orientation="right"
            offsetX={70}
          />
          <VictoryCandlestick
            candleColors={{ positive: '#64e1c0', negative: '#c9250f' }}
            data={this.props.ApplicationState.chartData.values}
          />
        </VictoryChart>
        <ScrollView>
          <InfoTitleText bigger>Market info</InfoTitleText>
          {this.props.ApplicationState.marketInfo.map((info, i) => (
            <BorderView margin key={`market-${i}`}>
              <InfoTitleText>{info.title}</InfoTitleText>
              <InfoBodyText>{info.content}</InfoBodyText>
            </BorderView>
          ))}
        </ScrollView>
        <BottomView>
          <BorderView>
            <Button
              title={'SELL \n 0.123456'}
              color="black"
              onPress={() => {}}
            />
          </BorderView>
          <BorderView>
            <Button
              title={'BUY \n 0.123467'}
              color="black"
              onPress={() => {}}
            />
          </BorderView>
        </BottomView>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
