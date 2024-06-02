import numbro from "numbro";
import BigNumber from "bignumber.js";

/**
 * portal 错误信息翻译功能
 * @param e 错误信息
 * @param market 市场，用于拿去其中提示的市场
 * @returns 提示文字
 */
export const portalErrorTranslation = (e: any) => {
  console.log(e);
  const reason = e?.reason ? "execution reverted:" + e?.reason : "";
  const errMessage =
    reason || e?.message || e?.error?.message || e || "Unknown error";
  return errMessage;
};

// format address
export const formatAddress = (address?: string) => {
  return address
    ? address.replace(address?.slice(5, address.length - 3), "...")
    : "--";
};

// toWei
export const toWei = (value?: string | number) => {
  return new BigNumber(value || "").times(new BigNumber(10).pow(18));
};
// fromWei
export const fromWei = (value?: string | number) => {
  return new BigNumber(value || "").div(new BigNumber(10).pow(18));
};

// from token's address and decimals
export const toTokenDecimals = (value: string | number, decimals: number) => {
  return new BigNumber(value || "").times(new BigNumber(10).pow(decimals));
};
// to token's address and decimals
export const fromTokenDecimals = (value: string | number, decimals: number) => {
  return new BigNumber(value || "").div(new BigNumber(10).pow(decimals));
};

export const formatTokenNumber = (value?: string) => {
  return numbro(value || 0).format({
    average: true,
    trimMantissa: true,
    mantissa: 4,
    roundingFunction(num: number) {
      return Math.floor(num);
    },
  });
};

export function cutZero(old: string) {
  const regexp = /(?:\.0*|(\.\d+?)0+)$/;
  return old.replace(regexp, "$1");
}

export const formatValue = (
  value?: string | BigNumber,
  isFromWei = false,
  decimalPlaces = 4
) => {
  if (value instanceof BigNumber) {
    value = isNaN(value.toNumber()) ? "" : value;
  }
  return value
    ? new BigNumber(value).gt(0)
      ? new BigNumber(value).gt(0.0001)
        ? cutZero(
            new BigNumber(value)
              .div(isFromWei ? 10 ** 18 : 1)
              .toFormat(decimalPlaces)
          )
        : "<0.0001"
      : "0"
    : "--";
};

export function formatTime(num: number) {
  if (!num) return "00";
  return num > 9 ? num : "0" + num;
}
