(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/CityEvents.e31f4046.png"},31:function(e,t,n){e.exports=n(64)},36:function(e,t,n){},37:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n.n(o),s=(n(36),n(2)),c=n(3),l=n(5),u=n(4),p=n(6),d=(n(37),n(9)),m=n.n(d),h=n(28),b=n.n(h),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.showDetails=function(){n.setState(function(e){return{show:!e.show}})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(m.a,{className:"Event",style:{width:"25rem"}},r.a.createElement(m.a.Title,{className:"eventName"},e.name),r.a.createElement(m.a.Text,{className:"time"},e.local_time," on ",e.local_date),r.a.createElement(m.a.Text,{className:"rsvp"},e.yes_rsvp_count," people are going"),this.state.show&&r.a.createElement("div",{className:"details"},e.venue&&r.a.createElement(m.a.Text,{className:"eventLocation"},e.venue.city+", "+e.venue.address_1),r.a.createElement(m.a.Text,{className:"description",dangerouslySetInnerHTML:{__html:e.description}}),r.a.createElement(m.a.Text,{className:"visibility"},e.visibility),r.a.createElement("a",{className:"link",href:e.link},"Event link")),r.a.createElement(b.a,{className:"detailBtn",onClick:this.showDetails},"Show/hide Details")))}}]),t}(a.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("ul",{className:"EventList "},this.props.events.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v,{event:e}))})))}}]),t}(a.Component),g=n(7),f=n.n(g),y=n(13),k={city:{id:708891,city:"Saskatoon",lat:52.12,lon:-106.65,state:"SK",country:"ca",zip:"S7H 0A1",member_count:1270},events:[{created:1557256846e3,duration:54e5,fee:{accepts:"cash",amount:5,currency:"CAD",description:"per person",label:"Price",required:!1},id:"nbhvxqyzlbbc",name:"Soul Healing Evening",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15663456e5,local_date:"2019-08-20",local_time:"19:00",updated:1557256846e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:3,venue:{id:25696757,name:"Ellen's Whole Body Health",lat:52.15083312988281,lon:-106.56902313232422,repinned:!0,address_1:"507 Nelson Rd",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7S 1P4",state:"sk"},group:{created:1491961175e3,name:"Saskatoon Abundance Seekers",id:23252209,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Abundance-Seekers",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Abundance-Seekers/events/nbhvxqyzlbbc/",description:"<p>\u2022 What we'll do<br/>Meditation, spiritual practice, chanting, sharing and soul dancing</p> <p>\u2022 What to bring<br/>Bring water to drink</p> <p>\u2022 Important to know<br/>There is a $5.00 fee to participate please bring to event.</p> ",how_to_find_us:"We will be hosting in Ellen's Whole Body Health",visibility:"public",member_pay_fee:!1},{created:1557256846e3,duration:54e5,fee:{accepts:"cash",amount:5,currency:"CAD",description:"per person",label:"Price",required:!1},id:"nbhvxqyzlbkc",name:"Soul Healing Evening",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15669504e5,local_date:"2019-08-27",local_time:"19:00",updated:1557256846e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:2,venue:{id:25696757,name:"Ellen's Whole Body Health",lat:52.15083312988281,lon:-106.56902313232422,repinned:!0,address_1:"507 Nelson Rd",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7S 1P4",state:"sk"},group:{created:1491961175e3,name:"Saskatoon Abundance Seekers",id:23252209,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Abundance-Seekers",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Abundance-Seekers/events/nbhvxqyzlbkc/",description:"<p>\u2022 What we'll do<br/>Meditation, spiritual practice, chanting, sharing and soul dancing</p> <p>\u2022 What to bring<br/>Bring water to drink</p> <p>\u2022 Important to know<br/>There is a $5.00 fee to participate please bring to event.</p> ",how_to_find_us:"We will be hosting in Ellen's Whole Body Health",visibility:"public",member_pay_fee:!1},{created:1557256846e3,duration:54e5,fee:{accepts:"cash",amount:5,currency:"CAD",description:"per person",label:"Price",required:!1},id:"nbhvxqyzmbfb",name:"Soul Healing Evening",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15675552e5,local_date:"2019-09-03",local_time:"19:00",updated:1557256846e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:2,venue:{id:25696757,name:"Ellen's Whole Body Health",lat:52.15083312988281,lon:-106.56902313232422,repinned:!0,address_1:"507 Nelson Rd",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7S 1P4",state:"sk"},group:{created:1491961175e3,name:"Saskatoon Abundance Seekers",id:23252209,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Abundance-Seekers",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Abundance-Seekers/events/nbhvxqyzmbfb/",description:"<p>\u2022 What we'll do<br/>Meditation, spiritual practice, chanting, sharing and soul dancing</p> <p>\u2022 What to bring<br/>Bring water to drink</p> <p>\u2022 Important to know<br/>There is a $5.00 fee to participate please bring to event.</p> ",how_to_find_us:"We will be hosting in Ellen's Whole Body Health",visibility:"public",member_pay_fee:!1},{created:1565732829e3,duration:72e5,id:"263980400",name:"Supper at Fat Burger ",date_in_series_pattern:!1,status:"upcoming",time:15663438e5,local_date:"2019-08-20",local_time:"18:30",updated:1565732829e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:2,venue:{id:26382591,name:"Fatburger Preston Crossing",lat:52.1467170715332,lon:-106.62200164794922,repinned:!1,address_1:"1703 Preston Ave N #110",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7N 4V2",state:"SK"},group:{created:1559257271e3,name:"Saskatoon Christian Social Club (20\u2019s and 30\u2019s)",id:32069046,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Saskatoon-Christian-Social-Club-20-s-and-30-s",who:"Members",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Saskatoon-Christian-Social-Club-20-s-and-30-s/events/263980400/",description:"<p>Supper at Fat Burger at 6:30pm, a chance to talk and get to know people.</p> ",how_to_find_us:"I will get a table and let everyone know where I am sitting.",visibility:"public",member_pay_fee:!1},{created:1564544659e3,duration:72e5,id:"263605817",name:"Mini-golf @ Putt and Bounce",date_in_series_pattern:!1,status:"upcoming",time:15667596e5,local_date:"2019-08-25",local_time:"14:00",updated:1564544667e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:18,venue:{id:24006556,name:"Putt and Bounce",lat:52.119998931884766,lon:-106.6500015258789,repinned:!0,address_1:"8th St and Arlington Ave",city:"Saskatoon",country:"ca",localized_country_name:"Canada",zip:"S7H 0A1",state:"SK"},group:{created:1437107403e3,name:"Saskatoon Fun-loving 40-somethings",id:18747442,join_mode:"open",lat:52.119998931884766,lon:-106.6500015258789,urlname:"Fun-loving-40s-Saskatoon",who:"Fun-lovers",localized_location:"Saskatoon, SK",state:"SK",country:"ca",region:"en_US",timezone:"Canada/Central"},link:"https://www.meetup.com/Fun-loving-40s-Saskatoon/events/263605817/",description:"<p>Another opportunity to be outside during the last days of summer. Practice your putting skills...or not. It's all fun and games. :)</p> <p>Date: Sunday August 25<br/>Time:200pm<br/>Location: Putt and Bounce (corner of 8th St and Arlington - behind Fuddruckers)</p> <p>A game costs $9.50. Putters and balls supplied.<br/>Meet at the entrance where we pay.</p> <p>Guests welcome.</p> <p>If anyone wants to go to Fuddruckers for dinner/ice cream after our game, we can arrange that for those who want to. It's in the same parking lot as putt and bounce.</p> <p>If this is your first meet up with the Fun-Lovers in 2019, please kindly bring $5 (annual fee) to assist in covering the admin costs of the group. Thanks in advance. :)</p> ",visibility:"public",member_pay_fee:!1}]},w=n(15),S=n.n(w);function E(e,t){return C.apply(this,arguments)}function C(){return(C=Object(y.a)(f.a.mark(function e(t,n){var a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://f2x5vqozrh.execute-api.ca-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://f2x5vqozrh.execute-api.ca-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,S.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(){return j.apply(this,arguments)}function j(){return(j=Object(y.a)(f.a.mark(function e(){var t,n,a,r,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=evqsptoae0qi6fh5v0fbivg7mq&response_type=code&redirect_uri=https://zaclinz.github.io/meetup",e.abrupt("return",null);case 7:return e.abrupt("return",E("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=12;break}return e.abrupt("return",t);case 12:return o=localStorage.getItem("refresh_token"),e.abrupt("return",E("renew",o));case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(){return(x=Object(y.a)(f.a.mark(function e(t){var n,a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,z();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,S.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e,t,n){return A.apply(this,arguments)}function A(){return(A=Object(y.a)(f.a.mark(function e(t,n,a){var r,o,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",k.events);case 2:return e.next=4,z();case 4:if(!(r=e.sent)){e.next=13;break}return o="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(o+="&lat="+t+"&lon="+n),a&&(o+="&page="+a),e.next=11,S.a.get(o);case 11:return i=e.sent,e.abrupt("return",i.data.events);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}var N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return x.apply(this,arguments)}(t).then(function(e){return n.setState({suggestions:e})})},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Enter a city to search"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)})))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),n.props.updateEvents(null,null,t)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("input",{type:"number",className:"numberEvents",onChange:this.handleInputChanged,value:this.state.query}),r.a.createElement("span",null," Events "))}}]),t}(a.Component),q=n(29),W=n.n(q),B=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null},n.updateEvents=function(e,t,a){e&&t?O(e,t,n.state.page).then(function(a){return n.setState({events:a,lat:e,lon:t})}):a?O(n.state.lat,n.state.lon,a).then(function(e){return n.setState({events:e,page:a})}):O(n.state.lat,n.state.lon,n.state.page).then(function(e){return n.setState({events:e})})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"logo",src:W.a,alt:"logo"}),r.a.createElement(N,{updateEvents:this.updateEvents}),r.a.createElement(I,{updateEvents:this.updateEvents}),r.a.createElement(_,{events:this.state.events}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(30);i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),M.config("a28b5f2b62ca44c8bd91f88833041565").install()}},[[31,1,2]]]);
//# sourceMappingURL=main.1cb8127a.chunk.js.map