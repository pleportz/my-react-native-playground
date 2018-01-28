import { connect } from 'react-redux';
import { addCount, setCurrentCount } from '../../redux/count';
import Home from './Home';

const mapDispatchToProps = {
  addCount,
  setCurrentCount,
};

export default connect(null, mapDispatchToProps)(Home);
