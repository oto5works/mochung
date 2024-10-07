/* function.js */
import tinycolor from "tinycolor2";

// 스크롤 (ID)로 이동
export function scrollToValue(id) {
  const value = document.getElementById(id);
  if (value) {
    value.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.log("Element with id not found:", id);
  }
}


// 반대 색상 지정
export function setOnColor(value) {
  console.log('setOnColor value is: ', value);
  
  // 배열을 tinycolor가 인식하는 객체로 변환
  const rgbValue = { r: value[0], g: value[1], b: value[2] };
  const selectedColor = tinycolor(rgbValue);
  
  const oppositeColor =
    selectedColor.getLuminance() < 0.5
      ? tinycolor("#FFFFFF")
      : tinycolor("#000000");

  console.log('setOnColor oppositeColor is: ', oppositeColor);

  const { r, g, b } = oppositeColor.toRgb(); // RGB 값을 객체로 반환
  console.log('setOnColor oppositeColor is: ', r, g, b);

  return `${r}, ${g}, ${b}`; // 원하는 형식으로 반환
}

export function setColorStyle(styleName, value) {
  console.log ('color is: ', styleName)
  console.log ('value is: ', value)

  const variable = {
    color: value,
    on: setOnColor(value),
  };

  const style = document.documentElement.style;
  for (const key of Object.keys(variable)) {
    style.setProperty("--" + styleName + "-" + key, variable[key]);
  }
}














// HTML 요소의 속성
export function setDocumentAttribut(styleName, value) {
  console.log (styleName, value)
  document.documentElement.setAttribute("data-" + styleName + "-theme", value);
}
// CSS 속성
export function setDocumentProperty(styleName, value) {
  document.documentElement.style.setProperty("--" + styleName, value);
}
