import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { noop } from 'lodash';
import { storage } from './storage';
import Config from 'react-native-config';
const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {
    // leave it empty
  },
  detect: async function (callback: (lng: string | readonly string[]) => void) {
    try {
      const selectedLanguage = storage.getString('@store:language');
      return selectedLanguage ?? 'en';
    } catch (error) {
      return 'en';
    }
  },
  cacheUserLanguage: async function (language: string) {
    // store "language" in AsyncStorage
    try {
      storage.set('@store:language', language);
    } catch (error) {
      // catch some error
    }
  },
};

const checkLanguageVersion = async (language: string) => {
  const localLanguageVersion = storage.getString('@store:languageVersion');
  const localLanguage = storage.getString('@store:language');

  const serverLanguageVersion = await fetch(
    `${Config.NX_API_URL}/language/v1/timestamp`
  );
  const serverLanguageVersionJSON = await serverLanguageVersion.json();
  if (
    localLanguageVersion !== serverLanguageVersionJSON.data ||
    localLanguage !== language
  ) {
    storage.set('@store:languageVersion', serverLanguageVersionJSON.data);
    return false;
  } else {
    return true;
  }
};

const backendOptions = {
  loadPath: '{{lng}}|{{ns}}',
  request: async (
    options: string,
    url: string,
    payload: string,
    callback: any
  ) => {
    const [lng] = url.split('|');
    try {
      const languageVersion = await checkLanguageVersion(lng);
      if (!languageVersion) {
        const languageContent = await fetch(
          `${Config.NX_API_URL}/language/v1/read/${lng}`
        );
        const languageContentJSON = await languageContent.json();
        storage.set(
          '@store:languageContent' + lng == 'en' ? 'en' : lng,
          JSON.stringify(languageContentJSON.data)
        );
        callback(null, {
          status: 200,
          data: languageContentJSON.data,
        });
      } else {
        const localContent = storage.getString(
          '@store:languageContent' + lng == 'en' ? '' : lng
        );
        callback(null, {
          status: 200,
          data: JSON.parse(localContent || ''),
        });
      }
    } catch (e) {
      console.error(e);
      if (e.message === 'Network request failed') {
        const localContent = storage.getString(
          '@store:languageContent' + lng == 'en' ? '' : lng
        );
        callback(null, {
          status: 200,
          data: JSON.parse(localContent || ''),
        });
      }
      callback(null, {
        status: 500,
      });
    }
  },
};

export const i18next = i18n.createInstance();

i18next
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'my', 'zh'],
    preload: ['en', 'my', 'zh'],
    compatibilityJSON: 'v3',
    backend: backendOptions,
    fallbackLng: 'en',
    debug: false, //can switch to true if needed during dev but commit pr should be false always
    lng: storage.getString('@store:language') ?? 'en', // switch using here for en, my ,zh , cimode （can use for see all the key mapping debug purpose)
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      suspense: false,
    } as any,
  })
  .then(noop)
  .catch(noop);

export default i18next;
