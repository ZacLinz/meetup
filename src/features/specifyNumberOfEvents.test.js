import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let NumberOfEventsWrapper;
    given('no number is specified', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);

    });

    when('the user is looking at a list of events', () => {

    });

    then('the user sees 32 events', () => {
      expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });
});


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the event list page is open', () => {
      AppWrapper = mount(<App />)
    });

    when('the user types into the textbox', () => {
      const number = { target: {value: 13} };
      AppWrapper.find('.numberEvents').simulate('change', number)
    });

    then('the user will see the specified number of events', () => {
      expect(AppWrapper.state('page')).toBe(13)
    });
  });

});
