import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { back } from "@zos/router";
import { localStorage } from "@zos/storage";
import { TITLE_STYLE, LABEL_CAL_STYLE, VALUE_CAL_STYLE, BTN_INC_STYLE, BTN_DEC_STYLE, BTN_SAVE_STYLE } from "zosLoader:./config.page.[pf].layout.js";

const logger = Logger.getLogger("config-page");
const DEFAULT_CAL = 147;

Page({
  state: {
    calPerBeer: DEFAULT_CAL,
    valueWidget: null,
  },

  onInit() {
    const saved = localStorage.getItem("calPerBeer");
    this.state.calPerBeer = saved ? parseInt(saved) : DEFAULT_CAL;
  },

  build() {
    hmUI.createWidget(hmUI.widget.TEXT, TITLE_STYLE);
    hmUI.createWidget(hmUI.widget.TEXT, LABEL_CAL_STYLE);

    this.state.valueWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...VALUE_CAL_STYLE,
      text: String(this.state.calPerBeer),
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BTN_INC_STYLE,
      click_func: () => {
        this.state.calPerBeer++;
        this.state.valueWidget.setProperty(hmUI.prop.TEXT, String(this.state.calPerBeer));
      },
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BTN_DEC_STYLE,
      click_func: () => {
        if (this.state.calPerBeer > 1) {
          this.state.calPerBeer--;
          this.state.valueWidget.setProperty(hmUI.prop.TEXT, String(this.state.calPerBeer));
        }
      },
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BTN_SAVE_STYLE,
      click_func: () => {
        localStorage.setItem("calPerBeer", String(this.state.calPerBeer));
        logger.debug("Salvo: " + this.state.calPerBeer);
        back();
      },
    });
  },
});
