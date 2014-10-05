function rectCrop (zoom, center) {
  if (!center) center = [0.5, 0.5];
  return function (viewport, dimension) {
    var viewportRatio = viewport.width / viewport.height;
    var dimensionRatio = dimension.width / dimension.height;

    var maxRatio = Math.max(viewportRatio, dimensionRatio);
    var zoomedCanvasSize = [
      (viewportRatio / maxRatio) * dimension.width * zoom,
      (dimensionRatio / maxRatio) * dimension.height * zoom
    ];

    return [
      dimension.width * center[0] - zoomedCanvasSize[0] / 2,
      dimension.height * center[1] - zoomedCanvasSize[1] / 2,
      zoomedCanvasSize[0],
      zoomedCanvasSize[1]
    ];
  };
}

rectCrop.largest = rectCrop(1);

module.exports = rectCrop;

