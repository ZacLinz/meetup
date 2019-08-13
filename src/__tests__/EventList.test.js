import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{ id: 1 }, {id: 2 }, {id: 3 }, {id: 4 }] });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
  test('', () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{ id: 1 }, {id: 2 }, {id: 3 }, {id: 4 }] });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
  test('click on event should open up details', () =>{
    const EventListWrapper = shallow(<Event />);
    EventListWrapper.setState({
      events: [
        {
          id: "263850651",
          name: "Farewell Dinner",
          status: "upcoming",
          local_date: "2019-08-13",
          local_time: "18:00",
          venue: {
            name: "Tong’s Wok",
            address_1: "834 51st St. E",
            city: "Saskatoon",
            country: "ca",
            localized_country_name: "Canada",
            zip: "S7K 5C7",
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
        link: "https://www.meetup.com/Saskatoon-30-Somethings/events/263850651/",
        description: "<p>Let’s meet for a final dinner before the group shuts down. Meet at Tong’s Wok at 6:00. Depending on the number of people signed up, I might make a reservation.</p> ",
        visibility: "public",
        member_pay_fee: false
      },
      {
      id: "263316150",
      name: "Folkfest ",
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
    }
      ]
    });

    EventListWrapper.find('.EventList li').at(0).simulate('click');
    expect(EventListWrapper.state('details').toBe('263316150'))
  })

});
