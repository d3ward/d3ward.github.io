class gitStats {
    constructor(username,timeFetch) {
        var timeE = (timeFetch)? timeFetch : 604800;
        this.currDate = new Date();
        this.date = new Date(JSON.parse(window.localStorage.getItem("timeElapsed")));
        this.stats = JSON.parse(window.localStorage.getItem("gitstats"));
        var timeDiff = Math.abs(this.currDate - this.date);
        timeDiff = Math.round(timeDiff / 1000);
        if (this.stats == undefined || timeDiff > timeE)
            this.fetchStats(username);
        else
            this.renderStats();
    }

    async fetchAPI(username) {
        //Basic stats
        await fetch(`https://api.github.com/users/${username}`).then(res => res.json()).then((data) => {
            this.stats = {
                username: data.login,
                realName: data.name,
                bio: data.bio,
                avatar: data.avatar_url,
                location: data.location,
                repos: data.public_repos,
                repos_url: data.repos_url,
                followers: data.followers,
                following: data.following,
                url: data.html_url,
                notFound: data.message,
                public_gists: data.public_gists,
                blog: data.blog,
                company: data.company
            };
        }).catch(err => console.log('Basic Stats Error: ' + err));
        //Stars
        await fetch(`https://api.github.com/users/${username}/repos`).then(res => res.json()).then((data) => {
            var stars = 0;
            for (let d in data)
                stars += data[d].stargazers_count;
            this.stats["stars"] = stars;
        }).catch(err => console.log('Fetching Stars Error: ' + err));
        //Commits 
        await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.github.cloak-preview"
            }
        }).then(res => res.json()).then((data) => {

            this.stats["commits"] = data.total_count;
        }).catch(err => console.log('Fetching Commits Error : ' + err));
        //Pulls
        await fetch(`https://api.github.com/search/issues?q=author:${username}+is:pr`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.github.cloak-preview"
            }
        }).then(res => res.json()).then((data) => {
            this.stats["pulls"] = data;
            this.stats["pulls_count"] = data.total_count;
        }).catch(err => console.log('Fetching Pulls Error : ' + err));
        //Issues
        await fetch(`https://api.github.com/search/issues?q=author:${username}+is:issue`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.github.cloak-preview"
            }
        }).then(res => res.json()).then((data) => {
            this.stats["issues"] = data;
            this.stats["issues_count"] = data.total_count;
        }).then(()=>{
            var mixPullsIssues = new Map();
            for (let i in this.stats["pulls"].items)
                mixPullsIssues.set(this.stats["pulls"].items[i].repository_url,i);
            for (let i in this.stats["issues"].items)
                mixPullsIssues.set(this.stats["issues"].items[i].repository_url,i);
            this.stats["contributions"]=mixPullsIssues.size;
        })
        .catch(err => console.log('Fetching Issues Error : ' + err));
    }
    fetchStats(username) {
        this.fetchAPI(username).then(() => {
            window.localStorage.setItem("gitstats", JSON.stringify(this.stats));
            window.localStorage.setItem("timeElapsed", JSON.stringify(this.currDate));
            this.renderStats();
            console.log(this.stats)
        });
    }
    renderStats() {
        console.log(this.stats);
        //For each field check if attribute exist
        const gs_elements = {
            username: document.querySelector('[gs-data="username"]'),
            realName: document.querySelector('[gs-data="realname"]'),
            bio: document.querySelector('[gs-data="bio"]'),
            avatar: document.querySelector('[gs-data="avatar"]'),
            location: document.querySelector('[gs-data="location"]'),
            stars: document.querySelector('[gs-data="stars"]'),
            repos: document.querySelector('[gs-data="repos"]'),
            commits: document.querySelector('[gs-data="commits"]'),
            pulls_count: document.querySelector('[gs-data="pulls_count"]'),
            issues_count: document.querySelector('[gs-data="issues_count"]'),
            contributions: document.querySelector('[gs-data="contributions"]'),
            followers: document.querySelector('[gs-data="followers"]'),
            following: document.querySelector('[gs-data="following"]'),
            url: document.querySelector('[gs-data="url"]'),
            notFound: document.querySelector('[gs-data="notfound"]'),
            public_gists: document.querySelector('[gs-data="gists"]'),
            blog: document.querySelector('[gs-data="blog"]'),
            company: document.querySelector('[gs-data="company"]')
        }
        for (let key in gs_elements) {
            if (gs_elements[key]) {
                gs_elements[key].innerHTML = this.stats[key];
            }
        }
    }
}