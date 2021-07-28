import 'react-i18next';

import common from '../../public/locales/pt-BR/common.json';
import homepage from '../../public/locales/pt-BR/homepage.json';

declare module 'react-i18next' {
  interface Resources {
    common: typeof common;
    homepage: typeof homepage;
  }
}
