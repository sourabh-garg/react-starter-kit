export function checkEmail(value){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}


export function checkBilling(values, countryCode){
  try{
    var name = values.name;
    var email = values.email;
    var phone = values.phone;
    var phoneLength = phone.toString().length;
    var digits = countryCode == "+91" ? 10 : 9;
    if(name && checkEmail(email) &&  phoneLength == digits){
      return true;
    }else{
      return false;
    }
  }catch(err){
    return false;
  }

}


export function checkEnquire(values, countryCode){
  try{
    var name = values.name;
    var email = values.email;
    var mobile = values.mobile;
    var phoneLength = mobile.toString().length;
    var digits = countryCode == "+91" ? 10 : 9;
    if(name && checkEmail(email) &&  phoneLength == digits){
      return true;
    }else{
      return false;
    }
  }catch(err){
    return false;
  }

}



export function isObjEmpty(data){

  let obj = true;
  let x;

  for(x in data){
     if(!data[x]){
       obj = false;
     }
  }
 return obj;

}



var array = require('lodash/array');
import moment from 'moment';

export function AvailableData(courts, dateItem){
  var startTimeList = [];
  var localCourts = courts.courtList;
  //let filteredCourts = [];
  // let selectedSlots = [];
  localCourts.forEach(function (court) {
    var courtId = court.courtId;
    var courtName = court.courtName;
    var slotDuration  = court.slotDuration;
    var slotDate = dateItem;
    if(!court.minPerson ){
      court["minPerson"]  = 0;
    }
    if(!court.maxPersion){
      court["maxPersion"] = 10000;
    }
    court['slotDurationMin'] = moment.duration(slotDuration).asMinutes();
    court.slotInfo.forEach(function (slot) {
      slot['courtName'] = courtName;
      slot['courtId'] = courtId;
      slot['durationInMin'] = moment.duration(slotDuration).asMinutes();
      slot['date'] = slotDate;
      slot['timeInMinutes'] = moment.duration(slot.time).asMinutes();
      if(court.courtBro) {
        slot['courtBrother'] = JSON.parse(court.courtBro);
      }
      // inserting start time only available ones
      if (startTimeList.indexOf(slot['timeInMinutes'])==-1 && slot.status > 0) {
        startTimeList.push(slot['timeInMinutes']);
      }
    });

  });

  return {courts: localCourts, startTimeList: startTimeList};

}



export function getFilteredCourts(availability, slotStart, duration){
  let filteredSlots = [];
  let filteredCourts = [];

  let courts = availability.courtList;


  courts.forEach(function (court) {
    if(duration % court.slotDurationMin ===0) {
      let numberOfSlots = duration / court.slotDurationMin;
      court.slotInfo.forEach(function (slot) {
        let startTimeInMinutes = moment.duration(slotStart).asMinutes();
        if(slot.timeInMinutes >= startTimeInMinutes &&
          (slot.timeInMinutes + slot.durationInMin) <= (startTimeInMinutes+duration) &&
          slot.status > 0 &&
          slot.status >= court.minPerson) {
          filteredSlots.push(slot);
          numberOfSlots -= 1;
        }
      });
      if (numberOfSlots == 0) {
        filteredCourts.push(court);
      }
    }
  });

  return {filteredSlots: filteredSlots, filteredCourts: filteredCourts};

}



export function findSelectedSlots(filteredSlots, courtIds, courtDetails){
  var selectedSlot = [];
  var InitialCount = 1;
  if(courtDetails){
    InitialCount = courtDetails.minPerson;
  }
  courtIds.forEach(function(courtId){

    filteredSlots.forEach(function(slot){
      if(slot.courtId == courtId){
        var found = {status: slot.status, date: slot.date, courtId: slot.courtId, time: slot.time, count: InitialCount, price: slot.price, courtBro: slot.courtBrother, courtName: slot.courtName};
        selectedSlot.push(found);
      }
    });
  });
  return selectedSlot;

}


export function checkCourtBrother(selectedSlot, courtId, callback){
  var found = false;
  selectedSlot.forEach(function(slot){
    if (slot.courtBro) {
      slot.courtBro.forEach(function (id) {
        if(courtId==id) {
          found= true;
        }
      });
    }
  });
  return callback(found);
}


export function findMaxCount(slots, courtId){
  var maxCount = 1000;
  var price = 0;

  slots.some((slot) => {
    if(slot.courtId == courtId){
      if(slot.status < maxCount){
        maxCount = slot.status;
      }
      price = slot.price;
    }});
  return ({maxCount: maxCount, price: price });

}

export function findCount(countArray, courtId){
  var count = 0;
  if(countArray.length > 0){
    countArray.forEach((courtData) =>{
      if(courtData.courtId == courtId){
        count = courtData.count;
      }
    });

    return count;

  }else{
    return 0;
  }
}

export function tryIncreaseCount(countArray, courtId, court){

  var newCountArray = countArray.map((data) =>{
    if(data.courtId == courtId){
      if(data.count < data.maxCount && data.count < court.maxPersion){
        data.count++;
        return data;
      }else{
        return data
      }
    }else{
      return data;
    }
  });

  return newCountArray;

}


export function tryDecreaseCount(countArray, courtId, court){

  var newCountArray = countArray.map((data) =>{
    if(data.courtId == courtId){
      if(data.count > 0){
        if(data.count == court.minPerson){
          data.count = 0;
        }else{
          data.count--;
        }

        return data;
      }else{
        return data
      }
    }else{
      return data;
    }
  });

  return newCountArray;

}


export function incrementSelectedSlotCount(countArray, slots, courtId){
  var count = findCount(countArray, courtId);

  var newSlots = slots.map((slot) =>{
    if(slot.courtId == courtId){
      slot.count = count;
      return slot;
    }else{
      return slot;
    }
  });

  return newSlots;

}

export function checkSelectedSlotValid(slots){

  var selectedSlots = slots.map((slot) =>{

    if(slot.count>0){
      return slot;
    }

  });
  return selectedSlots;
}


export function getSelectedSlotsWithCount(selectedSlots, ticketCount){

  var newSelectedSlots = selectedSlots.map((slot) =>{

    ticketCount.map((ticket) =>{
      if(ticket.courtId == slot.courtId){
        slot.count = ticket.count;

      }
    });
    return slot;

  });
  return newSelectedSlots;
}


export function incDropDownCount(ticket, courtDetails){
  if(ticket.count < ticket.maxCount && ticket.count < courtDetails.maxPersion){
    ticket.count++
  }
  return ticket;
}

export function decDropDownCount(ticket, courtDetails){

  if(ticket.count > courtDetails.minPerson){
    ticket.count--
  }
  return ticket;
}

export function incSlotDropDownCount(count, slots){

  var newSlots = slots.map((slot) => {
    slot.count = count;
    return slot;
  });
  return newSlots
}

export function getCourt(courts, courtId){
  var courtFound = {};

  courts.forEach((court) =>{

    if(court.courtId == courtId){
      courtFound = court;
    }

  });

  return courtFound;

}

export function getCourtIdArray(courts){
  var courtIds = [];

  courts.map((court) =>{
    courtIds.push(court.courtId);
  });

  return courtIds;

}


export function getSlotsWithCount(filteredCourts, selectedSlots){
  var newSlots = selectedSlots;
  filteredCourts.map((court) => {
    newSlots.map((slot) =>{
      if(slot.courtId == court.courtId){
        slot.count = court.minPerson;
      }
    });

  });
  return newSlots;
}


export function getTicketWithCount(courts, selectedSlots){
  var ticketCount = [];
  courts.map((court) => {
    var maxCountAndPrice = findMaxCount(selectedSlots, court.courtId);
    var item  =  {courtId: court.courtId, count: court.minPerson,
      maxCount:maxCountAndPrice.maxCount, price: maxCountAndPrice.price };
    ticketCount.push(item);
  });

  return ticketCount;

}


export function getSlotsByCourt(slots, courtId) {
  var newSlots = [];
  slots.forEach((slot) =>{
    if(slot.courtId == courtId){
      newSlots.push(slot);
    }
  });
  return newSlots;

}


export function isCourtSelectable(courts, time, courtId){
  var court = getCourt(courts,courtId);
  var minslotTime = court.slotDurationMin*court.minSlots;
  console.log(minslotTime, time)
  if(time >= minslotTime){
    return true;
  }else{
    return false;
  }
}
export function CourtSelectableminTime(courts, courtId){
  var court = getCourt(courts,courtId);
  var minslotTime = court.slotDurationMin*court.minSlots;
  return minslotTime;
}
