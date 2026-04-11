import * as hmUI from "@zos/ui";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TITLE_STYLE = {
  text: "CONFIGURAÇÕES",
  x: px(0),
  y: px(40),
  w: DEVICE_WIDTH,
  h: px(40),
  color: 0xffffff,
  text_size: px(22),
  align_h: hmUI.align.CENTER_H,
};

export const LABEL_CAL_STYLE = {
  text: "Cal por cerveja:",
  x: px(40),
  y: px(120),
  w: DEVICE_WIDTH - px(80),
  h: px(36),
  color: 0xaaaaaa,
  text_size: px(20),
};

export const VALUE_CAL_STYLE = {
  text: "147",
  x: px(0),
  y: px(160),
  w: DEVICE_WIDTH,
  h: px(50),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
};

export const BTN_INC_STYLE = {
  x: (DEVICE_WIDTH / 2) + px(20),
  y: px(220),
  w: px(70),
  h: px(70),
  radius: px(35),
  text: "+",
  text_size: px(32),
  normal_color: 0x333333,
  press_color: 0x555555,
};

export const BTN_DEC_STYLE = {
  x: (DEVICE_WIDTH / 2) - px(90),
  y: px(220),
  w: px(70),
  h: px(70),
  radius: px(35),
  text: "-",
  text_size: px(32),
  normal_color: 0x333333,
  press_color: 0x555555,
};

export const BTN_SAVE_STYLE = {
  x: px(60),
  y: DEVICE_HEIGHT - px(100),
  w: DEVICE_WIDTH - px(100),
  h: px(70),
  radius: px(35),
  text: "SALVAR",
  text_size: px(22),
  normal_color: 0x1a6b1a,
  press_color: 0x2a9b2a,
};
