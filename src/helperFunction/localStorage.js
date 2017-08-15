export function setLocaleStorage(name, data){
  if(window.localStorage){
    sessionStorage.setItem(name, JSON.stringify(data));
  }


}

export function getLocaleStorage(name){
  if(window.localStorage) {
    return JSON.parse(sessionStorage.getItem(name));
  }
}
