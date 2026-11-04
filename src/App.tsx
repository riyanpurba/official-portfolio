import { MotionConfig } from 'framer-motion';
import { Base } from '@/templates/Base';

// reducedMotion="user": every animation respects the OS "reduce motion" setting
const App = () => (
  <MotionConfig reducedMotion="user">
    <Base />
  </MotionConfig>
);

export default App;
