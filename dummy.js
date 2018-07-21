var data;
var eventData = [];

function show_alert2() {

    var oArgs = {

        app_key: "7NcRZmf2tJjpdF89",

        q: "music",

        where: "Austin",

        location: "Austin Texas",

        // "date": "2013061000-2015062000",

        page_size: 35,

        sort_order: "date",

    };

    EVDB.API.call("/events/search", oArgs, function (oData) {
        console.log(JSON.stringify(oData);
        // document.getElementById("results").append(picture);
        console.log("test:");
        // console.log(oData.events.event[0]);

        // limit number of events to be not more than 30 or equal to amount of events if response is less than 30
        oData.length = Math.min(30, oData.length);
        //to see what .map does, look here:
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        //takes eventlist returned by api, creates event info/array and puts anonymous event info objects into it
        let eventData = oData.events.map((e) => {
            return {
                title: e.title,
                city_name: e.city_name,
                description: e.description,
                image: e.image.medium.url,
                start_time: e.start_time,
                eventfulURL: e.url,
                venue_name: e.venue_name,
                venueURL: e.venue_url
            }
        })
        console.log(eventData);
        var test = eventData[0].image;
        document.getElementById("results").append(test)


    }

        for (var i = 0; i < oData.length; i++) {
        var eventObj = [];
        if (oData.events.event[i].title != null) {
            eventObj.title = oData.events.event[i].title;

        } if (oData.events.event[i].city_name != null) {
            eventObj.city_name = oData.events.event[i].city_name;

        } if (oData.events.event[i].description != null) {
            eventObj.description = oData.events.event[i].description;

        } if (oData.events.event[i].image.medium != null) {
            eventObj.image = oData.events.event[i].image.medium.url;

        } if (oData.events.event[i].start_time != null) {
            eventObj.time = oData.events.event[i].start_time;

        } if (oData.events.event[i].url != null) {
            eventObj.eventfulURL = oData.events.event[i].url;

        } if (oData.events.event[i].venue_name != null) {
            eventObj.venue = oData.events.event[i].venue_name;

        } if (oData.events.event[i].venue_url != null) {
            eventObj.venueURL = oData.events.event[i].venue_url;

        }

        eventData.push(eventObj);
        console.log(i + oData.events.event[i].title);
    }
    ;


});







