class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.findIndex((alarm) => alarm.time === time) !== -1) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({callback, time, canCall: true});
  }

  removeClock(time) {
    const deletableAlarmCollection = this.alarmCollection.filter((alarm) => alarm.time === time);

    deletableAlarmCollection.forEach((alarm) => {
      this.alarmCollection.splice(this.alarmCollection.indexOf(alarm), 1);
    });
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${hours < 10 ? ("0" + hours) : hours}:${minutes < 10 ? ("0" + minutes) : minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}