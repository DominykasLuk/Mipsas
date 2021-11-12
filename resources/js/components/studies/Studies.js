import React,{useEffect} from 'react';
import StudyItem from "./StudyItem";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getStudies} from "../../actions/study";

const Studies = ({studies: {studies,loading},getStudies})=> {

    useEffect(() => {
        getStudies();
    }, [getStudies])

    return  loading ?
        (<div className="progress">
            <div className="indeterminate"></div>
        </div>)
        :
        (
            <div>
                <div className="collection mx-3">
                    <a href="#!" className="collection-item active">
                        Total Studies: {studies.length}
                    </a>
                </div>
                {studies.map(studies=>
                    <StudyItem  key={studies.id} studies={studies}/>
                )}
            </div>

        )
}

Studies.propTypes = {
    studies: PropTypes.object.isRequired,
    getStudies:PropTypes.func.isRequired,
}

const mapStateToProps = state =>  ({
    studies: state.studies
})

export default connect(mapStateToProps, {getStudies})(Studies);

