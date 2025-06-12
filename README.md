Course webpage, with vitepress.

When setting up on a new computer, make sure node.js is installed, then run "npm install" and, if necessary, "npm install csv-parse".  If the right versions don't show up, install node.js from [here](https://nodejs.org/en/download).

Branch *master* deplys [here](https://www.mat.uniroma2.it/~greenblatt/matbio24/) automatically; folder `/drafts/` is excluded, as is this file.

notation.md defines latex macros for other files (this should be included automatically).

Associated: script `topdf.sh` uses `pandoc` to create pdf from `.md` file.  Usage: `topdf filename` takes `filename.md` and combines it with `notation.md` to produce `filename.pdf` (idea is to produce PDFs for Florin)

Script `pre-commit`, if placed in `./.git/hooks/` and made executable, automatically produces PDFs for the files in `./esercizi/`, places them in the `./PDFs/` folder and adds them to the commit before committing.
It also produces versions with the solutions stripped out (at the moment this is a bit of a hackjob).
Note: it might be a good idea to have this (PDF converter) skip ones which are already up to date.
