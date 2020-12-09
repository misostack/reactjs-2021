# Clock

> Hiển thị đồng hồ tại múi giờ được chọn

## UI

- https://codepen.io/misostack/project/editor/Ajnrpr#

## Breakdown

> Container

HomePage

- Props: N/A
- State: timezoneList, selectedTimezoneList, currentTime
- Render:
  - Header
  - TimezoneList: timezoneList
  - ClockList: selectedTimezoneList, currentTime
  - Footer

> Components

- Header: render header
- Footer: render footer
- TimezoneList
  - Props: timezoneList
  - State: N/A
  - Render: a list of timezones
- ClockList
  - Props: clockList
  - State: N/A
  - Render: a list of Clock
- Clock
  - Props: currentTime: {hours,minutes,seconds}
  - State: N/A
  - Render: a Clock

## References

- https://www.javatpoint.com/react-hooks
