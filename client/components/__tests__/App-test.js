import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');
import App from '../App.jsx';

configure({ adapter: new EnzymeAdapter() });

describe('App Component', () => {

  it('Should render the App Component', () => {
    expect(shallow(<App/>).find('#app-component').exists()).toBe(true);
  });
})