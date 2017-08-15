  export function findApplicablePrice(price, count, discount) {
    try {
     var discountKey = 0;
     var discountKeysArray = Object.keys(discount);
      discountKeysArray.forEach((key) => {
        if(count >= key){
          discountKey = key;
        }
      });
      var appliedPercentage = discount[discountKey];
      if(appliedPercentage){
        return parseFloat((100 - appliedPercentage)*(parseFloat(price)*count)/100);
      }else{
        return price*count;
      }

    }
    catch (err) {
      return price*count;
    }
  }

  export function getPrice(tickets, selected, forHowMany) {
    var price = 0;
    var index = 0;
    tickets.forEach((ticket) => {
      if (forHowMany == "oneTicket") {
        if (ticket.type == 1) {
          index = ticket.dates.indexOf(selected.selectedDate);
          price = price + parseFloat(ticket.price[index]);
        } else if (ticket.type == 2) {
          index = ticket.slots.indexOf(selected.selectedTime);
          price = price + parseFloat(ticket.price[index]);
        } else {
          price = price + parseFloat(ticket.price[0]);
        }
      } else if (ticket.count > 0) {
        var discount = "";
        if(ticket.sDisc){
         discount = JSON.parse(ticket.sDisc);
        }

        if (ticket.type == 1) {
          index = ticket.dates.indexOf(selected.selectedDate);
          price = price + findApplicablePrice(ticket.price[index], ticket.count, discount);
        } else if (ticket.type == 2) {
          index = ticket.slots.indexOf(selected.selectedTime);
          price = price + findApplicablePrice(ticket.price[index], ticket.count, discount);
        } else {
          price = price + findApplicablePrice(ticket.price[0], ticket.count, discount);
        }
      }

    });
    return price;
  }
