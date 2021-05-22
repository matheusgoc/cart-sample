interface ColorOptionsProps {
  colors: string[]
  selectedColor: string
  onChange(color: string): void
}

const ColorOptions = ({colors, selectedColor, onChange}: ColorOptionsProps) => {

  return (
    <ul className="flex items-center">
      {
        colors.map((color) => {
          let classes = "w-8 h-8 bg-no-repeat bg-center rounded cursor-pointer mr-3"
          switch (color) {
            case 'blue': classes += ' bg-blue-900'; break
            case 'purple': classes += ' bg-violet'; break
            case 'pink': classes += ' bg-pink-600'; break
            default: classes += ' bg-gray-400'
          }
          if (color === selectedColor) {
            classes += ' bg-check'
          }

          return <li className={classes} key={color} onClick={() => onChange(color)} />
        })
      }
    </ul>
  )
}

export default ColorOptions