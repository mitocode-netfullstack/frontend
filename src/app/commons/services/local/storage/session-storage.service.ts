import { Injectable } from "@angular/core";
import { SecurySessionStorageService } from "./secure/secury-session-storage.service";

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {

	constructor(private storageService: SecurySessionStorageService) { }

	// Set the json data to local 
	setItem(key: string, value: any) {
		this.storageService.secureStorage.setItem(key, value);
	}
	// Get the json value from local 
	getItem(key: string) {
		return this.storageService.secureStorage.getItem(key);
	}

	// Clear the local 
	clear() {
		return this.storageService.secureStorage.clear();
	}

	// Remove the json value from local 
	removeItem(key: string) {
		return this.storageService.secureStorage.removeItem(key);
	}
}
