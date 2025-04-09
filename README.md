# isotropic-duration-to-string

[![npm version](https://img.shields.io/npm/v/isotropic-duration-to-string.svg)](https://www.npmjs.com/package/isotropic-duration-to-string)
[![License](https://img.shields.io/npm/l/isotropic-duration-to-string.svg)](https://github.com/ibi-group/isotropic-duration-to-string/blob/main/LICENSE)
![](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

A utility that converts time durations into human-readable string representations with intelligent unit handling.

## Why Use This?

- **Human-Readable Format**: Converts durations into natural language with appropriate units
- **Flexible Input Formats**: Accepts durations as milliseconds, strings, objects, or Moment.js durations
- **Time Unit Intelligence**: Automatically determines and displays the appropriate time units
- **Date-Aware Calculations**: Accurately handles months, leap years, and other calendar complexities
- **Multiple Calculation Methods**: Calculate durations using explicit values or start/end times

## Installation

```bash
npm install isotropic-duration-to-string
```

## Usage

```javascript
import _durationToString from 'isotropic-duration-to-string';
import _moment from 'moment-timezone';

// Basic usage with milliseconds
_durationToString({
    duration: 63245986
});
// 17 hours 34 minutes 5.986 seconds

// Using start and end times
_durationToString({
  beginTime: '2025-01-01T00:00:00Z',
  endTime: '2025-01-02T12:30:45.500Z'
});
// "1 day 12 hours 30 minutes 45.500 seconds"

// Using Moment.js duration
_durationToString({
    duration: _moment.duration(2, 'days')
});
// 2 days 0.000 seconds
```

## API

### durationToString(options)

Converts a duration to a formatted string representation.

#### Parameters

- `options` (Object): Configuration options object with the following properties:
  - `beginTime` (Date|String|Number|Moment): Start time for calculating the duration. Optional.
  - `duration` (Number|String|Object|Moment.Duration): The duration to format. Optional if beginTime and/or endTime are provided.
  - `endTime` (Date|String|Number|Moment): End time for calculating the duration. Optional.

#### Returns

- (String): A formatted string representation of the duration (e.g., '2 hours 30 minutes 15.750 seconds')

## Examples

### Different Duration Input Formats

```javascript
import _durationToString from 'isotropic-duration-to-string';
import _moment from 'moment-timezone';

// Milliseconds
_durationToString({
    duration: 1000
});
// 1.000 seconds

// Numeric string
_durationToString({
    duration: '60000'
});
// 1 minute 0.000 seconds

// Duration string (hh:mm:ss.SSS format)
_durationToString({
    duration: '01:30:45.500'
});
// 1 hour 30 minutes 45.500 seconds

// Duration with days (d.hh:mm:ss.SSS format)
_durationToString({
    duration: '2.06:30:00'
});
// 2 days 6 hours 30 minutes 0.000 seconds

// Object format
_durationToString({
    duration: {
        days: 1,
        hours: 6,
        milliseconds: 500,
        minutes: 30,
        seconds: 15
    }
});
// 1 day 6 hours 30 minutes 15.500 seconds

// Moment.js duration
_durationToString({
    duration: _moment.duration(90, 'minutes')
});
// "1 hour 30 minutes 0.000 seconds"
```

### Using Begin and End Times

```javascript
import _durationToString from 'isotropic-duration-to-string';
import _moment from 'moment-timezone';

// Using Date objects
_durationToString({
  beginTime: new Date('2025-01-01T00:00:00Z'),
  endTime: new Date('2025-02-01T00:00:00Z')
});
// 1 month 0.000 seconds

// Using ISO strings
_durationToString({
  beginTime: '2025-01-01T12:00:00Z',
  endTime: '2025-01-01T14:30:45Z'
});
// 2 hours 30 minutes 45.000 seconds

// Using timestamp (milliseconds since epoch)
_durationToString({
  beginTime: 1735689600000,
  endTime: 1735776000000
});
// 1 day 0.000 seconds

// Using Moment.js objects
_durationToString({
  beginTime: _moment('2025-01-01'),
  endTime: _moment('2025-01-03')
});
// "2 days 0.000 seconds"
```

### Complex Date-Aware Calculations

```javascript
import _durationToString from 'isotropic-duration-to-string';

// Duration crossing month boundaries
_durationToString({
  beginTime: '2025-01-31T00:00:00Z',
  endTime: '2025-03-01T00:00:00Z'
});
// 29 days 0.000 seconds

// Duration crossing DST boundaries
_durationToString({
  beginTime: '2023-03-11T00:00:00-05:00', // Day before DST in US
  endTime: '2023-03-12T00:00:00-04:00'    // Day of DST in US
});
// 23 hours 0.000 seconds

// Duration crossing year boundaries
_durationToString({
  beginTime: '2022-12-31T00:00:00Z',
  endTime: '2023-01-01T00:00:00Z'
});
// 1 day 0.000 seconds
```

## Handling Special Cases

### Zero Duration

```javascript
import _durationToString from 'isotropic-duration-to-string';

_durationToString({
    duration: 0
});
// 0.000 seconds

_durationToString({
    beginTime: '2025-01-01T00:00:00Z',
    endTime: '2025-01-01T00:00:00Z'
});
// 0.000 seconds
```

### Defaulting to Current Time

```javascript
import _durationToString from 'isotropic-duration-to-string';

// Begin time with no end time (end time defaults to now)
_durationToString({
    beginTime: '2025-01-01T00:00:00Z'
});
// Result will depend on current time

// End time with no begin time (begin time defaults to now)
_durationToString({
    endTime: '2225-01-01T00:00:00Z'
});
// Result will depend on current time
```

## Error Handling

The module throws errors for invalid inputs:

- Missing required arguments (when no duration, beginTime, or endTime is provided)
- Invalid duration format
- Invalid beginTime or endTime

Each error includes a descriptive message to help diagnose the issue.

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/ibi-group/isotropic-duration-to-string/blob/main/CONTRIBUTING.md) for contribution guidelines.

## Issues

If you encounter any issues, please file them at https://github.com/ibi-group/isotropic-duration-to-string/issues
