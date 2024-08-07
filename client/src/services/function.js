/* function.js */
import tinycolor from 'tinycolor2'

// 스크롤 (ID)로 이동
export function scrollToValue(id) {
    const value = document.getElementById(id);
    if (value) {
      value.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('Element with id not found:', id);
    }
}

// 반대 색상 지정
export function setOnColor(value) {
    const selectedColor = tinycolor(value);
    const oppositeColor = selectedColor.getLuminance() < 0.5 ? tinycolor('#FFFFFF') : tinycolor('#000000');
    return oppositeColor.toHexString();
}

export function setColorStyle(styleName, value) {
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
  document.documentElement.setAttribute("data-" + styleName + "-theme", value );
}
// CSS 속성
export function setDocumentProperty(styleName, value) {
  document.documentElement.style.setProperty("--" + styleName, value);
}