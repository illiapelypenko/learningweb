const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
  const day = {
    startHours: parseTime(dayStart)[0],
    startMinutes: parseTime(dayStart)[1],
    endHours: parseTime(dayEnd)[0],
    endMinutes: parseTime(dayEnd)[1]
  };

  const meeting = {
    startHours: parseTime(startTime)[0],
    startMinutes: parseTime(startTime)[1],
    endHours: getMeetingEndTime(startTime, durationMinutes)[0],
    endMinutes: getMeetingEndTime(startTime, durationMinutes)[1]
  };

  console.log(isValidStartTime() && isValidEndTime() ? true : false);

  function parseTime(time) {
    const [hours, minutes] = time.split(':');
    return [+hours, +minutes];
  }

  function getMeetingEndTime(startTime, duration) {
    (endHours = parseTime(startTime)[0]),
      (endMinutes = parseTime(startTime)[1] + duration);

    while (endMinutes >= 60) {
      endHours++;
      endMinutes -= 60;
    }

    return [endHours, endMinutes];
  }

  function isValidStartTime() {
    if (day.startHours < meeting.startHours) {
      return true;
    }
    if (
      day.startHours === meeting.startHours &&
      day.startMinutes <= meeting.startMinutes
    ) {
      return true;
    }
    return false;
  }

  function isValidEndTime() {
    if (day.endHours > meeting.endHours) {
      return true;
    }
    if (
      day.endHours === meeting.endHours &&
      day.endMinutes >= meeting.endMinutes
    ) {
      return true;
    }
    return false;
  }
}

scheduleMeeting('7:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('7:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false
