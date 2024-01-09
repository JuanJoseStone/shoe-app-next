import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "../_utils/Icons";

const ThemeSwitch = (props) => {
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
    changeTheme()
  }, [])

  function changeTheme() {
    if (isSelected) {
      setTheme('light')
    } else {
      setTheme('light')
      // setTheme('dark')
    }
  }

  if(!mounted) return null

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
          onClick={changeTheme}
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <SunIcon/> : <MoonIcon/>}
          </div>
      </Component>
    </div>
  )
}


export default function App() {
  return <ThemeSwitch/>
}
