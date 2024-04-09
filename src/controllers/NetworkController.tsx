export default class NetworkController {
    static BASE_URL = ""

    // ASSET
    static getAsset(assetId: number) {
        fetch(`${this.BASE_URL}/asset/${assetId}`, {
            method: "GET"
        })
    }

    // TODO: implement other params, ?inventoryNumber=...&placeOfCost=...&active=...
    static getCompanyAssets(companyId: number, inventoryNumber: string, placeOfCost: string, active: boolean) {
        fetch(`${this.BASE_URL}/asset/company/${companyId}`, {
            method: "GET"
        })
    }
    
    static createAsset(assetCreateData) {
        fetch(`${this.BASE_URL}/asset`, {
            method: "POST",
            body: assetCreateData // convert to string/json
        })
    }

    static updateAsset(id: number, assetUpdateData) {
        fetch(`${this.BASE_URL}/asset/${id}`, {
            method: "PUT",
            body: assetUpdateData // convert to string/json
        })
    }

    static deleteAsset(id: number) {
        fetch(`${this.BASE_URL}/asset/${id}`, {
            method: "DELETE"
        })
    }

    // COMPANY
    static getCompanies() {

    }

    static getCompany(id: number) {

    }

    static createCompany(companyCreateData) {

    }

    static updateCompany(companyId: number, companyUpdateData) {

    }

    static deleteCompany(companyId: number) {

    }

    // LOCATION
    static getLocations() { // MAY HAVE BEEN REMOVED FROM API

    }

    static getLocation(id) {

    }

    static createLocation(locationData) {

    }

    static updateLocation(locationId, locationData) {

    }

    static deleteLocation(locationId) {

    }
}