
# To Do List #

Note, as I work on this in my spare time and have family commitments, I'm hesitant to call this a “Roadmap“!

## Monorepo

See [#21]. I'm working to put these plugins into a [monorepo][]:

* [Leaflet.a11y][]
* [Leaflet.translate][]
* [L.keyboard-help][]

This will provide the benefits of shared build, unit-testing and CI, and ensure none of them gets “left behind!“

## Unit-tests, CI

As listed in [#1][], configure and write unit tests, using [Karma][], and modelled after [Leaflet][L.karma]. To include:

* Tests to ensure that accessibility fixes in [Leaflet.a11y][] "work",
* Tests to ensure the integrity and security of [Leaflet.translate][],
* ...?

Give developers looking to use the plugins confidence!

## Core Leaflet

As laid out it [#14][], work with other contributors to get accessibility fixes, and some form of [internationalization/ localisation][L-9092] into core Leaflet.

## Contribute

I welcome [feedback][issues], contributions, and pull requests!

[issues]: https://github.com/nfreear/leaflet.plugins/issues
[#1]: https://github.com/nfreear/leaflet.plugins/issues/1
  "Documentation, CI, Unit tests, Linting"
[#14]: https://github.com/nfreear/leaflet.plugins/issues/14 "I want to retire!"
[#21]: https://github.com/nfreear/leaflet.plugins/issues/21 "Mono-repo ..."
[L-9092]: https://github.com/Leaflet/Leaflet/issues/9092
[monorepo]: https://monorepo.tools/ "Monorepo explained"
[Leaflet.a11y]: https://github.com/nfreear/leaflet.a11y
[Leaflet.translate]: https://github.com/nfreear/Leaflet.translate
[L.keyboard-help]: https://github.com/nfreear/leaflet.plugins/tree/main/packages/L.keyboard-help
[L.Karma]: https://github.com/Leaflet/Leaflet/blob/main/spec/karma.conf.js
  "Leaflet/Leaflet - spec/karma.conf.js (GitHub)"
[Karma]: https://karma-runner.github.io/6.4/index.html
