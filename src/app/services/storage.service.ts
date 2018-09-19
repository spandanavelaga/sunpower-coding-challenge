
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}
  
  setData(key, data): Promise<any> {
    return Promise.resolve().then( () => {
        return localStorage.setItem(key, JSON.stringify(data));
    });
  }

  getData(key): Promise<any> {
    return Promise.resolve().then( () => {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    });
  }

  removeData(key): Promise<any> {
    return Promise.resolve().then(function () {
        return localStorage.removeItem(key);
    });
  }

  clearAllData(): Promise<any> {
    return Promise.resolve().then(function () {
        return localStorage.clear();
    });
  }


}
