var testArray = [
    {
      "eventId": 1234,
      "message": "Unset U01 John Doe Remote",
      "alarm": false,
      "fault": false,
      "date": "2000-03-13T17:31:06",
      "verification": false,
      "voiceTags": null,
      "voicePauses": null,
      "eventAction": 1,
      "type": 5,
      "number": 1
    },
    {
      "eventId": 1233,
      "message": "Full set U01 John Doe Remote",
      "alarm": false,
      "fault": false,
      "date": "2000-03-13T17:29:36",
      "verification": false,
      "voiceTags": null,
      "voicePauses": null,
      "eventAction": 2,
      "type": 5,
      "number": 1
    },
    {
      "eventId": 1232,
      "message": "User Inhibit Z009 UpstairsHall U01 John Doe",
      "alarm": false,
      "fault": false,
      "date": "2000-03-13T17:29:24",
      "verification": false,
      "voiceTags": null,
      "voicePauses": null,
      "eventAction": 0,
      "type": 6,
      "number": 1
    },
    {
      "eventId": 1231,
      "message": "Unset U01 John Doe Remote",
      "alarm": false,
      "fault": false,
      "date": "2000-03-13T17:28:57",
      "verification": false,
      "voiceTags": null,
      "voicePauses": null,
      "eventAction": 1,
      "type": 5,
      "number": 1
    },
    {
      "eventId": 1230,
      "message": "Full set U01 John Doe Remote",
      "alarm": false,
      "fault": false,
      "date": "2000-03-13T17:28:39",
      "verification": false,
      "voiceTags": null,
      "voicePauses": null,
      "eventAction": 2,
      "type": 5,
      "number": 1
    }
  ]

  var query = testArray.filter(x => x.eventAction == 2);
  console.log(query);
 

 //set a break point here to remove error...No debugger available, can not send 'variables'