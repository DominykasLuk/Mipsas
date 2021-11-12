import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addStudy} from "../actions/study";

const StudyForm = ({addStudy}) => {

    const [formData, setFormData] = useState(
        {
            name: "",
            statusKey: "",
            studyThumbnail: "",
            imagesCount: "",
            tags: "",
        },
        []
    );
    const {name, statusKey, studyThumbnail, imagesCount, tags} = formData;

    const onChange = e =>
        setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        addStudy(formData);
        setFormData({
            name: "", statusKey: "", studyThumbnail: "", imagesCount: "", tags: ""
        });
    };

    return (
        <div className="mb-5">
            <form
                onSubmit={e => {
                    onSubmit(e);
                }}
            >
                <div className="">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">
                            account_circle
                        </i>
                        <input
                            type="text"
                            className="validate"
                            name="name"
                            placeholder="Enter study Name"
                            value={name}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">sms</i>
                        <input
                            type="text"
                            className="validate"
                            name="statusKey"
                            placeholder="Enter a status key..."

                            value={statusKey}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">sms</i>

                        <input
                            type="text"
                            className="validate"
                            name="studyThumbnail"
                            placeholder="Enter a study thumbnail link..."
                            value={studyThumbnail}
                            onChange={e => onChange(e)}
                        />

                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">sms</i>

                        <input
                            type="number"
                            className="validate"
                            name="imagesCount"
                            placeholder="Enter an images count"
                            value={imagesCount}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">sms</i>

                        <input
                            type="text"
                            className="validate"
                            name="tags"
                            placeholder="Enter a tags"
                            value={tags}
                            onChange={e => onChange(e)}
                        />

                    </div>

                </div>
                <button
                    className="btn waves-effect waves-light ml-2"
                    type="submit"
                    name="action"
                >
                    Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}

StudyForm.propTypes = {
    addStudy: PropTypes.func.isRequired
};


export default connect(null, {addStudy})(StudyForm);
