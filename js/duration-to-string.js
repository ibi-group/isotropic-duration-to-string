import _Error from 'isotropic-error';
import _moment from 'moment-timezone';

export default ({
    beginTime,
    duration,
    endTime
}) => {
    switch (typeof duration) {
        case 'number':
            if (duration === 0) {
                return '0.000 seconds';
            }

            if (beginTime || beginTime === 0) {
                beginTime = _moment(beginTime);

                if (beginTime.isValid()) {
                    endTime = _moment(beginTime).add(duration, 'milliseconds');
                } else {
                    throw _Error({
                        message: 'Invalid beginTime'
                    });
                }
            } else if (endTime || endTime === 0) {
                endTime = _moment(endTime);

                if (endTime.isValid()) {
                    beginTime = _moment(endTime).subtract(duration, 'milliseconds');
                } else {
                    throw _Error({
                        message: 'Invalid endTime'
                    });
                }
            } else {
                const now = Date.now();

                beginTime = _moment(now - duration);
                endTime = _moment(now);
            }

            break;
        case 'object':
            if (!duration) {
                if (beginTime || beginTime === 0) {
                    beginTime = _moment(beginTime);

                    if (beginTime.isValid()) {
                        if (endTime || endTime === 0) {
                            endTime = _moment(endTime);

                            if (!endTime.isValid()) {
                                throw _Error({
                                    message: 'Invalid endTime'
                                });
                            }
                        } else {
                            endTime = _moment();
                        }
                    } else {
                        throw _Error({
                            message: 'Invalid beginTime'
                        });
                    }
                } else if (endTime || endTime === 0) {
                    endTime = _moment(endTime);

                    if (endTime.isValid()) {
                        beginTime = _moment();
                    } else {
                        throw _Error({
                            message: 'Invalid endTime'
                        });
                    }
                } else {
                    throw _Error({
                        message: 'Missing arguments'
                    });
                }

                if (beginTime.isSame(endTime)) {
                    return '0.000 seconds';
                }

                if (beginTime.isAfter(endTime)) {
                    [
                        beginTime,
                        endTime
                    ] = [
                        endTime,
                        beginTime
                    ];
                }

                endTime.add(beginTime.utcOffset() - endTime.utcOffset(), 'minutes');

                break;
            }

            if (!_moment.isDuration(duration)) {
                duration = _moment.duration(duration);
            }

            if (duration.isValid()) {
                if (duration.asMilliseconds() === 0) {
                    return '0.000 seconds';
                }

                if (beginTime || beginTime === 0) {
                    beginTime = _moment(beginTime);

                    if (beginTime.isValid()) {
                        endTime = _moment(beginTime).add(duration);
                    } else {
                        throw _Error({
                            message: 'Invalid beginTime'
                        });
                    }
                } else if (endTime || endTime === 0) {
                    endTime = _moment(endTime);

                    if (endTime.isValid()) {
                        beginTime = _moment(endTime).subtract(duration);
                    } else {
                        throw _Error({
                            message: 'Invalid endTime'
                        });
                    }
                } else {
                    endTime = _moment();
                    beginTime = _moment(endTime).subtract(duration);
                }
            } else {
                throw _Error({
                    message: 'Invalid duration'
                });
            }

            break;
        case 'string':
            {
                const numberDuration = +duration;

                if (!Number.isNaN(numberDuration)) {
                    if (numberDuration === 0) {
                        return '0.000 seconds';
                    }

                    if (beginTime || beginTime === 0) {
                        beginTime = _moment(beginTime);

                        if (beginTime.isValid()) {
                            endTime = _moment(beginTime).add(numberDuration, 'milliseconds');
                        } else {
                            throw _Error({
                                message: 'Invalid beginTime'
                            });
                        }
                    } else if (endTime || endTime === 0) {
                        endTime = _moment(endTime);

                        if (endTime.isValid()) {
                            beginTime = _moment(endTime).subtract(numberDuration, 'milliseconds');
                        } else {
                            throw _Error({
                                message: 'Invalid endTime'
                            });
                        }
                    } else {
                        const now = Date.now();

                        beginTime = _moment(now - numberDuration);
                        endTime = _moment(now);
                    }

                    break;
                }
            }

            duration = _moment.duration(duration);

            if (duration.isValid()) {
                if (duration.asMilliseconds() === 0) {
                    return '0.000 seconds';
                }

                if (beginTime || beginTime === 0) {
                    beginTime = _moment(beginTime);

                    if (beginTime.isValid()) {
                        endTime = _moment(beginTime).add(duration);
                    } else {
                        throw _Error({
                            message: 'Invalid beginTime'
                        });
                    }
                } else if (endTime || endTime === 0) {
                    endTime = _moment(endTime);

                    if (endTime.isValid()) {
                        beginTime = _moment(endTime).subtract(duration);
                    } else {
                        throw _Error({
                            message: 'Invalid endTime'
                        });
                    }
                } else {
                    endTime = _moment();
                    beginTime = _moment(endTime).subtract(duration);
                }
            } else {
                throw _Error({
                    message: 'Invalid duration'
                });
            }

            break;
        case 'undefined':
            if (beginTime || beginTime === 0) {
                beginTime = _moment(beginTime);

                if (beginTime.isValid()) {
                    if (endTime || endTime === 0) {
                        endTime = _moment(endTime);

                        if (!endTime.isValid()) {
                            throw _Error({
                                message: 'Invalid endTime'
                            });
                        }
                    } else {
                        endTime = _moment();
                    }
                } else {
                    throw _Error({
                        message: 'Invalid beginTime'
                    });
                }
            } else if (endTime || endTime === 0) {
                endTime = _moment(endTime);

                if (endTime.isValid()) {
                    beginTime = _moment();
                } else {
                    throw _Error({
                        message: 'Invalid endTime'
                    });
                }
            } else {
                throw _Error({
                    message: 'Missing arguments'
                });
            }

            if (beginTime.isSame(endTime)) {
                return '0.000 seconds';
            }

            if (beginTime.isAfter(endTime)) {
                [
                    beginTime,
                    endTime
                ] = [
                    endTime,
                    beginTime
                ];
            }

            endTime.add(beginTime.utcOffset() - endTime.utcOffset(), 'minutes');

            break;
        default:
            throw _Error({
                message: 'Invalid duration'
            });
    }

    const beginTimeDayOfMonth = beginTime.date(),
        parts = [];

    let dayOfMonthDifference = endTime.date() - beginTimeDayOfMonth,
        hourDifference = endTime.hour() - beginTime.hour(),
        millisecondDifference = endTime.millisecond() - beginTime.millisecond(),
        minuteDifference = endTime.minute() - beginTime.minute(),
        monthDifference = endTime.month() - beginTime.month(),
        secondDifference = endTime.second() - beginTime.second(),
        yearDifference = endTime.year() - beginTime.year();

    if (millisecondDifference < 0) {
        millisecondDifference += 1000;
        secondDifference -= 1;
    }

    if (secondDifference < 0) {
        secondDifference += 60;
        minuteDifference -= 1;
    }

    if (minuteDifference < 0) {
        minuteDifference += 60;
        hourDifference -= 1;
    }

    if (hourDifference < 0) {
        hourDifference += 24;
        dayOfMonthDifference -= 1;
    }

    if (dayOfMonthDifference < 0) {
        const previousMonthDayCount = _moment(endTime.format('YYYY-MM'), 'YYYY-MM').subtract(1, 'month').daysInMonth();

        if (previousMonthDayCount < beginTimeDayOfMonth) {
            dayOfMonthDifference += beginTimeDayOfMonth;
        } else {
            dayOfMonthDifference += previousMonthDayCount;
        }

        monthDifference -= 1;
    }

    if (monthDifference < 0) {
        monthDifference += 12;
        yearDifference -= 1;
    }

    switch (yearDifference) {
        case 0:
            break;
        case 1:
            parts.push('1 year');
            break;
        default:
            parts.push(yearDifference, 'years');
            break;
    }

    switch (monthDifference) {
        case 0:
            break;
        case 1:
            parts.push('1 month');
            break;
        default:
            parts.push(monthDifference, 'months');
            break;
    }

    switch (dayOfMonthDifference) {
        case 0:
            break;
        case 1:
            parts.push('1 day');
            break;
        default:
            parts.push(dayOfMonthDifference, 'days');
            break;
    }

    switch (hourDifference) {
        case 0:
            break;
        case 1:
            parts.push('1 hour');
            break;
        default:
            parts.push(hourDifference, 'hours');
            break;
    }

    switch (minuteDifference) {
        case 0:
            break;
        case 1:
            parts.push('1 minute');
            break;
        default:
            parts.push(minuteDifference, 'minutes');
            break;
    }

    if (millisecondDifference >= 100) {
        parts.push(`${secondDifference}.${millisecondDifference} seconds`);
    } else if (millisecondDifference >= 10) {
        parts.push(`${secondDifference}.0${millisecondDifference} seconds`);
    } else {
        parts.push(`${secondDifference}.00${millisecondDifference} seconds`);
    }

    return parts.join(' ');
};
