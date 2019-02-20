/**
 * Rotates an Object3D around a given point in space
 */
export default function rotateObjectAroundPoint(obj, point, axis, theta) {
    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset
    var xRotation = obj.rotation.x;
    obj.rotation.x = 0;
    obj.rotateOnAxis(axis, theta); // rotate the OBJECT
    obj.rotation.x = xRotation;
}
