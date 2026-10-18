Increment the version only when told, or when creating a dev branch (see Branching)
When incrementing, update SITE_VERSION in assets/layout.js (it renders the footer on every page) and the "currently vX.Y.Z" line in README.md
When the release number changes (ignoring -dev), also update the ?v= cache-busting number on the styles.css, layout.js and gallery.js links in every page (e.g. ?v=1.2.0), so browsers and Cloudflare load the new files
Only commit as described in Branching; never commit directly to master
Don't add Assisted by Claude in the description
Always use the latet version number as the commit comment and create a short description of what changed.

## Branching
Create a topic branch for changes; never commit directly to master
Name the branch after the next version number with -dev added (e.g. if master is v1.0.57, the branch is v1.0.58-dev)
When making the branch, set the version to the branch name (e.g. v1.0.58-dev) and commit it, with the new version number as the commit description
Commit each iteration on the dev branch, using the current version number (e.g. v1.0.58-dev) as the commit comment
Only merge when explicitly told. When merging, remove -dev from the version (e.g. v1.0.58), commit that, then merge the branch into master
