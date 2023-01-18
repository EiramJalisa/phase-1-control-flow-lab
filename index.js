function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return ('This one is on me!');
  }else if (someValue > 200 && someValue <= 2000) {
    return ('That will be twenty bucks.');
  } else if (someValue > 2000 && someValue < 2500) {
    return ('I will gladly take your thirty bucks.');
  } else if (someValue >= 2500) {
    return ('No can do.');
  }
}

function ternaryCheckCity(someCity){
  if  (someCity === 'NYC') {
    return ('Ok, sounds good.');
  } else {
    return ('No go.');
  }
}

function switchOnCharmFromTip(someStatement){
  switch (someStatement) {
    case 'generous':
      return ('Thank you so much.');
    case 'not as generous':
      return ('Thank you.');  
    default:
      return ('Bye.');
  }
}