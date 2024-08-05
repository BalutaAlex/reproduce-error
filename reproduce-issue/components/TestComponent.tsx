import classNames from "classnames"

import * as styles from "./style.module.css"

const TestComponent = ({ className }: { className: string }) => {
  return (
    <div className={classNames(styles.test, className)}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </div>
  )
}

export default TestComponent
