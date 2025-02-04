import { useState } from "react"

const useToggleState = () => {
  const [isToggle, setIsToggle] = useState(false)

  const toggleHandler = () => {
    setIsToggle((prev) => !prev )
  }

  return {isToggle, setIsToggle, toggleHandler}
}

export default useToggleState