import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('no number is specified', () => {

    });

    when('the user is looking at a list of events', () => {

    });

    then(/^the user sees (.*) events$/, (arg0) => {

    });
});


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the event list page is open', () => {

    });

    when(/^the user types into the (.*) textbox$/, (arg0) => {

    });

    then('the user will see the specified number of events', () => {

    });
  });

});
