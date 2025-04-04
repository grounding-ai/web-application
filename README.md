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
5. Run various scripts to generate the public assets: `npm run make-all`

At this point:

- You can run the development version of the project: `npm run app-dev`
- You can build the project version of the project: `npm run app-build` (outputs the publishable web app in the `./dist` folder)

### Running the feedbacks form locally

The feedbacks are stored in an [Airtable](https://airtable.com/) base, and we use a [Netlify Function](https://www.netlify.com/platform/core/functions/) to feed the base through a simple API route.

If you want to create a new Airtable base, you will need the following fields:

| verbatim    | url   | page type | topic id | date              | dev                |
| ----------- | ----- | --------- | -------- | ----------------- | ------------------ |
| _long text_ | _URL_ | _string_  | _string_ | _ISO date string_ | _optional boolean_ |

There are two solutions to locally test the feedbacks form:

1. You can specify a distant instance of the Netlify Function written at [`./netlify/functions/create-record.mts`](./netlify/functions/create-record.mts) in a `VITE_FUNCTIONS_BASE_URL` environment variable
2. You can specify the `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` environment variables so that the function can run locally, set `VITE_FUNCTIONS_BASE_URL` to `http://localhost:9999/.netlify/functions`, and serve the function locally by running `npm run api-dev`
