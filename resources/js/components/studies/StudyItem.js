import React,{Fragment} from "react";
import {connect} from 'react-redux';
import {deleteStudy} from '../../actions/study';
import PropTypes from 'prop-types';

const StudyItem = ({studies:{name, statusKey, studyThumbnail, imagesCount,tags, id},deleteStudy}) => {
    return (
        <Fragment>
            <div>
                <ul className="collection mx-3">
                    <li className="collection-item avatar">
                        <i className="material-icons circle">person_outline</i>
                        <span className="title">{name}</span>
                        <p>{statusKey}</p>
                        <img src={studyThumbnail}></img>
                        <p>{imagesCount}</p>
                        <p>{tags}</p>
                        <a
                            className="secondary-content waves-effect waves-light  red darken-3 btn"
                            onClick={()=>deleteStudy(id)}
                        >
                            <i className="material-icons left">
                                delete_forever
                            </i>
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
StudyItem.propTypes = {
    deleteStudy: PropTypes.func.isRequired,
}

export default connect(null, {deleteStudy})(StudyItem);


