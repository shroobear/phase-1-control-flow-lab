function scuberGreetingForFeet(footage){
  if (footage <= 400) {
    return 'This one is on me!'
  } else if (footage <= 2000) {
    return 'That will be twenty bucks.'
  } else if (footage <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
  // Write your code here!
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? ('Ok, sounds good.') : ('No go.');
  // Write your code here!
}

function switchOnCharmFromTip(tipSize){
  let reply

  switch (tipSize) {
    case 'generous':
      reply = 'Thank you so much.'
      break;
    case 'not as generous':
      reply = 'Thank you.'
      break;
    default:
      reply = 'Bye.'
  }
  return reply
  // Write your code here!
}