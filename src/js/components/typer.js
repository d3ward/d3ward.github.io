export function Typer(el, toRotate, period) {
	var t = this
	t.toRotate = toRotate
	t.el = el
	t.loopNum = 0
	t.period = parseInt(period, 10) || 2000
	t.txt = ''

	t.isDeleting = false
	t.tick = function () {
		var i = this.loopNum % this.toRotate.length
		var fullTxt = this.toRotate[i]
		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1)
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1)
		}
		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'
		var that = this
		var delta = 200 - Math.random() * 100
		if (this.isDeleting) {
			delta /= 2
		}
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period
			this.isDeleting = true
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false
			this.loopNum++
			delta = 500
		}
		setTimeout(function () {
			that.tick()
		}, delta)
	}
	t.tick()
}