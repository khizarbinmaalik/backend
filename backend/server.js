import express from "express"
import cors from "cors"
const app = express();

// Enable CORS middleware BEFORE defining routes
app.use(cors({
    origin: ["http://localhost:5173", "https://organic-dollop-gwqwjr7wv972vgq5-5173.app.github.dev"],
    credentials: true
}));

const port = 3000

app.get("/", (req, res) => {
    res.send("Hellow World")
})

app.get("/api/user", (req, res) => {
    const githubUser = {
        "login": "khizarbinmaalik",
        "id": 85388241,
        "node_id": "MDQ6VXNlcjg1Mzg4MjQx",
        "avatar_url": "https://avatars.githubusercontent.com/u/85388241?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/khizarbinmaalik",
        "html_url": "https://github.com/khizarbinmaalik",
        "followers_url": "https://api.github.com/users/khizarbinmaalik/followers",
        "following_url": "https://api.github.com/users/khizarbinmaalik/following{/other_user}",
        "gists_url": "https://api.github.com/users/khizarbinmaalik/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/khizarbinmaalik/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/khizarbinmaalik/subscriptions",
        "organizations_url": "https://api.github.com/users/khizarbinmaalik/orgs",
        "repos_url": "https://api.github.com/users/khizarbinmaalik/repos",
        "events_url": "https://api.github.com/users/khizarbinmaalik/events{/privacy}",
        "received_events_url": "https://api.github.com/users/khizarbinmaalik/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "M.Kh!z@r",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 18,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2021-06-05T07:55:02Z",
        "updated_at": "2025-07-28T10:11:11Z"
    }

    res.json(githubUser)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})