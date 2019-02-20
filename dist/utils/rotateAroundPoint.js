export default function rotateAroundPoint(pos, point, axis, theta) {
    pos.sub(point); // remove the offset
    pos.applyAxisAngle(axis, theta); // rotate the POSITION
    pos.add(point); // re-add the offset
}
