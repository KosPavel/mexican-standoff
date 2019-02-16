function countAngle(objCenter, objVector) {
	//objCenter = начало вектора
	//objVector = конец вектора
	if (objCenter.y <= objVector.y)
        return Math.acos((objVector.x-objCenter.x)/Math.sqrt((objVector.x-objCenter.x)**2+(objVector.y-objCenter.y)**2));
    else
        return 2 * Math.PI - Math.acos((objVector.x-objCenter.x)/Math.sqrt((objVector.x-objCenter.x)**2+(objVector.y-objCenter.y)**2));
}

module.exports.countAngle = countAngle;