import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user is looking at a list of events', () => {

    });

    when('the user accesses the event list', () => {

    });

    then('no event element should be opened', () => {

    });
});

test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user is looking at a list of events', () => {

    });

    when('the user clicks the event list', () => {

    });

    then('the selected event should expand to show details about the event', () => {

    });
});

test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user is looking at an events expanded details', () => {

    });

    when('the user clicks a button to collapse the event', () => {

    });

    then('the event\'s details box is collapsed', () => {

    });
});

});
