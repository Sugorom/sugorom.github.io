var minut, hours, second, date, data, mount;
var now;

function Timer_for_Igor() {

  now = moment();
  moment.lang('ru');

  var dateC = moment('October 25, 2020 0:30:00 AM');
  var dateB = moment(now.format('MMMM DD YYYY, h:mm:ss A'));


  second = dateB.diff(dateC, 'seconds')%60;
  minut = dateB.diff(dateC, 'minutes')%60;
  hours = dateB.diff(dateC, 'hours')%24;
  day = dateB.diff(dateC, 'day');
  
  $("#text_day").text(day);
  $("#text_hour").text(hours);
 
  $("#text_minute").text(minut); 
  
  $("#text_second").text(second);
  setTimeout(Timer_for_Igor, 1000);
}

setTimeout(Timer_for_Igor, 1);
