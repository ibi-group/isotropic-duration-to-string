import _chai from 'chai';
import _durationToString from '../js/duration-to-string.js';
import _mocha from 'mocha';
import _moment from 'moment-timezone';

const _closeEnough = (actual, expected) => {
    actual = actual.split(' ');
    expected = expected.split(' ');

    _chai.expect(actual.length).to.equal(expected.length);

    for (let index = 0; index < actual.length; index += 1) {
        if (index === actual.length - 2) {
            _chai.expect(+actual[index]).to.be.closeTo(+expected[index], .5);
        } else {
            _chai.expect(actual[index]).to.equal(expected[index]);
        }
    }
};

_mocha.describe('duration-to-string', () => {
    _mocha.it('should export a function', () => {
        _chai.expect(_durationToString).to.be.a('function');
    });

    _mocha.it('should provide a formatted text representation of a duration instance', () => {
        _chai.expect(_durationToString({
            duration: _moment.duration(0)
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(1)
        })).to.equal('0.001 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(89)
        })).to.equal('0.089 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(987)
        })).to.equal('0.987 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(17711)
        })).to.equal('17.711 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(60000)
        })).to.equal('1 minute 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(121393)
        })).to.equal('2 minutes 1.393 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(3600000)
        })).to.equal('1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(63245986)
        })).to.equal('17 hours 34 minutes 5.986 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(86400000)
        })).to.equal('1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(701408733)
        })).to.equal('8 days 2 hours 50 minutes 8.733 seconds');
    });

    _mocha.it('should provide a formatted text representation of a duration number of milliseconds', () => {
        _chai.expect(_durationToString({
            duration: 0
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            duration: 1
        })).to.equal('0.001 seconds');

        _chai.expect(_durationToString({
            duration: 89
        })).to.equal('0.089 seconds');

        _chai.expect(_durationToString({
            duration: 987
        })).to.equal('0.987 seconds');

        _chai.expect(_durationToString({
            duration: 17711
        })).to.equal('17.711 seconds');

        _chai.expect(_durationToString({
            duration: 60000
        })).to.equal('1 minute 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 121393
        })).to.equal('2 minutes 1.393 seconds');

        _chai.expect(_durationToString({
            duration: 3600000
        })).to.equal('1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 63245986
        })).to.equal('17 hours 34 minutes 5.986 seconds');

        _chai.expect(_durationToString({
            duration: 86400000
        })).to.equal('1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 701408733
        })).to.equal('8 days 2 hours 50 minutes 8.733 seconds');
    });

    _mocha.it('should provide a formatted text representation of a duration numeric string', () => {
        _chai.expect(_durationToString({
            duration: '0'
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            duration: '1'
        })).to.equal('0.001 seconds');

        _chai.expect(_durationToString({
            duration: '89'
        })).to.equal('0.089 seconds');

        _chai.expect(_durationToString({
            duration: '987'
        })).to.equal('0.987 seconds');

        _chai.expect(_durationToString({
            duration: '17711'
        })).to.equal('17.711 seconds');

        _chai.expect(_durationToString({
            duration: '60000'
        })).to.equal('1 minute 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '121393'
        })).to.equal('2 minutes 1.393 seconds');

        _chai.expect(_durationToString({
            duration: '3600000'
        })).to.equal('1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '63245986'
        })).to.equal('17 hours 34 minutes 5.986 seconds');

        _chai.expect(_durationToString({
            duration: '86400000'
        })).to.equal('1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '701408733'
        })).to.equal('8 days 2 hours 50 minutes 8.733 seconds');
    });

    _mocha.it('should provide a formatted text representation of a duration object', () => {
        _chai.expect(_durationToString({
            duration: {
                seconds: 0
            }
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            duration: {
                milliseconds: 1
            }
        })).to.equal('0.001 seconds');

        _chai.expect(_durationToString({
            duration: {
                seconds: .089
            }
        })).to.equal('0.089 seconds');

        _chai.expect(_durationToString({
            duration: {
                milliseconds: 987
            }
        })).to.equal('0.987 seconds');

        _chai.expect(_durationToString({
            duration: {
                milliseconds: 17711
            }
        })).to.equal('17.711 seconds');

        _chai.expect(_durationToString({
            duration: {
                minutes: 1
            }
        })).to.equal('1 minute 0.000 seconds');

        _chai.expect(_durationToString({
            duration: {
                milliseconds: 393,
                minutes: 2,
                seconds: 1
            }
        })).to.equal('2 minutes 1.393 seconds');

        _chai.expect(_durationToString({
            duration: {
                minutes: 60
            }
        })).to.equal('1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: {
                hours: 17,
                minutes: 34,
                seconds: 5.986
            }
        })).to.equal('17 hours 34 minutes 5.986 seconds');

        _chai.expect(_durationToString({
            duration: {
                days: 1
            }
        })).to.equal('1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: {
                days: 8,
                hours: 2,
                milliseconds: 733,
                minutes: 50,
                seconds: 8
            }
        })).to.equal('8 days 2 hours 50 minutes 8.733 seconds');
    });

    _mocha.it('should provide a formatted text representation of a duration string', () => {
        _chai.expect(_durationToString({
            duration: '00:00:00.000'
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            duration: '0:0:0.001'
        })).to.equal('0.001 seconds');

        _chai.expect(_durationToString({
            duration: '00:00:00.089'
        })).to.equal('0.089 seconds');

        _chai.expect(_durationToString({
            duration: '00:00:00.987'
        })).to.equal('0.987 seconds');

        _chai.expect(_durationToString({
            duration: '00:00:17.711'
        })).to.equal('17.711 seconds');

        _chai.expect(_durationToString({
            duration: '00:01:00.000'
        })).to.equal('1 minute 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '0:2:1.393'
        })).to.equal('2 minutes 1.393 seconds');

        _chai.expect(_durationToString({
            duration: '01:00:00'
        })).to.equal('1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '17:34:5.986'
        })).to.equal('17 hours 34 minutes 5.986 seconds');

        _chai.expect(_durationToString({
            duration: '1.0:00:00'
        })).to.equal('1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '8.02:50:08.733'
        })).to.equal('8 days 2 hours 50 minutes 8.733 seconds');
    });

    _mocha.it('should allow a customizable begin time as a date instance with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            beginTime: new Date('2020-01-01T05:00:00.000Z'),
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-02-01T05:00:00.000Z'),
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-03-01T05:00:00.000Z'),
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-04-01T04:00:00.000Z'),
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a date instance with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            beginTime: new Date('2020-01-01T05:00:00.000Z'),
            duration: 2592000000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-02-01T05:00:00.000Z'),
            duration: 2592000000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-03-01T05:00:00.000Z'),
            duration: 2592000000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-04-01T04:00:00.000Z'),
            duration: 2592000000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a date instance with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            beginTime: new Date('2020-01-01T05:00:00.000Z'),
            duration: '2592000000'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-02-01T05:00:00.000Z'),
            duration: '2592000000'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-03-01T05:00:00.000Z'),
            duration: '2592000000'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-04-01T04:00:00.000Z'),
            duration: '2592000000'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a date instance with duration as a string', () => {
        _chai.expect(_durationToString({
            beginTime: new Date('2020-01-01T05:00:00.000Z'),
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-02-01T05:00:00.000Z'),
            duration: '30.00:00:00'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-03-01T05:00:00.000Z'),
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: new Date('2020-04-01T04:00:00.000Z'),
            duration: '30.00:00:00'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as an iso string with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            beginTime: '2020-01-01T05:00:00.000Z',
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-02-01T05:00:00.000Z',
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-03-01T05:00:00.000Z',
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-04-01T04:00:00.000Z',
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as an iso string with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            beginTime: '2020-01-01T05:00:00.000Z',
            duration: 2592000000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-02-01T05:00:00.000Z',
            duration: 2592000000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-03-01T05:00:00.000Z',
            duration: 2592000000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-04-01T04:00:00.000Z',
            duration: 2592000000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as an iso string with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            beginTime: '2020-01-01T05:00:00.000Z',
            duration: '2592000000'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-02-01T05:00:00.000Z',
            duration: '2592000000'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-03-01T05:00:00.000Z',
            duration: '2592000000'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-04-01T04:00:00.000Z',
            duration: '2592000000'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as an iso string with duration as a string', () => {
        _chai.expect(_durationToString({
            beginTime: '2020-01-01T05:00:00.000Z',
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-02-01T05:00:00.000Z',
            duration: '30.00:00:00'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-03-01T05:00:00.000Z',
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2020-04-01T04:00:00.000Z',
            duration: '30.00:00:00'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a moment instance with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-01-01', 'America/New_York'),
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-02-01', 'America/New_York'),
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-03-01', 'America/New_York'),
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-04-01', 'America/New_York'),
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a moment instance with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-01-01', 'America/New_York'),
            duration: 2592000000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-02-01', 'America/New_York'),
            duration: 2592000000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-03-01', 'America/New_York'),
            duration: 2592000000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-04-01', 'America/New_York'),
            duration: 2592000000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a moment instance with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-01-01', 'America/New_York'),
            duration: '2592000000'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-02-01', 'America/New_York'),
            duration: '2592000000'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-03-01', 'America/New_York'),
            duration: '2592000000'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-04-01', 'America/New_York'),
            duration: '2592000000'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a moment instance with duration as a string', () => {
        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-01-01', 'America/New_York'),
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-02-01', 'America/New_York'),
            duration: '30.00:00:00'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-03-01', 'America/New_York'),
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: _moment.tz('2020-04-01', 'America/New_York'),
            duration: '30.00:00:00'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a number of milliseconds since the unix epoch with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            beginTime: 1577854800000,
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1580533200000,
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1583038800000,
            duration: _moment.duration(2592000000)
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1585713600000,
            duration: _moment.duration(2592000000)
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a number of milliseconds since the unix epoch with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            beginTime: 1577854800000,
            duration: 2592000000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1580533200000,
            duration: 2592000000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1583038800000,
            duration: 2592000000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1585713600000,
            duration: 2592000000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a number of milliseconds since the unix epoch with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            beginTime: 1577854800000,
            duration: '2592000000'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1580533200000,
            duration: '2592000000'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1583038800000,
            duration: '2592000000'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1585713600000,
            duration: '2592000000'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable begin time as a number of milliseconds since the unix epoch with duration as a string', () => {
        _chai.expect(_durationToString({
            beginTime: 1577854800000,
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1580533200000,
            duration: '30.00:00:00'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1583038800000,
            duration: '30.00:00:00'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 1585713600000,
            duration: '30.00:00:00'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a date instance with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: new Date('2020-02-01T05:00:00.000Z')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: new Date('2020-03-01T05:00:00.000Z')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: new Date('2020-04-01T04:00:00.000Z')
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: new Date('2020-05-01T04:00:00.000Z')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a date instance with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: new Date('2020-02-01T05:00:00.000Z')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: new Date('2020-03-01T05:00:00.000Z')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: new Date('2020-04-01T04:00:00.000Z')
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: new Date('2020-05-01T04:00:00.000Z')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a date instance with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: new Date('2020-02-01T05:00:00.000Z')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: new Date('2020-03-01T05:00:00.000Z')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: new Date('2020-04-01T04:00:00.000Z')
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: new Date('2020-05-01T04:00:00.000Z')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a date instance with duration as a string', () => {
        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: new Date('2020-02-01T05:00:00.000Z')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: new Date('2020-03-01T05:00:00.000Z')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: new Date('2020-04-01T04:00:00.000Z')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: new Date('2020-05-01T04:00:00.000Z')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as an iso string with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: '2020-02-01T05:00:00.000Z'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: '2020-03-01T05:00:00.000Z'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: '2020-04-01T04:00:00.000Z'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: '2020-05-01T04:00:00.000Z'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as an iso string with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: '2020-02-01T05:00:00.000Z'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: '2020-03-01T05:00:00.000Z'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: '2020-04-01T04:00:00.000Z'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: '2020-05-01T04:00:00.000Z'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as an iso string with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: '2020-02-01T05:00:00.000Z'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: '2020-03-01T05:00:00.000Z'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: '2020-04-01T04:00:00.000Z'
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: '2020-05-01T04:00:00.000Z'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as an iso string with duration as a string', () => {
        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: '2020-02-01T05:00:00.000Z'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: '2020-03-01T05:00:00.000Z'
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: '2020-04-01T04:00:00.000Z'
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: '2020-05-01T04:00:00.000Z'
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a moment instance with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: _moment.tz('2020-02-01', 'America/New_York')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: _moment.tz('2020-03-01', 'America/New_York')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: _moment.tz('2020-04-01', 'America/New_York')
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: _moment.tz('2020-05-01', 'America/New_York')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a moment instance with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: _moment.tz('2020-02-01', 'America/New_York')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: _moment.tz('2020-03-01', 'America/New_York')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: _moment.tz('2020-04-01', 'America/New_York')
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: _moment.tz('2020-05-01', 'America/New_York')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a moment instance with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: _moment.tz('2020-02-01', 'America/New_York')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: _moment.tz('2020-03-01', 'America/New_York')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: _moment.tz('2020-04-01', 'America/New_York')
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: _moment.tz('2020-05-01', 'America/New_York')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a moment instance with duration as a string', () => {
        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: _moment.tz('2020-02-01', 'America/New_York')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: _moment.tz('2020-03-01', 'America/New_York')
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: _moment.tz('2020-04-01', 'America/New_York')
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: _moment.tz('2020-05-01', 'America/New_York')
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a number of milliseconds since the unix epoch with duration as a duration instance', () => {
        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: 1580533200000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: 1583038800000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: 1585713600000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: _moment.duration(2592000000),
            endTime: 1588305600000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a number of milliseconds since the unix epoch with duration as a number of milliseconds', () => {
        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: 1580533200000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: 1583038800000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: 1585713600000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: 2592000000,
            endTime: 1588305600000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a number of milliseconds since the unix epoch with duration as a numeric string', () => {
        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: 1580533200000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: 1583038800000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: 1585713600000
        })).to.equal('30 days 1 hour 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '2592000000',
            endTime: 1588305600000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should allow a customizable end time as a number of milliseconds since the unix epoch with duration as a string', () => {
        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: 1580533200000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: 1583038800000
        })).to.equal('1 month 1 day 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: 1585713600000
        })).to.equal('30 days 0.000 seconds');

        _chai.expect(_durationToString({
            duration: '30.00:00:00',
            endTime: 1588305600000
        })).to.equal('1 month 0.000 seconds');
    });

    _mocha.it('should calculate the duration between a begin time and end time when duration is null or undefined', () => {
        _chai.expect(_durationToString({
            beginTime: 0,
            endTime: 0
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: 0,
            duration: null,
            endTime: 0
        })).to.equal('0.000 seconds');

        _chai.expect(_durationToString({
            beginTime: '2000-01-01T00:00:00.000Z',
            endTime: '2001-02-02T01:01:01.001Z'
        })).to.equal('1 year 1 month 1 day 1 hour 1 minute 1.001 seconds');

        _chai.expect(_durationToString({
            beginTime: '2000-01-01T00:00:00.000Z',
            duration: null,
            endTime: '2001-02-02T01:01:01.001Z'
        })).to.equal('1 year 1 month 1 day 1 hour 1 minute 1.001 seconds');

        _chai.expect(_durationToString({
            beginTime: '2000-01-01T00:00:00.000Z',
            endTime: '2002-03-03T02:02:02.002Z'
        })).to.equal('2 years 2 months 2 days 2 hours 2 minutes 2.002 seconds');

        _chai.expect(_durationToString({
            beginTime: '2000-01-01T00:00:00.000Z',
            duration: null,
            endTime: '2002-03-03T02:02:02.002Z'
        })).to.equal('2 years 2 months 2 days 2 hours 2 minutes 2.002 seconds');

        _chai.expect(_durationToString({
            beginTime: '2019-02-02T01:01:01.001Z',
            endTime: '2020-01-01T00:00:00.000Z'
        })).to.equal('10 months 29 days 22 hours 58 minutes 58.999 seconds');

        _chai.expect(_durationToString({
            beginTime: '2019-02-02T01:01:01.001Z',
            duration: null,
            endTime: '2020-01-01T00:00:00.000Z'
        })).to.equal('10 months 29 days 22 hours 58 minutes 58.999 seconds');
    });

    _mocha.it('should calculate the duration between a begin time and now when duration is null or undefined', () => {
        _closeEnough(_durationToString({
            beginTime: Date.now() - 61111
        }), '1 minute 1.111 seconds');

        _closeEnough(_durationToString({
            beginTime: Date.now() - 61111,
            duration: null
        }), '1 minute 1.111 seconds');

        _closeEnough(_durationToString({
            beginTime: 0
        }), _durationToString({
            beginTime: 0,
            endTime: Date.now()
        }));

        _closeEnough(_durationToString({
            beginTime: 0,
            duration: null
        }), _durationToString({
            beginTime: 0,
            endTime: Date.now()
        }));
    });

    _mocha.it('should calculate the duration between an end time and now when duration is null or undefined', () => {
        _closeEnough(_durationToString({
            endTime: Date.now() + 61111
        }), '1 minute 1.111 seconds');

        _closeEnough(_durationToString({
            duration: null,
            endTime: Date.now() + 61111
        }), '1 minute 1.111 seconds');

        _closeEnough(_durationToString({
            endTime: 0
        }), _durationToString({
            beginTime: 0,
            endTime: Date.now()
        }));

        _closeEnough(_durationToString({
            duration: null,
            endTime: 0
        }), _durationToString({
            beginTime: 0,
            endTime: Date.now()
        }));
    });

    _mocha.it('should provide a positive duration if the begin time is after the end time', () => {
        _chai.expect(_durationToString({
            beginTime: '2001-02-02T01:01:01.001Z',
            endTime: '2000-01-01T00:00:00.000Z'
        })).to.equal('1 year 1 month 1 day 1 hour 1 minute 1.001 seconds');

        _chai.expect(_durationToString({
            beginTime: '2001-02-02T01:01:01.001Z',
            duration: null,
            endTime: '2000-01-01T00:00:00.000Z'
        })).to.equal('1 year 1 month 1 day 1 hour 1 minute 1.001 seconds');

        _chai.expect(_durationToString({
            beginTime: '2002-03-03T02:02:02.002Z',
            endTime: '2000-01-01T00:00:00.000Z'
        })).to.equal('2 years 2 months 2 days 2 hours 2 minutes 2.002 seconds');

        _chai.expect(_durationToString({
            beginTime: '2002-03-03T02:02:02.002Z',
            duration: null,
            endTime: '2000-01-01T00:00:00.000Z'
        })).to.equal('2 years 2 months 2 days 2 hours 2 minutes 2.002 seconds');
    });

    _mocha.it('should throw on invalid input', () => {
        _chai.expect(() => {
            _durationToString({});
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: null
            });
        }).to.throw();

        {
            /* An invalid string doesn't actually produce an invalid duration,
            it instead produces a duration of 0. The module however still checks
            for an invalid duration in this case. There is no way to reach this
            branch with code coverage without replacing moment.duration. */

            const duration = _moment.duration;

            _moment.duration = () => duration.invalid();

            _chai.expect(() => {
                _durationToString({
                    duration: 'invalid duration'
                });
            }).to.throw();

            _moment.duration = duration;
        }

        _chai.expect(() => {
            _durationToString({
                duration: Symbol('invalid duration')
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: _moment.duration.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: _moment.invalid(),
                duration: 1
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: _moment.invalid(),
                duration: _moment.duration(1)
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: _moment.invalid(),
                duration: '1'
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: _moment.invalid(),
                duration: '00:00:00.001'
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: _moment.invalid(),
                duration: null
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: 0,
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                beginTime: 0,
                duration: null,
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: 1,
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: _moment.duration(1),
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: '1',
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: '00:00:00.001',
                endTime: _moment.invalid()
            });
        }).to.throw();

        _chai.expect(() => {
            _durationToString({
                duration: null,
                endTime: _moment.invalid()
            });
        }).to.throw();
    });
});
