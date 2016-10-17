# Template

This is a starting point for creating templates for web. Comes with bootstrap.

# Header

Standard header
```
#header
	> .container
		> #resposive-nav-toggle
		> #logo
		> #primary-nav (collapse-able)
```
Old school header (with nav below logo)
```
#header
	> .container.header
		> #resposive-nav-toggle
		> #logo
	> #primary-nav (collapse-able)
		> .container
			> .nav
```
Proposed new
```
header.primary-header
	&.header-fluid (full width)

	&.header-light
	&.header-air
	&.header-dark

	&.header-center
	&.header-nav-drop
	&.header-scrolled

	.meta
		> .nav-toggle
		> .logo
		[> .slogan-left .slogan-right]
	nav
		> a wrapper
			> .nav.nav-left
			> .nav.nav-right
```

## What's included

On the workflow end we have gulp and browser sync. Front end is packaged with bootstrap

## Setup

Setup npm dependancies (gulp stuff mostly)
``npm install``

Bower it up
``bower update``

Start gulp
``gulp``
