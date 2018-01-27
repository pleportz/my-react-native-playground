import { connect } from 'react-redux';
import { addCount } from '../../redux/count';
import Home from './Home';

const mapDispatchToProps = {
  addCount,
};

export default connect(null, mapDispatchToProps)(Home);
