import { observable, action, computed, extendObservable } from 'mobx';
// import { create, persist } from 'mobx-persist';
// import { AsyncStorage, Animated } from 'react-native';
// import { Amplitude } from 'expo';
// import Fuse from 'fuse.js';
import _ from 'lodash';

class ApplicationState {
  constructor() {}

  // @persist('list') @observable _AnExampleArray = [];
  // @persist @observable _APersistedVariable = "Motorbike";
  // @persist('object') @observable _AnExampleObject = {
  //   a: "foo",
  //   b: "bar",
  //   c: 2,
  //   d: true
  // }
  @observable _marketInfo = [{
    title: 'USD jums up',
    content: 'Proin maximus porttitor mi quis elementum, Sed nec leo ut quam elementum dapibus...',
  },{
    title: 'USD jums up',
    content: 'Proin maximus porttitor mi quis elementum, Sed nec leo ut quam elementum dapibus...',
  },{
    title: 'USD jums up',
    content: 'Proin maximus porttitor mi quis elementum, Sed nec leo ut quam elementum dapibus...',
  },{
    title: 'USD jums up',
    content: 'Proin maximus porttitor mi quis elementum, Sed nec leo ut quam elementum dapibus...',
  },{
    title: 'USD jums up',
    content: 'Proin maximus porttitor mi quis elementum, Sed nec leo ut quam elementum dapibus...',
  }];

  @observable _chartData = {
    values: [
      { x: -10, open: 0.1237, close: 0.12395, high: 0.1241, low: 0.1236 },
      { x: -9, open: 0.1238, close: 0.12405, high: 0.1242, low: 0.1237 },
      { x: -8, open: 0.1239, close: 0.12415, high: 0.1243, low: 0.1238 },
      { x: -7, open: 0.12403, close: 0.12378, high: 0.12418, low: 0.12368 },
      { x: -6, open: 0.12385, close: 0.1236, high: 0.1240, low: 0.1235 },
      { x: -5, open: 0.12375, close: 0.1235, high: 0.1239, low: 0.1234 },
      { x: -4, open: 0.12365, close: 0.12395, high: 0.12405, low: 0.12355 },
      { x: -3, open: 0.1238, close: 0.1241, high: 0.1242, low: 0.1237 },
      { x: -2, open: 0.12398, close: 0.1237, high: 0.1241, low: 0.1236 },
    ],
    ticks: [0.1234, 0.1235, 0.1236, 0.1237, 0.1238, 0.1239, 0.1240, 0.1241, 0.1242]
  };

  @computed get marketInfo() {
    return this._marketInfo;
  }

  @computed get chartData() {
    return this._chartData;
  }

}

/*
  We create and export a singleton (a single instance of our state).
  This allows us to use inject the same state across the app with ease.

  Some situations warrant having a new instance of state (e.g. login or sensitive state).
*/
const singleton = new ApplicationState();
export default singleton;

// const hydrate = create({
//   storage: AsyncStorage, // Choose our storage medium, ensure it's imported above
//   jsonify: true  // if you use AsyncStorage, this needs to be true
// })

// // We hydrate anything we've persisted so that it is updated into the state on creation
// hydrate('persistedState', singleton).then((data) => {
//   console.log("Hydrated persisted data; ", data);
// });
