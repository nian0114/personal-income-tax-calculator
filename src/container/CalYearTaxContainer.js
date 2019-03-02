import { connect } from 'react-redux';
import { switchCity } from '../store/city';
import CalYearTax from '../component/CalYearTax';

const mapStateToProps = state => ({
  cityIdx: state.cityIdx
});

const mapDispatchToProps = {
  switchCity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalYearTax);
