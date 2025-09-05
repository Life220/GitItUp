import React from "react";
import "../../public/assets/css/onPages.css";
import Navigation from "../components/Navigation";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repoName: "RecordShare",
            dateCreated: "2024-06-01T09:15:00Z",
            firstName: "Rick",
            lastName: "Astley",
            readme: "Never Gonna Give You Up",
            license: "Pop"
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { repoName, dateCreated, firstName, lastName, readme, license } = this.state;

        return (
            <div>
                <header>
                    <Navigation />
                </header>
                <div className="max-w-xl mx-auto mt-8 p-6 bg-grey rounded shadow">
                    <h1 className="text-2xl font-bold mb-4">Project Details</h1>
                    <div className="mb-4">
                        <label className="block font-semibold">Repository Name:</label>
                        <input
                            type="text"
                            name="repoName"
                            value={repoName}
                            onChange={this.handleChange}
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Date Created:</label>
                        <input
                            type="datetime-local"
                            name="dateCreated"
                            value={dateCreated.slice(0, 16)}
                            onChange={this.handleChange}
                            className="w-full p-2 border border-gray-300 rounded text-black"
                            readOnly
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <div className="flex-1">
                            <label className="block font-semibold">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}
                                className="w-full p-2 border border-gray-300 rounded text-black"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-semibold">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                                className="w-full p-2 border border-gray-300 rounded text-black"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Readme:</label>
                        <textarea
                            name="readme"
                            value={readme}
                            onChange={this.handleChange}
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">License:</label>
                        <input
                            type="text"
                            name="license"
                            value={license}
                            onChange={this.handleChange}
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <h3 className="block font-semibold">Files:</h3>
                        {/* Will display files here*/}
                    </div>
                    <div className="mb-4">
                        <button className="block font-semibold">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
