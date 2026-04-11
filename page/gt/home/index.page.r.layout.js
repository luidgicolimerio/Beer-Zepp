import * as hmUI from "@zos/ui";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TITLE_STYLE = {
  text: "BEER COUNT",
  x: px(0),
  y: px(40),
  w: DEVICE_WIDTH,
  h: px(40),
  color: 0xffffff,
  text_size: px(24),
  align_h: hmUI.align.CENTER_H,
};

export const CALORIE_STYLE = {
  x: px(0),
  y: px(85),
  w: DEVICE_WIDTH,
  h: px(40),
  color: 0xAAAAAA,
  text_size: px(20),
  align_h: hmUI.align.CENTER_H,
};

export const TEXT_STYLE = {
  text: "0",
  x: px(0),
  y: (DEVICE_HEIGHT - px(120)) / 2,
  w: DEVICE_WIDTH,
  h: px(120),
  color: 0xFFD700,
  text_size: px(90),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
};

export const BTN_PLUS_STYLE = {
  x: (DEVICE_WIDTH / 2) - px(110),
  y: DEVICE_HEIGHT - px(130),
  w: px(90),
  h: px(90),
  radius: px(45),
  text: "+",
  text_size: px(40),
  normal_color: 0x333333,
  press_color: 0x555555,
};

export const BTN_LESS_STYLE = {
  x: (DEVICE_WIDTH / 2) + px(20),
  y: DEVICE_HEIGHT - px(130),
  w: px(90),
  h: px(90),
  radius: px(45),
  text: "-",
  text_size: px(40),
  normal_color: 0x333333,
  press_color: 0x555555,
};