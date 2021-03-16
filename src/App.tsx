import { BrowserRouter as Router } from 'react-router-dom';
// import { IntlProvider } from 'react-intl';
// import { lacaleConfig } from './locales';
import { ConfigProvider } from 'antd';
// import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import RenderRouter from './routes';
// import { useAppState } from 'store';

const App = () => {
  // const { locale } = useAppState(state => state.user);

  // useEffect(() => {
  // 	if (locale === 'en_US') {
  // 		moment.locale('en');
  // 	} else if (locale === 'zh_CN') {
  // 		moment.locale('zh-cn');
  // 	}
  // }, [locale]);

  const getAntdLocale = () => {
    // if (locale === 'en_US') {
    // 	return enUS;
    // } else if (locale === 'zh_CN') {
    // 	return zhCN;
    //
    return zhCN;
  };

  return (
    <ConfigProvider locale={getAntdLocale()} componentSize='middle'>
      <Router>
        <RenderRouter />
      </Router>
    </ConfigProvider>
  );
};

export default App;
