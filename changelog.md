# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog],
and this project adheres to [Semantic Versioning].

## [0.0.7] - 2023-03-12

### Added

- Add Post pagination component.
- Add Comments component powered by utteranc.

## [0.0.6] - 2023-03-07

### Fixed

- Add @svgr/webpack library to devDependencies to fix a vulnerability in react-scripts > @svgr/webpack > @svgr/plugin-svgo > svgo > css-select > nth-check & css-what. See issues: [https://github.com/facebook/create-react-app/issues/12132](https://github.com/facebook/create-react-app/issues/12132)

### Changed

- Update packages.json file: add libraries chakra-ui-prose, @ajna/pagination, and prism-react-renderer to the project's dependencies.
- Update Layout.jsx file: set spacing and grid system margin.
- Update Header.jsx file: minor change in the position, background, and navbar-container backdrop filter.

## [0.0.5] - 2023-03-06

### Changed

- Update FeaturedImg fragment: add aspect ratio and width to the post image.

### Added

- Add Intersection Observer API to easily navigate through the table of contents.

## [0.0.4] - 2023-03-05

### Changed

- Update BlogPage template: Add main layout and Graphql queries.
  
### Added

- Add featured image and frontmatter Fragments.
- Add PostGrid component.

## [0.0.3] - 2023-03-04

### Changed

- Update theme.js file: Add global styles.

### Added

- Add Hero components.

## [0.0.2] - 2023-03-02

### Added

- Add Header components.
- Add top navigation items.
- Extend default theme: add primary, secondary and tertiary color theme.


## [0.0.1] - 2023-02-28

- initial release

<!-- Links -->
[keep a changelog]: https://keepachangelog.com/en/1.0.0/
[semantic versioning]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->
[unreleased]: https://github.com/marprezd/marprez-dev/compare/v0.0.2...HEAD
[0.0.7]: https://github.com/marprezd/marprez-dev/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/marprezd/marprez-dev/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/marprezd/marprez-dev/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/marprezd/marprez-dev/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/marprezd/marprez-dev/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/marprezd/marprez-dev/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/marprezd/marprez-dev/releases/tag/v0.0.1