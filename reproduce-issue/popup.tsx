import TestComponent from "~components/TestComponent"

import * as style from "./style.module.css"

function IndexPopup() {
  return <TestComponent className={style.classThatShouldOverwriteBaseStyle} />
}

export default IndexPopup
