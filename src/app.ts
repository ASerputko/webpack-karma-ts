import { dataService } from './data.service';

export class App {

    dataService: any;

    constructor() {
        console.log('App is started');
        this.dataService = dataService;
    }

    getVersion() {
        return '0.1.0';
    }

    getData() {
        return this.dataService.getMetaData();
    }
}