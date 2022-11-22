import constants from "../constants.js";
import { DramaticRollsSettingsForm } from "./settingsForm.js";
import soundEffectController from "./soundEffectController.js";

export const defaultSettings = {
   critSounds: soundEffectController.critSoundEffectFiles.map(
      (soundFilePath) => ({
         enabled: true,
         path: soundFilePath,
         isUserAddedSound: false,
         volume: 1.0,
      })
   ),
   fumbleSounds: soundEffectController.fumbleSoundEffectFiles.map(
      (soundFilePath) => ({
         enabled: true,
         path: soundFilePath,
         isUserAddedSound: false,
         volume: 1.0,
      })
   ),
};

export const registerSettings = () => {
   game.settings.register(constants.modName, "add-sound", {
      name: "dramatic-rolls.settings.add-sound.name",
      hint: "dramatic-rolls.settings.add-sound.label",
      scope: "world",
      config: true,
      default: true,
      restricted: true,
      type: Boolean,
   });

   game.settings.registerMenu(constants.modName, "configuration-menu", {
      name: "dramatic-rolls.settings.configure-sounds.name",
      label: "dramatic-rolls.settings.configure-sounds.name",
      hint: "dramatic-rolls.settings.configure-sounds.label",
      icon: "fas fa-cogs",
      type: DramaticRollsSettingsForm,
      restricted: true,
   });

   game.settings.register(constants.modName, "settings", {
      name: `${constants.modName}-settings`,
      scope: "world",
      default: defaultSettings,
      type: Object,
      config: false,
      restricted: true,
   });

   game.settings.register(constants.modName, "disable-npc-rolls", {
      name: "dramatic-rolls.settings.disable-npc-rolls.name",
      hint: "dramatic-rolls.settings.disable-npc-rolls.label",
      scope: "world",
      config: true,
      default: false,
      type: Boolean,
      restricted: true,
   });

   game.settings.register(constants.modName, "trigger-on-public-only", {
      name: "dramatic-rolls.settings.trigger-on-public-only.name",
      hint: "dramatic-rolls.settings.trigger-on-public-only.label",
      scope: "world",
      config: true,
      default: false,
      type: Boolean,
      restricted: true,
   });

   game.settings.register(constants.modName, "add-confetti", {
      name: "dramatic-rolls.settings.add-confetti.name",
      // hint: '',
      scope: "world",
      config: true,
      default: true,
      type: Boolean,
      restricted: false,
   });

   if (game.system.id === "pf2e") {
      game.settings.register(
         constants.modName,
         "pf2e-trigger-on-degree-of-success",
         {
            name: "dramatic-rolls.settings.pf2e-trigger-on-degree-of-success.name",
            hint: "dramatic-rolls.settings.pf2e-trigger-on-degree-of-success.label",
            scope: "world",
            config: true,
            default: false,
            type: Boolean,
            restricted: true,
         }
      );
   }
};
