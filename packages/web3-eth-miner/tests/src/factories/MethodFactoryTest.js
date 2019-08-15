import {
    SetEtherBaseMethod,
    SetExtraMethod,
    SetGasPriceMethod,
    StartMiningMethod,
    StopMiningMethod
} from 'web3-core-method';

import MethodFactory from '../../../src/factories/MethodFactory';

/**
 * MethodFactory test
 */
describe('MethodFactoryTest', () => {
    let methodFactory;

    beforeEach(() => {
        methodFactory = new MethodFactory();
    });

    it('constructor check', () => {
        expect(methodFactory.methods).toEqual({
            setEtherbase: SetEtherBaseMethod,
            setExtra: SetExtraMethod,
            setGasPrice: SetGasPriceMethod,
            startMining: StartMiningMethod,
            stopMining: StopMiningMethod
        });
    });
});
