import { dataService } from './data.service';
import { expect } from 'chai';

describe('DataService', () => {

    beforeEach(() => {
        this.dataService = dataService;
    });

    // skip unit test
    it.skip('should get metadata', () => {
        let metadata = this.dataService.getMetaData();
        expect(metadata).have.length(3);
        expect(metadata[0]).to.equal('aaa');
        expect(metadata[1]).to.equal('bbb');
        expect(metadata[2]).to.equal('ccc');
    });

    // not implemented unit test
    it('should catch exception if metadata fetching is failed');
});
