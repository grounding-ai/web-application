# Grounding AI - Interactive Map

## Prerequisite

To build this project or to run it locally, you need:

- A clean and recent Node + NPM environment
- Either a previously generated [DZI tileset](<https://learn.microsoft.com/en-us/previous-versions/windows/silverlight/dotnet-windows-silverlight/cc645077(v=vs.95)>) or a local installation of [libvips](https://www.libvips.org/) and the raw full size map image

## Generate a DZI tileset

The easiest way to generate the [DZI tileset](<https://learn.microsoft.com/en-us/previous-versions/windows/silverlight/dotnet-windows-silverlight/cc645077(v=vs.95)>) is to use [libvips](https://www.libvips.org/)

1. [Install libvips](https://www.libvips.org/install.html)
2. Open the project: `cd path/to/grounding-ai-map`
3. Copy the global image to base the tileset in the project: `cp path/to/image.jpg resources/map.jpg`
4. Generate the tileset: `vips dzsave resources/map.jpg public/map/map`

If your input image file is indeed named `resources/map.jpg`, you can also simply run `npm run make-tiles`, that will first clean existing tiles, and then run the `vips dzsave` command.

## Run the website locally

1. Open the project: `cd path/to/grounding-ai-map`
2. Install dependencies: `npm install`
3. Run the development version: `npm run dev`

Then, you can access the website at [localhost:5173](http://localhost:5173/).

## Build the website for production

1. Open the project: `cd path/to/grounding-ai-map`
2. Install dependencies: `npm install`
3. Run the development version: `npm run dev`

Then, the whole website is built under the `dist` folder.
