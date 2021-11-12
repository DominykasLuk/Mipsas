import React from "react";

const StudyForm = () => {
    return (
        <div className="mb-5">
        <form>
            <div className="">
                <div className="input-field col s12">
                    <i className="material-icons prefix">
                        account_circle
                    </i>
                    <input
                        id="icon_prefix"
                        type="text"
                        className="validate"
                        name="username"
                    />
                    <label htmlFor="icon_prefix">Enter your Name</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">sms</i>

                    <textarea
                        id="textarea1"
                        className="materialize-textarea"
                        name="statusKey"
                    ></textarea>

                    <label htmlFor="textarea1">Enter a status key...</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">sms</i>

                    <textarea
                        id="textarea2"
                        className="materialize-textarea"
                        name="studyThumbnail"
                    ></textarea>

                    <label htmlFor="textarea2">Enter a study thubnail link...</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">sms</i>

                    <textarea
                        id="textarea3"
                        className="materialize-textarea"
                        name="imagesCount"
                    ></textarea>

                    <label htmlFor="textarea3">Enter an images count</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">sms</i>

                    <textarea
                        id="textarea4"
                        className="materialize-textarea"
                        name="tags"
                    ></textarea>

                    <label htmlFor="textarea4">Enter a tags</label>
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

export default StudyForm
