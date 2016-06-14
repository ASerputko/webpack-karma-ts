import { App } from './app';
import { dataService } from './data.service';
import { expect } from 'chai';

describe('App', () => {

    beforeEach(() => {
        sinon.stub(dataService, 'getMetaData').returns(['eee']);
        sinon.stub(console, 'log');
        this.app = new App();
    });

    afterEach(() => {
        sinon.restore(dataService.getMetaData);
        sinon.restore(console.log);
    });

    it('should log when Application is started', () => {
        console.log.should.have.been.calledOnce;
        console.log.should.have.been.calledWith('App is started');
    })

    it('should get version of applicatin', () => {
        expect(this.app.getVersion()).to.equal('0.1.0');
    });

    it('should get metadata', () => {
        let metadata = this.app.getData();
        expect(metadata).have.length(1);
        expect(metadata[0]).to.equal('eee');

        dataService.getMetaData.should.have.been.calledOnce;
    });
});
