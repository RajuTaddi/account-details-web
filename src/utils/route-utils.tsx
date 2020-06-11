// import ClaculatorForm from '../components/calculator/calc-form';
// import Nasa from '../components/nasa/nasa';
// import MouseTracker from '../components/mouse-tracker/mouse-tracker';
// import TestContainer from '../components/other';
import AccountsDashboard from '../components/accounts/accounts-list';
import AccountDetail from '../components/accounts/account-statement';

export const routes = [
  // {
  //   key: 'calculator',
  //   path: '/calculator',
  //   component: ClaculatorForm,
  //   label: 'Calculator',
  //   title: 'Calculator',
  // },
  // {
  //   key: 'nasa',
  //   path: '/nasa',
  //   component: Nasa,
  //   label: 'Nasa',
  //   title: 'Nasa',
  // },
  // {
  //   key: 'mouse',
  //   path: '/mousetracker',
  //   component: MouseTracker,
  //   label: 'Mouser Tracker',
  //   title: 'Mouse Tracker',
  // },
  {
    key: 'accountlist',
    path: '/accounts',
    component: AccountsDashboard,
    label: 'Accounts Dashboard',
    title: 'Accounts',
  },
  {
    path: '/accountdetail/:accountnumber',
    component: AccountDetail,
    label: 'Account Details',
    title: 'Account Details',
  },
  // {
  //   key: 'other',
  //   path: '/other',
  //   component: TestContainer,
  //   label: 'Other',
  //   title: 'Other',
  // },
];
