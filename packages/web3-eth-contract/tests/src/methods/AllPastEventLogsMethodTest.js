import {GetPastLogsMethod} from 'web3-core-method';
import AllEventsLogDecoder from '../../../src/decoders/AllEventsLogDecoder';
import AllEventsOptionsMapper from '../../../src/mappers/AllEventsOptionsMapper';
import AbiModel from '../../../src/models/AbiModel';
import AbstractContract from '../../../src/AbstractContract';
import AllPastEventLogsMethod from '../../../src/methods/AllPastEventLogsMethod';

// Mocks
jest.mock('../../../src/decoders/AllEventsLogDecoder');
jest.mock('../../../src/models/AbiModel');
jest.mock('../../../src/mappers/AllEventsOptionsMapper');
jest.mock('../../../src/AbstractContract');

/**
 * AllPastEventLogsMethod test
 */
describe('AllPastEventLogsMethodTest', () => {
    let allPastEventLogsMethod, allEventsLogDecoderMock, abiModelMock, allEventsOptionsMapperMock;

    beforeEach(() => {
        new AllEventsLogDecoder();
        allEventsLogDecoderMock = AllEventsLogDecoder.mock.instances[0];

        new AbiModel();
        abiModelMock = AbiModel.mock.instances[0];

        new AllEventsOptionsMapper();
        allEventsOptionsMapperMock = AllEventsOptionsMapper.mock.instances[0];

        allPastEventLogsMethod = new AllPastEventLogsMethod(
            {},
            allEventsLogDecoderMock,
            abiModelMock,
            allEventsOptionsMapperMock
        );
    });

    it('constructor check', () => {
        expect(allPastEventLogsMethod.allEventsLogDecoder).toEqual(allEventsLogDecoderMock);

        expect(allPastEventLogsMethod.abiModel).toEqual(abiModelMock);

        expect(allPastEventLogsMethod).toBeInstanceOf(GetPastLogsMethod);
    });

    it('calls beforeExecution and executes the expected methods', () => {
        new AbstractContract();
        const contractMock = AbstractContract.mock.instances[0];

        allEventsOptionsMapperMock.map.mockReturnValueOnce({mapped: true});

        allPastEventLogsMethod.parameters = [{}];
        allPastEventLogsMethod.beforeExecution();

        expect(allEventsOptionsMapperMock.map).toHaveBeenCalledWith(abiModelMock, contractMock, {options: true});
    });

    it('calls afterExecution and returns the expected result', () => {
        const response = [false, false, false];

        allEventsLogDecoderMock.decode.mockReturnValue('decoded');

        const mappedResponse = allPastEventLogsMethod.afterExecution(response);

        expect(mappedResponse).toEqual(['decoded', 'decoded', 'decoded']);

        expect(allEventsLogDecoderMock.decode).toHaveBeenCalledTimes(3);

        expect(allEventsLogDecoderMock.decode).toHaveBeenCalledWith(abiModelMock, true);
    });
});
