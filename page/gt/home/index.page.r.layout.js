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

// Estilo da Imagem do Copo de Cerveja
export const BEER_IMG_STYLE = {
  x: px(140),
  y: px(100),
  pos_x: 25,
  w: px(200),
  h: px(200),
  src: 'image/beer_0.png'
};

// Estilo do Texto de Calorias (abaixo do copo)
export const CALORIE_TEXT_STYLE = {
  x: px(0),
  y: px(310),
  w: DEVICE_WIDTH,
  h: px(50),
  color: 0xffffff,
  text_size: px(24),
  align_h: hmUI.align.CENTER_H,
  text: '0 kcal'
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
