import { useIsMobile } from '#hooks/useIsMobile.js';
import DesktopApp from './DesktopApp.jsx';
import MobileApp from '#mobile/MobileApp.jsx';

const App = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileApp /> : <DesktopApp />;
};

export default App;
