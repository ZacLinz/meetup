(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),s=(n(26),n(2)),c=n(3),u=n(5),l=n(4),p=n(6),d=(n(27),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.showDetails=function(){n.setState(function(e){return{show:!e.show}})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"eventName"},e.name),r.a.createElement("p",{className:"time"},e.local_time," on ",e.local_date),this.state.show&&r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"eventGroup"},e.group.name),r.a.createElement("div",{className:"eventLocation"},e.venue.address_1),r.a.createElement("div",{className:"eventDescription"},e.description)),r.a.createElement("button",{className:"detailBtn",onClick:this.showDetails,disabled:!e.venue.address_1||!e.description||e.group.name},"Show/hide Details"))}}]),t}(a.Component)),m=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))}))}}]),t}(a.Component),h=n(7),b=n.n(h),_=n(8),v={city:{id:708891,city:"Saskatoon",lat:52.12,lon:-106.65,state:"SK",country:"ca",zip:"S7H 0A1",member_count:1270},events:[{created:1557256846e3,duration:54e5,fee:{accepts:"cash",amount:5,currency:"CAD",description:"per person",label:"Price",required:!1},id:"nbhvxqyzlbbc",name:"Soul Healing Evening",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15663456e5,local_date:"2019-08-20",local_time:"19:00",updated:1557256846e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:3,venue:{id:25696757,name:"Ellen's Whole Body Health",lat:52.15083312988281,lon:-106.56902313232422,repinned:!0,address_1:"507 Nelson Rd",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7S 1P4",state:"sk"},group:{created:1491961175e3,name:"Saskatoon Abundance Seekers",id:23252209,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Abundance-Seekers",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Abundance-Seekers/events/nbhvxqyzlbbc/",description:"<p>\u2022 What we'll do<br/>Meditation, spiritual practice, chanting, sharing and soul dancing</p> <p>\u2022 What to bring<br/>Bring water to drink</p> <p>\u2022 Important to know<br/>There is a $5.00 fee to participate please bring to event.</p> ",how_to_find_us:"We will be hosting in Ellen's Whole Body Health",visibility:"public",member_pay_fee:!1},{created:1557256846e3,duration:54e5,fee:{accepts:"cash",amount:5,currency:"CAD",description:"per person",label:"Price",required:!1},id:"nbhvxqyzlbkc",name:"Soul Healing Evening",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15669504e5,local_date:"2019-08-27",local_time:"19:00",updated:1557256846e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:2,venue:{id:25696757,name:"Ellen's Whole Body Health",lat:52.15083312988281,lon:-106.56902313232422,repinned:!0,address_1:"507 Nelson Rd",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7S 1P4",state:"sk"},group:{created:1491961175e3,name:"Saskatoon Abundance Seekers",id:23252209,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Abundance-Seekers",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Abundance-Seekers/events/nbhvxqyzlbkc/",description:"<p>\u2022 What we'll do<br/>Meditation, spiritual practice, chanting, sharing and soul dancing</p> <p>\u2022 What to bring<br/>Bring water to drink</p> <p>\u2022 Important to know<br/>There is a $5.00 fee to participate please bring to event.</p> ",how_to_find_us:"We will be hosting in Ellen's Whole Body Health",visibility:"public",member_pay_fee:!1},{created:1557256846e3,duration:54e5,fee:{accepts:"cash",amount:5,currency:"CAD",description:"per person",label:"Price",required:!1},id:"nbhvxqyzmbfb",name:"Soul Healing Evening",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15675552e5,local_date:"2019-09-03",local_time:"19:00",updated:1557256846e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:2,venue:{id:25696757,name:"Ellen's Whole Body Health",lat:52.15083312988281,lon:-106.56902313232422,repinned:!0,address_1:"507 Nelson Rd",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7S 1P4",state:"sk"},group:{created:1491961175e3,name:"Saskatoon Abundance Seekers",id:23252209,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Abundance-Seekers",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Abundance-Seekers/events/nbhvxqyzmbfb/",description:"<p>\u2022 What we'll do<br/>Meditation, spiritual practice, chanting, sharing and soul dancing</p> <p>\u2022 What to bring<br/>Bring water to drink</p> <p>\u2022 Important to know<br/>There is a $5.00 fee to participate please bring to event.</p> ",how_to_find_us:"We will be hosting in Ellen's Whole Body Health",visibility:"public",member_pay_fee:!1},{created:1565732829e3,duration:72e5,id:"263980400",name:"Supper at Fat Burger ",date_in_series_pattern:!1,status:"upcoming",time:15663438e5,local_date:"2019-08-20",local_time:"18:30",updated:1565732829e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:2,venue:{id:26382591,name:"Fatburger Preston Crossing",lat:52.1467170715332,lon:-106.62200164794922,repinned:!1,address_1:"1703 Preston Ave N #110",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7N 4V2",state:"SK"},group:{created:1559257271e3,name:"Saskatoon Christian Social Club (20\u2019s and 30\u2019s)",id:32069046,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Christian-Social-Club-20-s-and-30-s",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Christian-Social-Club-20-s-and-30-s/events/263980400/",description:"<p>Supper at Fat Burger at 6:30pm, a chance to talk and get to know people.</p> ",how_to_find_us:"I will get a table and let everyone know where I am sitting.",visibility:"public",member_pay_fee:!1},{created:1564544659e3,duration:72e5,id:"263605817",name:"Mini-golf @ Putt and Bounce",date_in_series_pattern:!1,status:"upcoming",time:15667596e5,local_date:"2019-08-25",local_time:"14:00",updated:1564544667e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:18,venue:{id:24006556,name:"Putt and Bounce",lat:52.119998931884766,lon:-106.6500015258789,repinned:!0,address_1:"8th St and Arlington Ave",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7H 0A1",state:"SK"},group:{created:1437107403e3,name:"Saskatoon Fun-loving 40-somethings",id:18747442,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Fun-loving-40s-Saskatoon",who:"Fun-lovers",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Fun-loving-40s-Saskatoon/events/263605817/",description:"<p>Another opportunity to be outside during the last days of summer. Practice your putting skills...or not. It's all fun and games. :)</p> <p>Date: Sunday August 25<br/>Time:200pm<br/>Location: Putt and Bounce (corner of 8th St and Arlington - behind Fuddruckers)</p> <p>A game costs $9.50. Putters and balls supplied.<br/>Meet at the entrance where we pay.</p> <p>Guests welcome.</p> <p>If anyone wants to go to Fuddruckers for dinner/ice cream after our game, we can arrange that for those who want to. It's in the same parking lot as putt and bounce.</p> <p>If this is your first meet up with the Fun-Lovers in 2019, please kindly bring $5 (annual fee) to assist in covering the admin costs of the group. Thanks in advance. :)</p> ",visibility:"public",member_pay_fee:!1}]},g=n(9),f=n.n(g);function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(_.a)(b.a.mark(function e(t,n){var a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://f2x5vqozrh.execute-api.ca-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://f2x5vqozrh.execute-api.ca-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,f.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return S.apply(this,arguments)}function S(){return(S=Object(_.a)(b.a.mark(function e(){var t,n,a,r,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=evqsptoae0qi6fh5v0fbivg7mq&response_type=code&redirect_uri=https://zaclinz.github.io/meetup",e.abrupt("return",null);case 7:return e.abrupt("return",y("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=12;break}return e.abrupt("return",t);case 12:return o=localStorage.getItem("refresh_token"),e.abrupt("return",y("renew",o));case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(){return(C=Object(_.a)(b.a.mark(function e(t){var n,a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,k();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,f.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return(E=Object(_.a)(b.a.mark(function e(t,n){var a,r,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",v.events);case 2:return e.next=4,k();case 4:if(!(a=e.sent)){e.next=12;break}return r="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+a,t&&n&&(r+="&lat="+t+"&lon="+n),e.next=10,f.a.get(r);case 10:return o=e.sent,e.abrupt("return",o.data.events);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}var z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return C.apply(this,arguments)}(t).then(function(e){return n.setState({suggestions:e})})},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)})))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"32"},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("input",{type:"number",className:"numberEvents",value:this.state.query,onChange:this.handleInputChanged}))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},n.updateEvents=function(e,t){(function(e,t){return E.apply(this,arguments)})(e,t).then(function(e){return n.setState({events:e})})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,{updateEvents:this.updateEvents}),r.a.createElement(m,{events:this.state.events}),r.a.createElement(j,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.6432335a.chunk.js.map