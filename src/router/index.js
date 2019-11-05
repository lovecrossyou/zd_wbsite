import Business from '@/pages/business';
import About from '@/pages/about';
import Future from '@/pages/future';
import JoinUs from '@/pages/joinus';
import Cooperation from '@/pages/cooperation';
import Resources from '@/pages/resources';
import Message from '@/pages/message';
import Home from '@/pages/home/entrance';

const routes = [
  { path: '/', component: Home },
  { path: '/business', component: Business },
  { path: '/about', component: About },
  { path: '/future', component: Future },
  { path: '/joinus', component: JoinUs },
  { path: '/resources', component: Resources },
  { path: '/cooperation', component: Cooperation },
  { path: '/message', component: Message },
]

export default routes;