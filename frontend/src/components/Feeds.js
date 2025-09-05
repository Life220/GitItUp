import React from "react";
import { Link } from "react-router-dom";
// import { getSongs } from "../../../backend/api";
// import Playlist from "../pages/Playlist";

const exampleFeed = [
  { repoName: "RecordShare", dateCreated: "2024-06-01T09:15:00Z", firstName: "Rick", lastName: "Astley", readme: "Never Gonna Give You Up", license: "Pop" },
  { repoName: "CodeCanvas", dateCreated: "2023-11-12T14:32:45Z", firstName: "Ada", lastName: "Lovelace", readme: "Analytical Engine FTW", license: "MIT" },
  { repoName: "QuantumLeap", dateCreated: "2022-03-27T21:08:13Z", firstName: "Sam", lastName: "Beckett", readme: "Oh boy!", license: "Apache-2.0" },
  { repoName: "PixelPusher", dateCreated: "2024-01-05T07:55:30Z", firstName: "Grace", lastName: "Hopper", readme: "Debugging the impossible", license: "GPL-3.0" },
  { repoName: "SynthWave", dateCreated: "2023-07-19T18:22:09Z", firstName: "Max", lastName: "Headroom", readme: "20 minutes into the future", license: "BSD-2-Clause" },
  { repoName: "NeonNotes", dateCreated: "2021-12-31T23:59:59Z", firstName: "Trinity", lastName: "Matrix", readme: "Follow the white rabbit", license: "CC-BY-4.0" },
];

class MyFeed extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            feed: [],
            username:""
        }
    }

    async componentDidMount()
    {
      const username = localStorage.getItem("username");
      const userFeed = exampleFeed.filter(item => item.username === username);
    }

    render()
    {
      const { feed, username } = this.state;

      return (
          <div id="MyFeed">
            <h2>{username ? `${username}'s Feed` : "My Feed"}</h2>
            {feed.length === 0 ? (
              <p>No repositories found for this user.</p>
            ) : (
              feed.map((repo, index) => (
                <Link
                  key={index}
                  to="/project"
                  state={{ repo }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="repo-card" style={{ cursor: "pointer" }}>
                    <h3>{repo.repoName}</h3>
                    <p><strong>Created:</strong> {new Date(repo.dateCreated).toLocaleString()}</p>
                    <p><strong>Owner:</strong> {repo.firstName} {repo.lastName}</p>
                    <p><strong>License:</strong> {repo.license}</p>
                    <p><strong>Readme:</strong> {repo.readme}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        );
    }
  }

  class AllFeed extends React.Component
  {
    render() {
      return (
        <div id="AllFeed">
          <h2>All Repositories</h2>
          {exampleFeed.map((repo, index) => (
            <div key={index} className="repo-card">
              <h3>{repo.repoName}</h3>
              <p><strong>Created:</strong> {new Date(repo.dateCreated).toLocaleString()}</p>
              <p><strong>Owner:</strong> {repo.firstName} {repo.lastName} ({repo.username})</p>
              <p><strong>License:</strong> {repo.license}</p>
              <p><strong>Readme:</strong> {repo.readme}</p>
            </div>
          ))}
        </div>
      );
    }
  }

export { MyFeed, AllFeed };
export default MyFeed;
