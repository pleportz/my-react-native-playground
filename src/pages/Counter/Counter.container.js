import { connect } from 'react-redux';
import Counter from './Counter';
import { currentCountSelector } from '../../redux/count';

const mapStateToProps = state => ({
  count: currentCountSelector(state),
});

export default connect(mapStateToProps)(Counter);
