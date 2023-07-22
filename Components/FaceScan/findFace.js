import * as Facemesh from '@mediapipe/face_mesh';

const THRESHOLD = 100;
const POINTS_TRAIN = 100;

const CAMERA_WIDTH = 300;
const CAMERA_HEIGHT = 300;

var avrgLeftEye = [];
var avrgRightEye = [];
var avrgNose = [];
var avrgMouth = [];

var isSet = false;
var indexAveg = POINTS_TRAIN;

export const drawMesh = (ctx, prediction) => {
  if (!prediction) return;

  var i = 0;
  var index = 0;
  var color = '#fff';
  // left eye
  for (i = 0; i < Facemesh.FACEMESH_LEFT_EYE.length; i++) {
    index = Facemesh.FACEMESH_LEFT_EYE[i][0];
    ctx.beginPath();

    ctx.arc(
      prediction[index].x * CAMERA_WIDTH,
      prediction[index].y * CAMERA_HEIGHT,
      1,
      0,
      3 * Math.PI,
    );
    color = '#fa8b44';

    ctx.fillStyle = color;
    ctx.fill();
    if (isSet && indexAveg > 0) {
      avrgLeftEye[i].x += prediction[index].x * THRESHOLD;
      avrgLeftEye[i].y += prediction[index].y * THRESHOLD;
    } else if (!isSet) {
      avrgLeftEye.push({
        x: prediction[index].x * THRESHOLD,
        y: prediction[index].y * THRESHOLD,
      });
    }
  }
  // right eye
  for (i = 0; i < Facemesh.FACEMESH_RIGHT_EYE.length; i++) {
    index = Facemesh.FACEMESH_RIGHT_EYE[i][0];
    ctx.beginPath();
    ctx.arc(
      prediction[index].x * CAMERA_WIDTH,
      prediction[index].y * CAMERA_HEIGHT,
      1,
      0,
      3 * Math.PI,
    );
    color = '#e32636';

    ctx.fillStyle = color;
    ctx.fill();
    if (isSet && indexAveg > 0) {
      avrgRightEye[i].x += prediction[index].x * THRESHOLD;
      avrgRightEye[i].y += prediction[index].y * THRESHOLD;
    } else if (!isSet) {
      avrgRightEye.push({
        x: prediction[index].x * THRESHOLD,
        y: prediction[index].y * THRESHOLD,
      });
    }
  }
  // mouth
  for (i = 0; i < Facemesh.FACEMESH_LIPS.length; i++) {
    index = Facemesh.FACEMESH_LIPS[i][0];
    ctx.beginPath();
    ctx.arc(
      prediction[index].x * CAMERA_WIDTH,
      prediction[index].y * CAMERA_HEIGHT,
      1,
      0,
      3 * Math.PI,
    );
    color = '#550551';

    ctx.fillStyle = color;
    ctx.fill();
    if (isSet && indexAveg > 0) {
      avrgMouth[i].x += prediction[index].x * THRESHOLD;
      avrgMouth[i].y += prediction[index].y * THRESHOLD;
    } else if (!isSet) {
      avrgMouth.push({
        x: prediction[index].x * THRESHOLD,
        y: prediction[index].y * THRESHOLD,
      });
    }
  }
  computeFace();
};

export const computeFace = () => {
  if (!isSet || indexAveg < 0) {
    isSet = true;
    return;
  }
  indexAveg--;
  if (indexAveg === 0) calculateFace();
};

function calculateFace() {
  // left eye
  for (let i = 0; i < avrgLeftEye.length; i++) {
    avrgLeftEye[i].x = avrgLeftEye[i].x / POINTS_TRAIN;
    avrgLeftEye[i].y = avrgLeftEye[i].y / POINTS_TRAIN;
  }
  const area_le = calculatePolygonAreaCenter(avrgLeftEye);

  // right eye
  for (let i = 0; i < avrgRightEye.length; i++) {
    avrgRightEye[i].x = avrgRightEye[i].x / POINTS_TRAIN;
    avrgRightEye[i].y = avrgRightEye[i].y / POINTS_TRAIN;
  }
  const area_re = calculatePolygonAreaCenter(avrgRightEye);

  // mouth
  for (let i = 0; i < avrgMouth.length; i++) {
    avrgMouth[i].x = Math.ceil(avrgMouth[i].x / POINTS_TRAIN);
    avrgMouth[i].y = Math.ceil(avrgMouth[i].y / POINTS_TRAIN);
  }
  const area_m = calculatePolygonAreaCenter(avrgMouth);

  const dis_eyes = calculateDistance(area_re.center, area_le.center);
  const dis_r_m = calculateDistance(area_re.center, area_m.center);
  const dis_l_m = calculateDistance(area_le.center, area_m.center);

  exportData(
    {
      // leftEye: avrgLeftEye,
      leftEyeArea: area_le.area,
      leftEyeCenter: area_le.center,
      // rightEye: avrgRightEye,
      rightEyeArea: area_re.area,
      rightEyeCenter: area_re.center,
      //  mouth: avrgMouth,
      mouthArea: area_m.area,
      distanceRightLeft: dis_eyes,
      distanceRightMouth: dis_r_m,
      distanceLeftMouth: dis_l_m,
      // mouthCenter:area_m.center
    },
    'avrgdata_test',
  );
}
function calculatePolygonAreaCenter(vertices) {
  if (vertices.length < 3) {
    // A polygon with less than 3 vertices is not valid.
    return 0;
  }

  let center = 0;
  let area = 0;
  let sumX = 0;
  let sumY = 0;
  for (let i = 0; i < vertices.length; i++) {
    const x1 = vertices[i].x;
    const y1 = vertices[i].y;

    const x2 = vertices[(i + 1) % vertices.length].x;
    const y2 = vertices[(i + 1) % vertices.length].y;

    area += x1 * y2 - x2 * y1;

    // center
    sumX += vertices[i].x;
    sumY += vertices[i].y;
  }

  // Calculate the average (center) of x-coordinates and y-coordinates.
  const centerX = sumX / vertices.length;
  const centerY = sumY / vertices.length;
  // Calculate the absolute value and divide by 2 to get the area.
  area = Math.abs(area / 2);
  center = [centerX, centerY];
  return { area, center };
}

function calculateDistance(vertex1, vertex2) {
  const distance = Math.sqrt(
    Math.pow(vertex2[0] - vertex1[0], 2) + Math.pow(vertex2[1] - vertex1[1], 2),
  );
  return distance;
}

const exportData = (data, name) => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(data),
  )}`;
  const link = document.createElement('a');
  link.href = jsonString;
  link.download = name + '.json';

  link.click();
};
