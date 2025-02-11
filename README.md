# Grounding AI - Interactive Map

## Prerequisite

To build this project or to run it locally, you need:

- [Git](https://git-scm.com/) + [Git LFS](https://git-lfs.com/)
- [Node](https://nodejs.org/en) + [NPM](https://www.npmjs.com/)
- [libvips](https://www.libvips.org/)

## Run/build the project

Before anything else, you need to properly clone the project (including large files), install dependencies, and generate the map tileset:

1. Clone the project: `git clone https://github.com/grounding-ai/web-application.git grounding-ai`
2. Open the project: `cd grounding-ai-map`
3. Download the large base map file through [Git LFS](https://git-lfs.com/): `git lfs pull`
4. Install Node.js dependencies: `npm install`

At this point:

- You can run the development version of the project: `npm run dev`
- You can build the project version of the project: `npm run build` (outputs the publishable web app in the `./dist` folder)
