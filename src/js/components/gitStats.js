export class gitStats {
	constructor() {
		this.gs_data = JSON.parse(window.localStorage.getItem('gs_data'))
		if (this.gs_data == undefined) this.gs_data = {}
		const gs_css =
			'[gs-user],.gs-user,.gs-limit{position:relative;display:flex;flex-direction:column;transition: all 0.25s ease-in-out;padding:1.5rem;gap:1rem;border-radius:var(--gs-radius , .5rem);width:100%;max-width:300px;background-color:var(--gs-bg,#fff);color: var(--gs-txt,#000);box-shadow: var(--gs-bshadow,rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px);}.gs-p07{padding:.7rem!important}.gs-limit{position:fixed!important;top:80px;left:10px;width:fit-content!important;z-index:200}.gs-limit p{text-transform:uppercase;font-size:10px;letter-spacing:1px;margin:0;color:var(--txt)}[gs-user]::after,.gs-user::after{content:"";position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:.5rem;background-color:var(--gs-bg,#fff);visibility:visible;opacity:1;transition:all 1s linear}[gs-user].gs-loaded::after,.gs-user.gs-loaded::after{visibility:hidden;opacity:0}[gs-user].gs-not-found::after,.gs-user.gs-not-found::after{content:"Not Found"}[gs-user]>*,.gs-user>*{margin:0}[gs-user] span,.gs-user span{font-size:1.5rem;text-align:center}[gs-user] svg,.gs-user svg{height:20px;width: 20px;fill:currentColor}[gs-user] label,.gs-user label{display:flex;align-items:center}[gs-user] label [gs-data],.gs-user label [gs-data]{flex-grow:1;text-align:end}.gs-fgrow{flex-grow:1}[gs-user] i,.gs-user i{width:30px;display:flex;align-items:center;justify-content:center}[gs-data="avatar"]{max-width:100px;border-radius:50%;border: 4px solid var(--gs-accent);margin:15px auto 15px;width:100px;height:100px}.gs-badge{position:absolute;display:flex;top:.3rem;right:.3rem;justify-content:flex-end;font-size:14px}.gs-badge svg{height:20px}.full-width{max-width:unset}.gs-column{display:flex;flex-direction:column;gap:1rem}.gs-compact{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;gap:1rem}[gs-aos-items]>*,[gs-aos]{opacity:0;transition:opacity 1s,transform 1.3s}[gs-aos-items="zoom"]>*,[gs-aos="zoom"]{transform:scale(.4)}[gs-aos-items="left"]>*,[gs-aos="left"]{transform:translate3d(-100px,0,0)}[gs-aos-items="right"]>*,[gs-aos="right"]{transform:translate3d(100px,0,0)}[gs-aos-items="top"]>*,[gs-aos="top"]{transform:translate3d(0,-100px,0)}[gs-aos-items="bottom"]>*,[gs-aos="bottom"]{transform:translate3d(0,100px,0)}.gs-aos-done{opacity:1;transform:translateZ(0) scale(1)}'
		const gs_style = document.createElement('style')
		gs_style.innerText = gs_css
		document.head.appendChild(gs_style)
		this.items = []
		const gs_icons = {
			'gs-icon':
				'<svg xmlns="http://www.w3.org/2000/svg" fill="var(--txt)" viewBox="0 0 24 24"><path d="M4.7 1.5c-.2 0-.3.1-.4.5-.2 1-.4 1.9-.1 2.7.2.3.2.4-.1.7A5.4 5.4 0 003 8v2a6 6 0 001.6 3.7c1 1 2.2 1.5 4 1.8.2 0 .6 0 .4.2l-.7 1.4c-.1.4 0 .4-.5.5-1.4.3-1.7.5-2.8-1-.6-.7-1-1.2-1.7-1.3-1.3-.2-2.8 0-1.1.4 1 .2 1.4 1 1.8 2 .8 1.5 1.5 2.3 3.6 1.9.3 0 .6-.3.6.1v1.9c0 .3 0 .4.4.5 1 .4 2.2.5 3.4.4l.1-.2a2.5 2.5 0 01-1.8-2.4v-7.5c0-1.4 1.1-2.5 2.5-2.5H20c.3 0 .4-.2.4-.4v-.6c0-1 0-1.2-.3-1.9-.2-.5-.5-1.2-.9-1.6-.2-.3-.2-.3-.1-.6.4-.9.3-1.9 0-2.9-.1-.1-.2-.4-.6-.4a6 6 0 00-2.9 1.1c-.4.3-.6.3-1 .2-2-.4-3.9-.3-6 0H8c-1-.6-2-1.2-3.3-1.3zm8.7 9a2.3 2.3 0 00-2.3 2.3v6.8a2.3 2.3 0 002.3 2.3h6.9a2.3 2.3 0 002.2-2.3v-6.8a2.3 2.3 0 00-2.2-2.3zm3 1.6h1a.7.7 0 01.6.7v6.8c0 .4-.3.7-.7.7h-1a.7.7 0 01-.6-.7v-6.8a.7.7 0 01.7-.7zm-3.5 2h1a.7.7 0 01.6.7v4.8c0 .4-.3.7-.7.7h-1a.7.7 0 01-.6-.7v-4.8c0-.4.3-.7.7-.7zm7 1.5h.9c.4 0 .7.3.7.6v3.4c0 .4-.3.7-.7.7h-1a.7.7 0 01-.7-.7v-3.4a.7.7 0 01.7-.6z" paint-order="stroke markers fill"/></svg>',
			pulls_count:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m7.18 3.07 2.4-2.4a.25.25 0 0 1 .42.18v4.8a.25.25 0 0 1-.43.17l-2.4-2.4a.25.25 0 0 1 0-.35zM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.12v5.26a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 0 1-1.5-2.12zM11 2.5h-1V4h1a1 1 0 0 1 1 1v5.63a2.25 2.25 0 1 0 1.5 0V5A2.5 2.5 0 0 0 11 2.5zm1 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zM3.75 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/></svg>',
			repos: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.71 1.7.75.75 0 0 1-1.08 1.05A2.5 2.5 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.36 0-.7.07-1 .2V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.09a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>',
			followers:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 5.5a3.5 3.5 0 1 1 5.9 2.55 5.5 5.5 0 0 1 3.03 4.08.75.75 0 1 1-1.48.24 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.48-.24A5.5 5.5 0 0 1 3.1 8.05 3.49 3.49 0 0 1 2 5.5zM11 4a.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 .67 2.84.75.75 0 0 0-.42.68v.35a.75.75 0 0 0 .57.73 3.5 3.5 0 0 1 2.53 2.37.75.75 0 1 0 1.43-.44 5.01 5.01 0 0 0-2.56-3.01A3 3 0 0 0 11 4z"/></svg>',
			stars: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .67.42l1.89 3.81 4.2.61a.75.75 0 0 1 .42 1.28l-3.04 2.97.71 4.2a.75.75 0 0 1-1.08.79L8 12.35l-3.77 1.98a.75.75 0 0 1-1.08-.8l.72-4.19L.82 6.37a.75.75 0 0 1 .41-1.28l4.21-.6L7.33.66A.75.75 0 0 1 8 .25zm0 2.44L6.62 5.5a.75.75 0 0 1-.57.41l-3.1.45L5.2 8.54a.75.75 0 0 1 .22.67l-.53 3.08 2.77-1.45a.75.75 0 0 1 .7 0l2.77 1.45-.53-3.08a.75.75 0 0 1 .22-.67l2.24-2.18-3.1-.45a.75.75 0 0 1-.56-.4L8 2.68z"/></svg>',
			commits:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm1.43.75a4 4 0 0 1-7.86 0H.75a.75.75 0 1 1 0-1.5h3.32a4 4 0 0 1 7.86 0h3.32a.75.75 0 1 1 0 1.5h-3.32z"/></svg>',
			issues_count:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/></svg>',
			contributions:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 0 0-.25.25v12.5c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75zM0 1.75C0 .78.78 0 1.75 0h12.5C15.22 0 16 .78 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75zm9.22 3.72a.75.75 0 0 0 0 1.06L10.69 8 9.22 9.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0zM6.78 6.53a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.31 8l1.47-1.47z"/></svg>',
			following:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.25 0a.75.75 0 0 1 .75.75V2h1.25a.75.75 0 0 1 0 1.5H14v1.25a.75.75 0 0 1-1.5 0V3.5h-1.25a.75.75 0 0 1 0-1.5h1.25V.75a.75.75 0 0 1 .75-.75zM5.5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.4 4.55a3.5 3.5 0 1 0-4.8 0A5.53 5.53 0 0 0 0 13.2a.75.75 0 1 0 1.5.08 4.01 4.01 0 0 1 4-3.79 4.01 4.01 0 0 1 4 3.8.75.75 0 1 0 1.5-.1 5.53 5.53 0 0 0-3.1-4.65z"/></svg>',
			forks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.12a2.25 2.25 0 1 0-1.5 0v.88A2.25 2.25 0 0 0 5.75 8.5h1.5v2.13a2.25 2.25 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.88a2.25 2.25 0 1 0-1.5 0v.88a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.88zm3.75 7.38a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>',
			watchers:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.68 7.93a13.7 13.7 0 0 1 2.37-2.71A6.21 6.21 0 0 1 8 3.5c1.47 0 2.82.74 3.96 1.72a13.7 13.7 0 0 1 2.36 2.71.12.12 0 0 1 0 .14 13.7 13.7 0 0 1-2.37 2.71A6.21 6.21 0 0 1 8 12.5a6.21 6.21 0 0 1-3.96-1.72 13.61 13.61 0 0 1-2.36-2.71.12.12 0 0 1 0-.14zM8 2a7.7 7.7 0 0 0-4.93 2.08A15.19 15.19 0 0 0 .43 7.1a1.62 1.62 0 0 0 0 1.8c.45.68 1.37 1.93 2.64 3.02A7.7 7.7 0 0 0 8 14c1.98 0 3.67-1 4.93-2.08a15.16 15.16 0 0 0 2.64-3.02 1.62 1.62 0 0 0 0-1.8 15.16 15.16 0 0 0-2.64-3.02A7.7 7.7 0 0 0 8 2zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
			location:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.54 3.46a5 5 0 0 1 0 7.08L8 14.07l-3.54-3.54a5 5 0 1 1 7.08-7.07zm1.06 8.14a6.5 6.5 0 1 0-9.2 0l3.54 3.53a1.5 1.5 0 0 0 2.12 0l3.54-3.53zM8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>'
		}
		var gs_i = document.querySelectorAll('[gs-icon]')
		gs_i.forEach((el) => {
			var n = el.getAttribute('gs-icon')
			el.innerHTML = gs_icons[n]
		})
		console.log(this.gs_data)
		// Call the function when the DOM is loaded
		//Get all widgets
		var gs_widgets = document.querySelectorAll('[gs-user]')
		var gs_list = []
		gs_widgets.forEach((el) => {
			var gs_u = el.getAttribute('gs-user')
			var gs_r = el.getAttribute('gs-repo')
			console.log(gs_u + '/' + gs_r)
			if (!gs_list.includes(gs_u + '/' + gs_r)) {
				gs_list.push(gs_u + '/' + gs_r)
				this.initialize({
					username: gs_u,
					repo: gs_r,
					timeFetch: 0
				})
			}
		})
		console.log(this.items)
		this.fetchRateLimit()
		this.gs_aos()
	}
	diff_hours(dt) {
		var now = new Date()
		var diff = (new Date(dt) - now.getTime()) / 1000
		diff /= 60
		return Math.abs(Math.round(diff))
	}
	initialize(options) {
		let u = options.username
		let r = options.repo
		let s = options.selector
		let sk, st, ge
		this.currDate = new Date()
		var timeDiff
		if (r != null) {
			if (!s) {
				s = '[gs-user="' + u + '"][gs-repo="' + r + '"]'
			}
			sk = 'gs_' + u + '_' + r

			st = this.gs_data['gs_' + u + '_' + r]
			ge = {
				username: document.querySelectorAll(
					s + ' [gs-data="username"]'
				),
				name: document.querySelectorAll(s + ' [gs-data="name"]'),
				full_name: document.querySelectorAll(
					s + ' [gs-data="full_name"]'
				),
				description: document.querySelectorAll(
					s + ' [gs-data="description"]'
				),
				is_fork: document.querySelectorAll(s + ' [gs-data="is_fork"]'),
				stars: document.querySelectorAll(s + ' [gs-data="stars"]'),
				forks: document.querySelectorAll(s + ' [gs-data="forks"]'),
				commits: document.querySelectorAll(s + ' [gs-data="commits"]'),
				watchers: document.querySelectorAll(
					s + ' [gs-data="watchers"]'
				),
				issues: document.querySelectorAll(s + ' [gs-data="issues"]'),
				url: document.querySelectorAll(s + ' [gs-data="url"]')
			}
			this.items[sk] = {
				st: st,
				ge: ge,
				s: s,
				sk: sk
			}
			if (st == undefined) {
				this.fetchStats(u, r, sk)
			} else {
				if (st['timeElapsed'] == undefined) timeDiff = 61
				else timeDiff = this.diff_hours(st['timeElapsed'])
				console.log('Time Diff:' + timeDiff)
				if (timeDiff > 60 || st['timeElapsed'] == undefined)
					this.fetchStats(u, r, sk)
				else this.renderStats(sk)
			}
		} else {
			if (!s) s = "[gs-user='" + u + "']:not([gs-repo])"
			sk = 'gs_' + u
			st = this.gs_data['gs_' + u] ? this.gs_data['gs_' + u] : undefined

			ge = {
				username: document.querySelectorAll(
					s + ' [gs-data="username"]'
				),
				realName: document.querySelectorAll(
					s + ' [gs-data="realname"]'
				),
				bio: document.querySelectorAll(s + ' [gs-data="bio"]'),
				avatar: document.querySelectorAll(s + ' [gs-data="avatar"]'),
				location: document.querySelectorAll(
					s + ' [gs-data="location"]'
				),
				stars: document.querySelectorAll(s + ' [gs-data="stars"]'),
				repos: document.querySelectorAll(s + ' [gs-data="repos"]'),
				commits: document.querySelectorAll(s + ' [gs-data="commits"]'),
				pulls_count: document.querySelectorAll(
					s + ' [gs-data="pulls_count"]'
				),
				issues_count: document.querySelectorAll(
					s + ' [gs-data="issues_count"]'
				),
				contributions: document.querySelectorAll(
					s + ' [gs-data="contributions"]'
				),
				followers: document.querySelectorAll(
					s + ' [gs-data="followers"]'
				),
				following: document.querySelectorAll(
					s + ' [gs-data="following"]'
				),
				url: document.querySelectorAll(s + ' [gs-data="url"]'),
				notFound: document.querySelectorAll(
					s + ' [gs-data="notfound"]'
				),
				public_gists: document.querySelectorAll(
					s + ' [gs-data="gists"]'
				),
				blog: document.querySelectorAll(s + ' [gs-data="blog"]'),
				company: document.querySelectorAll(s + ' [gs-data="company"]')
			}
			this.items[sk] = {
				st: st,
				ge: ge,
				s: s,
				sk: sk
			}
			if (st == undefined) {
				this.fetchStats(u, null, sk)
			} else {
				if (st['timeElapsed'] == undefined) timeDiff = 61
				else timeDiff = this.diff_hours(st['timeElapsed'])
				console.log('Time Diff:' + timeDiff)
				if (timeDiff > 60 || st['timeElapsed'] == undefined)
					this.fetchStats(u, null, sk)
				else this.renderStats(sk)
			}
		}
	}
	clear(sk) {
		this.gs_data[sk] = null
	}
	async fetchRateLimit() {
		await fetch('https://api.github.com/rate_limit')
			.then((res) => res.json())
			.then((data) => {
				var d = new Date(data.rate['reset'] * 1000)
				console.log(
					'API Rate Limit : ' +
						data.rate['remaining'] +
						'/' +
						data.rate['limit']
				)
				var gsl = document.querySelectorAll(
					'.gs-limit [gs-data="limit"]'
				)
				gsl.forEach((el) => {
					el.innerText =
						data.rate['remaining'] + '/' + data.rate['limit']
				})
				gsl = document.querySelectorAll(
					'.gs-limit [gs-data="limit-reset"]'
				)
				gsl.forEach((el) => {
					el.innerText = d.getHours() + ':' + d.getMinutes()
				})
			})
			.catch((err) => console.log('Fetch Rate Limit : ' + err))
	}
	//Get single repo stats
	getRepo(u, r) {
		return fetch(`https://api.github.com/repos/${u}/${r}`)
			.then((res) => res.json())
			.then((data) => {
				var stats = {
					username: u,
					name: data.name,
					full_name: data.full_name,
					description: data.description,
					is_fork: data.fork,
					stars: data.stargazers_count,
					forks: data.forks_count,
					watchers: data.subscribers_count,
					issues: data.open_issues,
					url: data.html_url,
					notFound: data.message
				}
				return stats
			})
	}
	//Get commits counts based on contributions
	//Limited to first 30 contributors commits
	getRepoCommits(u, r) {
		return fetch(`https://api.github.com/repos/${u}/${r}/contributors`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/vnd.github.cloak-preview'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				var count = 0
				data.forEach((el) => {
					count += el.contributions
				})
				return {
					commits: count
				}
			})
			.catch((err) => console.log('Fetching Commits Error : ' + err))
	}
	//Get all repos of user - also used to retrieve user stars count
	getRepos(u) {
		return fetch(`https://api.github.com/users/${u}/repos`)
			.then((res) => res.json())
			.then((data) => {
				var stars = 0
				for (let d in data) stars += data[d].stargazers_count
				return { stars: stars }
			})
			.catch((err) => console.log('Fetching Stars Error: ' + err))
	}
	//Get user pulls
	getUserPulls(u) {
		return fetch(
			`https://api.github.com/search/issues?q=author:${u}+is:pr`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/vnd.github.cloak-preview'
				}
			}
		)
			.then((res) => res.json())
			.then((data) => {
				return {
					pulls_count: data.total_count
				}
			})
			.catch((err) => console.log('Fetching Pulls Error : ' + err))
	}
	//Get user issues
	getUserIssues(u) {
		return fetch(
			`https://api.github.com/search/issues?q=author:${u}+is:issue`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/vnd.github.cloak-preview'
				}
			}
		)
			.then((res) => res.json())
			.then((data) => {
				return {
					issues_count: data.total_count
				}
			})
	}
	//Get user commits
	getUserCommits(u) {
		return fetch(`https://api.github.com/search/commits?q=author:${u}`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/vnd.github.cloak-preview'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				return {
					commits: data.total_count
				}
			})
			.catch((err) => console.log('Fetching Commits Error : ' + err))
	}
	//Get user profile stats
	getProfile(u) {
		return fetch(`https://api.github.com/users/${u}`)
			.then((res) => res.json())
			.then((data) => {
				var stats = {
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
				}
				return stats
			})
			.catch((err) => console.log('Basic Stats Error: ' + err))
	}
	async fetchAPI(u, r, sk) {
		console.log('Fetch API - ' + u + '/' + r)
		var itm = this.items[sk]
		let f = [],
			ge = itm.ge
		if (r != undefined) {
			f.push(this.getRepo(u, r))
			if (ge['commits'] != undefined) f.push(this.getRepoCommits(u, r))
		} else {
			//Basic stats
			f.push(this.getProfile(u))
			if (ge['stars'] != undefined) f.push(this.getRepos(u))
			if (ge['commits'] != undefined) f.push(this.getUserCommits(u))
			if (ge['pulls_count'] != undefined) f.push(this.getUserPulls(u))
			if (ge['issues_count'] != undefined) f.push(this.getUserIssues(u))
			/*
						   var mixPullsIssues = new Map();
						   for (let i in stats["pulls"].items)
							   mixPullsIssues.set(stats["pulls"].items[i].repository_url, i);
						   for (let i in stats["issues"].items)
							   mixPullsIssues.set(stats["issues"].items[i].repository_url, i);
						   stats["contributions"] = mixPullsIssues.size;
			   */
		}
		return Promise.all(f)
	}
	async fetchStats(username, repo, sk) {
		await this.fetchAPI(username, repo, sk).then((data) => {
			var stats = []
			stats = {
				...data[0],
				...data[1],
				...data[2],
				...data[3],
				...data[4],
				...data[5]
			}
			stats['timeElapsed'] = new Date()
			this.gs_data[sk] = stats
			console.log(stats)
			this.renderStats(sk)
			window.localStorage.setItem('gs_data', JSON.stringify(this.gs_data))
		})
	}
	gs_aos() {
		var items = document.querySelectorAll('[gs-aos-items]>*,[gs-aos]')
		if (IntersectionObserver && items) {
			let callback = function (entries) {
				entries.forEach((entry) => {
					if (
						entry.isIntersecting &&
						!entry.target.classList.contains('gs-aos-done')
					) {
						entry.target.classList.add('gs-aos-done')
					} else {
						entry.target.classList.remove('gs-aos-done')
					}
				})
			}
			let observer = new IntersectionObserver(callback, {
				root: null,
				threshold: 0
			})
			items.forEach((item) => {
				observer.observe(item)
			})
		}
	}

	renderStats(sk) {
		var gs
		var stats = this.gs_data[sk]
		var ge = this.items[sk].ge
		console.log(ge)
		if (stats['url'] != undefined) {
			//For each field check if attribute exist
			for (let key in ge) {
				var r = ge[key]
				if (r) {
					r.forEach((element) => {
						if (key == 'url') element.href = stats[key]
						else if (key == 'avatar') element.src = stats[key]
						else element.innerHTML = stats[key]
					})
				}
			}
			gs = document.querySelectorAll(this.items[sk].s)
			gs.forEach((el) => {
				el.classList.add('gs-loaded')
			})
		} else {
			gs = document.querySelectorAll(this.items[sk].s)
			gs.forEach((el) => {
				el.classList.add('gs-not-found')
			})
		}
	}
}
