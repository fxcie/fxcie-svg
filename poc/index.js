var path = document.querySelector(".path"),
	w = document.querySelector("#w"),
	h = document.querySelector("#h"),
	bbox = document.querySelector(".bbox"),
	code = document.querySelector(".code"),
	userPath = document.querySelector("#path"),
	info = document.querySelector("#info"),
	scaleW = 1,
	scaleH = 1,
	original = null;

function getBoundingBox() {
	path.setAttribute("d", userPath.value);
	var obbox = path.getBBox();
	original = obbox;
	var sInfo = "<li>width: <span class='value'>" + obbox.width * scaleW + "</span></li>";
	sInfo += "<li>height: <span class='value'>" + obbox.height * scaleH + "</span></li>";
	info.innerHTML = sInfo;
	w.value = obbox.width * scaleW;
	h.value = obbox.height * scaleH;
	bbox.setAttribute("x", obbox.x);
	bbox.setAttribute("y", obbox.y);
	bbox.setAttribute("width", obbox.width * scaleW);
	bbox.setAttribute("height", obbox.height * scaleH);

	path.style.transform = "scale(" + scaleW + "," + scaleH + ")";
	var BCR = path.getBoundingClientRect();
	var sStyle = "translate(" + 0 + "px," + (-BCR.top) + "px) scale(" + scaleW + "," + scaleH + ")";
	path.style.transform = sStyle;
	bbox.style.transform = "translate(" + 0 + "px," + (-BCR.top) + "px)";
	var sCode = "<path d=\"" + userPath.value + "\" style=\"" + sStyle + "\" >";
	code.value = sCode;
}

function reSize(resizeUsing) {

	var scale = (resizeUsing === "w") ? parseFloat(w.value) / original.width : parseFloat(h.value) / original.height;
	scaleW = scale;
	scaleH = scale;
	getBoundingBox();
}

userPath.onkeyup = userPath.ontouchend = getBoundingBox;
w.onchange = w.ontouchend = function () {
	reSize("w")
};
h.onchange = h.ontouchend = function () {
	reSize("h")
};

getBoundingBox();