import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';


describe('<Event /> component', () => {
  let EventWrapper;

  const sampleEvent =
      {
      id: "263316150",
      name: "Folkfest",
      status: "upcoming",
      local_date: "2019-08-17",
      local_time: "15:00",
      venue: {
        id: 23057712,
        name: "Saskatoon German Cultural Centre",
        address_1: "160 Cartwright Street East",
        city: "Saskatoon",
        country: "ca",
        localized_country_name: "Canada",
        zip: "",
        state: "SK"
      },
      group: {
        name: "Saskatoon 30-Somethings",
        id: 18431201,
        urlname: "Saskatoon-30-Somethings",
        who: "Thirty-somethings",
        localized_location: "Saskatoon, SK",
        state: "SK",
        country: "ca",
        region: "en_US",
        timezone: "Canada/Central"
      },
      link: "https://www.meetup.com/Saskatoon-30-Somethings/events/263316150/",
      description: "<p>Let’s tour the world!! Start at the German Club where we can all park our cars for free. From there we can take the bus to Prairieland Park for all of the pavilions there. We can then decide if we want to bus or drive over to Lions Arena and the global village, which is then walking distance to the Norwegian pavilion at Holy Cross, ending at the Irish pavilion at the Nutana Curling Club. You can buy passports in advance or at the door. They’re $15, and that gets you into all of the pavilions and on the buses for free.</p> ",
      how_to_find_us: "Meet near the entry point. They have two little huts set up to stamp passports and we can meet by those. ",
      visibility: "public",
      member_pay_fee: false
      };

    beforeAll(() => {
      EventWrapper = shallow(<Event event={sampleEvent} />)
    })

    test('check to see if event is rendered', () => {
      expect(EventWrapper.find('.event')).toHaveLength(1);
    })

    test('event title should match', () =>{
      expect(EventWrapper.find('.eventName').text()).toBe('Folkfest')
    })

    test('click event should toggle details', () => {
      EventWrapper.find('.event .detailBtn').simulate('click');
      expect(EventWrapper.state('show')).toBe(true);
      expect(EventWrapper.find('.details')).toHaveLength(1);

      EventWrapper.find('.event .detailBtn').simulate('click');
      expect(EventWrapper.state('show')).toBe(false);
      expect(EventWrapper.find('.details')).toHaveLength(0);

    })


})
