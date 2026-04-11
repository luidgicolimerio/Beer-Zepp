import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { Calorie } from "@zos/sensor";
import { createTimer } from "@zos/timer";
import { TEXT_STYLE, TITLE_STYLE, BTN_PLUS_STYLE, BTN_LESS_STYLE, CALORIE_STYLE, BEER_IMG_STYLE, CALORIE_TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("beer-app");

Page({
  state: {
    beerCount: 0,
    textWidget: null,
    calorieWidget: null,
    calorieSensor: null,
    totalCapacity: 1470, // 10 cervejas
    calPerBeer: 147
  },

  onInit() {
    logger.debug("Beer App iniciado");
    this.state.calorieSensor = new Calorie();

    this._calorieHandler = () => {
      this.updateBeerGlass();
    };
    this.state.calorieSensor.onChange(this._calorieHandler);
  },

  build() {
    logger.debug("Construindo interface");

    try {
      hmUI.createWidget(hmUI.widget.TEXT, TITLE_STYLE);

      this.state.beerImgWidget = hmUI.createWidget(hmUI.widget.IMG, BEER_IMG_STYLE);
      this.state.calorieTextWidget = hmUI.createWidget(hmUI.widget.TEXT, CALORIE_TEXT_STYLE);

      // Botões
      hmUI.createWidget(hmUI.widget.BUTTON, {
        ...BTN_PLUS_STYLE, 
        click_func: () => { 
          this.state.beerCount++;
          this.updateUI();
        }
      });

      hmUI.createWidget(hmUI.widget.BUTTON, {
        ...BTN_LESS_STYLE, 
        click_func: () => { 
          if (this.state.beerCount > 0) {
            this.state.beerCount--;
            this.updateUI();
          }
        }
      });

      // Aguarda 500ms após a montagem da tela para ler o sensor pela primeira vez
      createTimer(500, 0, () => {
        this.updateCalorieDisplay();
        this.updateBeerGlass();
      });
    } catch (e) {
      logger.error("Erro no build: " + e);
    }
  },

  updateCalorieDisplay() {
    if (!this.state.calorieWidget || !this.state.calorieSensor) {
      logger.debug("Widget ou Sensor ainda não prontos");
      return;
    }
    
    try {
      const val = this.state.calorieSensor.getCurrent();
      logger.debug("Valor bruto do sensor: " + val);
      
      // Se val for undefined ou null, garantimos o 0
      const currentCalories = (val !== undefined && val !== null) ? val : 0;
      
      this.state.calorieWidget.setProperty(hmUI.prop.TEXT, `Cal: ${currentCalories} kcal`);
    } catch (e) {
      logger.error("Erro na leitura: " + e);
    }
  },

  updateBeerGlass() {
    if (!this.state.beerImgWidget) return;

    const currentCal = this.state.calorieSensor.getCurrent() || 0;
    
    // Calcula o nível (0 a 10)
    let level = Math.floor(currentCal / this.state.calPerBeer);
    if (level > 9) level = 9; // Trava no copo cheio

    // Atualiza a imagem: 'beer_0.png', 'beer_1.png', etc.
    this.state.beerImgWidget.setProperty(hmUI.prop.SRC, `image/beer_${level}.png`);
    
    // Atualiza o texto
    if (this.state.calorieTextWidget) {
      this.state.calorieTextWidget.setProperty(hmUI.prop.TEXT, `${currentCal} kcal (${level} copos)`);
    }
  },

  updateUI() {
    if (this.state.textWidget) {
      this.state.textWidget.setProperty(hmUI.prop.TEXT, String(this.state.beerCount));
    }
    this.updateBeerGlass();
  },

  onDestroy() {
    if (this.state.calorieSensor && this._calorieHandler) {
      this.state.calorieSensor.offChange(this._calorieHandler);
    }
    logger.debug("App fechado");
  },
});