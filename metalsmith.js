var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts') // https://github.com/ismay/metalsmith-layouts
var discoverPartials = require('metalsmith-discover-partials')
var permalinks = require('metalsmith-permalinks') // https://github.com/segmentio/metalsmith-permalinks
// var asset = require('metalsmith-static') // https://github.com/TheHydroImpulse/metalsmith-static
var sitemap = require('metalsmith-sitemap') // https://github.com/ExtraHop/metalsmith-sitemap
var robots = require('metalsmith-robots') // https://github.com/woodyrew/metalsmith-robots
var sass = require('metalsmith-sass') // https://github.com/stevenschobert/metalsmith-sass
var ignore = require('metalsmith-ignore') // https://www.npmjs.com/package/metalsmith-debug
var debug = require('metalsmith-debug') // https://www.npmjs.com/package/metalsmith-debug
var multiLanguage = require('metalsmith-multi-language') // https://github.com/doup/metalsmith-multi-language
var uglify = require('metalsmith-uglify')
// var path = require('path')

// can use a starter kit if we need to get complicated: https://github.com/evocode/metalsmith-base
var url = "https://castletechllc.com"

var site = Metalsmith(__dirname)
.metadata({
	company: "castletech llc",
	description: "Humane Technology for Urban Living",
	url: url
})
.destination('./docs')
.clean(true)
.use(ignore([
	'archive/**/*', 'layouts/**/*'
]))
.use(multiLanguage({
	default: 'en',
	locales: ['en', 'de']
}))
.use(sass({
	outputDir: 'styles/',
	sourceMap: true,
	sourceMapContents: true,
	indentType: 'tab',
	indentWidth: 1,
}))
.use(markdown({
	smartypants: true,
	smartLists: true,
	gfm: true
}))
.use(permalinks())
.use(layouts({
	directory: './src/layouts'
}))
.use(discoverPartials({
	directory: './src/layouts/partials',
	pattern: /\.hbs$/
}))
.use(uglify())
.use(sitemap({
	hostname: url
}))
.use(robots({
    sitemap: url + '/sitemap.xml'
}))
.use(debug())

if (module.parent) {
	module.exports = site
}
else {
	site.build((err) => {
		if (err) throw err
	})
}