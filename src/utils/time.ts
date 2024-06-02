import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

export const getTimeDiff = (startTime: number, endTime: number) => {
  // 计算时间差（以毫秒为单位）
  const timeDiff = endTime - startTime;

  // 将毫秒转换为天、小时、分钟和秒
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // 计算剩余的小时、分钟和秒
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // 返回结果
  return {
    days: days,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
    isInTime: timeDiff > 0,
  };
};

export const getTimeDiffString = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}  ago`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}  ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""}  ago`;
  }
  return `${seconds} second${seconds > 1 ? "s" : ""}  ago`;
};

/**
 * portal 倒计时
 * @param targetTime 目标时间的时间戳，13位字符串或数字
 * @returns 天、小时、分钟、秒钟的数组
 */
export const getCountdown = (targetTime: number) => {
  try {
    const len = String(targetTime);
    dayjs.extend(duration);
    const now =
      len.length === 10 ? dayjs(targetTime * 1000) : dayjs(targetTime);
    // 手动计算两个时间的差值
    const diffInMs = dayjs(targetTime * 1000).diff(dayjs()); // 毫秒数
    const diff = dayjs.duration(diffInMs); // duration对象
    if (now.diff(dayjs(), "second", true) <= 0) return;
    const day = diff.days();
    const hour = diff.hours() < 10 ? `0${diff.hours()}` : diff.hours();
    const min = diff.minutes() < 10 ? `0${diff.minutes()}` : diff.minutes();
    const sen = diff.seconds() < 10 ? `0${diff.seconds()}` : diff.seconds();
    return [day, hour, min, sen];
  } catch (err) {
    console.log(err);
  }
};
