import "./uploadfile.css";


const UploadFile = () => {

return (
    <div>
        <div className="container flex">
            <div className="flex column center">
               
                <div id="registercontent" className="register-content round-edges">
                    <form>
                        <div id="login-content" className="login-container flex column">
                            <p className="login-title dark-purple">Upload File</p>
                            <label className="dark-purple" htmlFor="add-course">
                                Name
                            </label>
                            <input
                                type="text"
                                className="input round-edges"
                                id="filename"
                                name="name"
                            />

                            <label className="dark-purple">
                                Description
                            </label>
                            <input
                                type="text"
                                className="input round-edges"
                                id="filedescription"
                                name="description"
                            />

                            <label className="dark-purple">
                                Choose File
                            </label>
                            <input
                                type="file"
                                className="input round-edges"
                                id="instructorId"
                                name="instructorId"
                            />
                             <label className="dark-purple">
                                Uploaded By
                            </label>
                            <input
                                type="text"
                                className="input round-edges"
                                id="uploadedby"
                                name="uploadedBy"
                            />
                        </div>

                        <button type="submit" className="login-btn round-edges btn">
                            Add
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
);
}
export default UploadFile;
