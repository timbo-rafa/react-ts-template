import { connect } from 'react-redux';
import SimplePage from './SimplePage';
import { increment } from '../reducers/counter/actions';
import { RootState } from '../reducers/rootReducer';

const mapStateToProps = (state: RootState) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch: any) => ({
    increment: (amount: number) => dispatch(increment(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimplePage);
