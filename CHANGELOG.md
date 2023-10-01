
# Release Notes

## Version 0.3.0

* Release: 26-Sep-2023,
* Do things the Leaflet way – adopt [`L.Map.addInitHook`][addInitHook] ([#8][])
* Allow for multiple maps ([#8][])
* Convert plugin to ESM module / class, with a build script ([#8][])
* Use an "import map" ([#11][])
* Put locale import code in separate class ([#12][])

## Version 0.2.0

* Release: 22-Sep-2023.
* Fixes null lang and empty string role bugs ([#7][])
* Fix to only set focus when opened by a trigger element (#7)
* `Leaflet.i18n` plugin is optional ([#6][])
* README and documentation fixes ([#1][])

## Version 0.1.0

* Release: 10-Sep-2023.
* Initial release
* Fixes 4+ accessibility issues in core Leaflet.js
* Localizes/translates core Leaflet user-interface

[readme]: https://github.com/nfreear/leaflet.a11y#readme
[demo]: https://nfreear.github.io/leaflet.a11y
  "Example site using ‘Leaflet.a11y’ plugin"
[i18n plugin]: https://github.com/umap-project/Leaflet.i18n
[wcag eval]: https://github.com/Malvoz/web-maps-wcag-evaluation
  "Web map tools WCAG 2.1 evaluation, by @Malvoz (13-Sep-2021)"

[L bugs]: https://github.com/Leaflet/Leaflet/labels/accessibility
  "Leaflet issues and pull-requests tagged with ‘accessibility’"
[L-7193]: https://github.com/Leaflet/Leaflet/issues/7193
  "Make the leaflet-container a programmatically determinable element [a11y]"
[L-7527]: https://github.com/Leaflet/Leaflet/issues/7527
  "Markers that bind to popups should convey the ‘aria-expanded’ state of the popup [a11y]"
[L-7968]: https://github.com/Leaflet/Leaflet/issues/7968
  "Potentially set popups to role=’dialog’ [needs decision][a11y]"
[L-8115]: https://github.com/Leaflet/Leaflet/issues/8115
  "Focus management between markers and popups [a11y]"
[L-8116]: https://github.com/Leaflet/Leaflet/issues/8116
  "Discern interactive markers from non-interactive markers [a11y]"
[L-9087]: https://github.com/Leaflet/Leaflet/pull/9087
  "Add 'Leaflet.a11y' to plugin list [PR][a11y]"
[L-9092]: https://github.com/Leaflet/Leaflet/issues/9092
   "Add placeholder function for translation/localization/i18n to Leaflet [proposal][a11y]"
[i18n-6]: https://github.com/umap-project/Leaflet.i18n/issues/6
  "Proposal: Add placeholder function for translation/localization/i18n to core Leaflet"

[#1]: https://github.com/nfreear/leaflet.a11y/issues/1
  "Documentation, CI, Unit tests, linting (4 tasks) [doc]"
[#2]: https://github.com/nfreear/leaflet.a11y/issues/2
  "Map container needs an accessible name and role [a11y]"
[#3]: https://github.com/nfreear/leaflet.a11y/issues/3
  "Focus should be managed between markers and popups [a11y]"
[#4]: https://github.com/nfreear/leaflet.a11y/issues/4
  "Non-interactive markers should not have an interactive role [a11y]"
[#5]: https://github.com/nfreear/leaflet.a11y/issues/5
  "Deploy example to GitHub Pages and publish plugin (3 tasks) [doc]"
[#6]: https://github.com/nfreear/leaflet.a11y/issues/6
  "Be more explicit about optional use of ‘Leaflet.i18n’ plugin [doc]"
[#7]: https://github.com/nfreear/leaflet.a11y/issues/7
  "Fix null lang and empty string role bugs, etc. (4 tasks) [bug]"
[#8]: https://github.com/nfreear/leaflet.a11y/issues/8
  "Use 'addInitHook'; Convert plugin to an ES module, with build step #8 (4 tasks)"
[#9]: https://github.com/nfreear/leaflet.a11y/issues/9
  "Add support for 3rd-party plugins, for example, fullscreen"
[#10]: https://github.com/nfreear/leaflet.a11y/issues/10
  "What is “a11y”? #10 [doc]"
[#11]: https://github.com/nfreear/leaflet.a11y/issues/11
  "Use an import map"
[#12]: https://github.com/nfreear/leaflet.a11y/issues/12
  "Put locale import code in a separate class #12"
[#14]: https://github.com/nfreear/leaflet.a11y/issues/14
  "“I want to retire” #14 [doc]"
[addInitHook]: https://leafletjs.com/reference.html#class-constructor-hooks
  "Leaflet API – Class – Constructor hooks"

[End]: //
