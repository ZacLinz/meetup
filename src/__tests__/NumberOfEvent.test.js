import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input box', () => {
    expect(NumberOfEventsWrapper.find('.numberEvents')).toHaveLength(1);
  });

  test('render text input box correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.numberEvents').prop('value')).toBe(query);
  })

  test('default number of events should be 32', () => {
    expect(NumberOfEventsWrapper.find('.numberEvents').prop('value')).toBe('32');
  })

  test('handle text input change', () => {
    const numberEvents = { target: { value: '64'}};
    NumberOfEventsWrapper.find('.numberEvents').simulate('change', numberEvents);
    expect(NumberOfEventsWrapper.state('query')).toBe('64');
  })

})
