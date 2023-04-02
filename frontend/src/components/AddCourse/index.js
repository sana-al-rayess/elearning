import React, { useState } from "react";
import "./addcourse.css";


const AddCourse = () => {

return (
    <div>
        <div className="container flex">
            <div className="flex column center">
               
                <div id="registercontent" className="register-content round-edges">
                    <form>
                        <div id="login-content" className="login-container flex column">
                            <p className="login-title dark-purple">Add Course</p>
                            <label className="dark-purple" htmlFor="add-course">
                                Course Title
                            </label>
                            <input
                                type="text"
                                className="input round-edges"
                                id="title"
                                name="title"
                            />

                            <label className="dark-purple">
                                Description
                            </label>
                            <input
                                type="text"
                                className="input round-edges"
                                id="description"
                                name="description"
                            />

                            <label className="dark-purple">
                                Instructor ID
                            </label>
                            <input
                                type="text"
                                className="input round-edges"
                                id="instructorId"
                                name="instructorId"
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
export default AddCourse;
