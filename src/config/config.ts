import { dev1 } from './dev1-config';

const initConfig = (env: string) => {
  switch (env.toString().toLowerCase()) {
    case 'dev1':
      (window as MainWindow).CONFIG = dev1;
      break;
    default:
      (window as MainWindow).CONFIG = {
        URL: 'test://test.com',
      };
      break;
  }
};

export default initConfig;
