import constants from '../constants.js';
import {DramaticRollsSettingsForm} from './settingsForm.js';
import soundEffectController from './soundEffectController.js';

export const defaultSettings = {
    critSounds: soundEffectController.critSoundEffectFiles.map(soundFilePath => ({enabled: true, path: soundFilePath, isUserAddedSound: false})),
    fumbleSounds: soundEffectController.fumbleSoundEffectFiles.map(soundFilePath => ({enabled: true, path: soundFilePath, isUserAddedSound: false}))
};

export const registerSettings = () => {
    game.settings.register(constants.modName, 'add-sound', {
        name: 'dramatic-rolls.settings.add-sound.name',
        hint: 'dramatic-rolls.settings.add-sound.label',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.registerMenu(constants.modName, "configuration-menu", {
        name: 'dramatic-rolls.settings.configure-sounds.name',
        label: 'dramatic-rolls.settings.configure-sounds.name',
        hint: 'dramatic-rolls.settings.configure-sounds.label',
        icon: 'fas fa-cogs',
        type: DramaticRollsSettingsForm,
        restricted: true
    });

    game.settings.register(constants.modName, "settings", {
        name: `${constants.modName}-settings`,
        scope: "world",
        default: defaultSettings,
        type: Object,
        config: false
    });
};

export const registerConfettiSetting = () => {
    game.settings.register(constants.modName, 'add-confetti', {
        name: 'dramatic-rolls.settings.add-confetti.name',
        // hint: '',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
};