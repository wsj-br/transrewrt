# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Use conventional types (Added, Changed, Fixed, etc.) and short descriptions.

## Unreleased

- **Added**: SYSTEM-OVERVIEW.md and DEVELOPMENT.MD (architecture and setup/build/test/deploy).
- **Changed**: SYSTEM-OVERVIEW.md and DEVELOPMENT.MD moved to `dev/` folder.
- **Changed**: Settings > Transform tab: section labels with icons and consistent spacing, indented content, underline-format dropdown with Export/Import on one row, custom prompts in a table (dashboard/cost-style).
- **Changed**: Transform prompts: instructions shown as newline-separated in table and CSV/XLSX; CSV/XLSX import converts newline-separated instructions back to array; JSON export writes instructions as a proper JSON array (not a string).
- **Changed**: Excel export: leading apostrophe on instructions cell to avoid formula interpretation; import strips it; column/row autofit; top vertical alignment; header row styled with Blue Accent 1 Light 60% fill and bold (xlsx-js-style).
- **Fixed**: Transform view now refreshes the list of custom prompts when the user selects Transform in the sidebar (e.g. after importing prompts in Settings > Transform).
- **Fixed**: After saving an edited transform prompt, the selector keeps that prompt selected (and persists the name if renamed).


