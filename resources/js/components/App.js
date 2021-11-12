import React, {Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom';
import StudyForm from './StudyForm';
import Navbar from "./layouts/Navbar";
import Studies from './studies/Studies';
import store from '../store';
import { Provider } from 'react-redux';
import {getStudies} from '../actions/study'


const App = () => {
    useEffect(() => {
        store.dispatch(getStudies())
    }, []);
    return (
        <Provider store={store}>
        <Fragment>
            <Navbar/>
            <div className="container">
                <StudyForm/>
                <Studies/>
                </div>
        </Fragment>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
