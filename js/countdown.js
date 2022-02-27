var minut, hours, second, date, data, mount;
var now;


function Timer_for_Igor() {

  now = moment();
  moment.lang('ru');

  var dateC = moment('October 25, 2020 0:30:00 AM');
  var dateB = moment('Febrary 27, 2022 22:31:34 PM');
  //var dateB = moment(now.format('MMMM DD YYYY, h:mm:ss A'));


  second = dateB.diff(dateC, 'seconds')%60;
  minut = dateB.diff(dateC, 'minutes')%60;
  hours = dateB.diff(dateC, 'hours')%24;
  day = dateB.diff(dateC, 'day');
  
  $("#text_day").text(day);

  if (hours.toString().length == 2) {
    $("#text_hour").text(hours);
  } else {
    $("#text_hour").text(0 + hours.toString());
  }
  
  if (minut.toString().length == 2) {
    $("#text_minute").text(minut);
  } else {
    $("#text_minute").text(0 + minut.toString());
  }
  
  if (second.toString().length == 2) {
    $("#text_second").text(second); 
  } else {
    $("#text_second").text(0 + second.toString()); 
  }
  
  setTimeout(Timer_for_Igor, 1000);
}

setTimeout(Timer_for_Igor, 1);
