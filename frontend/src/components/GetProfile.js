import React from "react";
import { getProfile } from "../../../backend/api";

class GetProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "ricky",
            firstname: "Rick",
            lastname: "Astley",
            bio: "Never gonna give you up, never gonna let you down, never gonna run around and desert you.",
            email: "ricky@roll.com",
            image: null,
            joined: Date(),
            followers: [],
            following: [],
            projects: [
                {
                    repoName: "RecordShare",
                    dateCreated: "2024-06-01T09:15:00Z",
                    firstName: "Rick",
                    lastName: "Astley",
                    readme: "Never Gonna Give You Up",
                    license: "Pop"
                },
                {
                    repoName: "MixtapeMaker",
                    dateCreated: "2024-05-20T14:30:00Z",
                    firstName: "Rick",
                    lastName: "Astley",
                    readme: "Never Gonna Let You Down",
                    license: "Pop"
                }
            ],
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        // Example for fetching real profile data:
        // let fetchedUsername = localStorage.getItem("username");
        // let profile = (await getProfile(fetchedUsername)).data;
        // this.setState({
        //     username: fetchedUsername,
        //     firstname: profile.firstname,
        //     lastname: profile.lastname,
        //     bio: profile.bio,
        //     email: profile.email,
        //     image: profile.image,
        //     joined: profile.joined,
        //     followers: profile.followers,
        //     following: profile.following,
        //     projects: profile.projects,
        //     loading: false
        // });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { username, firstname, lastname, bio, email, image, joined, followers, following, projects, loading } = this.state;

        return (
            <div id="getProfile" className="p-4">
                {loading && (
                    <div className="loading-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="loading-popup bg-white p-6 rounded-lg shadow-lg">
                            <p>Loading...</p>
                        </div>
                    </div>
                )}
                <div id="leftProfile" className="flex flex-col items-center">
                    <img src={image} alt="Add profile picture" className="w-32 h-32 rounded-full mb-4" />
                    <div id="titles" className="w-full">
                        <div className="title mb-4">
                            <h3 className="text-lg font-semibold">Username: </h3>
                            <input name="username" value={username} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                        <div className="title mb-4">
                            <h3 className="text-lg font-semibold">First Name: </h3>
                            <input name="firstname" value={firstname} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                        <div className="title mb-4">
                            <h3 className="text-lg font-semibold">Last Name: </h3>
                            <input name="lastname" value={lastname} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                        <div className="bio mb-4">
                            <h3 className="text-lg font-semibold">Bio</h3>
                            <textarea name="bio" value={bio} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                    </div>
                </div>
                <div id="rightProfile" className="mt-8">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">Followers: </h2><h2>{followers ? followers.length : 0}</h2>
                        <h2 className="text-lg font-semibold">Following: </h2><h2>{following ? following.length : 0}</h2>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mb-4">Projects</h1>
                        {projects && projects.length > 0 ? (
                            projects.map((project, idx) => (
                                <div key={idx} className="mb-4 p-4 border rounded bg-gray-50">
                                    <h2 className="text-lg font-semibold">{project.repoName}</h2>
                                    <p><strong>Created:</strong> {new Date(project.dateCreated).toLocaleDateString()}</p>
                                    <p><strong>Owner:</strong> {project.firstName} {project.lastName}</p>
                                    <p><strong>Readme:</strong> {project.readme}</p>
                                    <p><strong>License:</strong> {project.license}</p>
                                </div>
                            ))
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default GetProfile;
