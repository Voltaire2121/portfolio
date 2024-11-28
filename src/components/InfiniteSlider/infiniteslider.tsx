import './infiniteslider.css'

type Props = {
  imgURLS: string[]
  gap?: number
  speed?: number
  direction?: 'Left' | 'Right'
}

const InfiniteSlider = (props: Props) => {
  const { imgURLS, gap = 10, speed = 1, direction = 'Left' } = props
  const initialX = direction === 'Left' ? 0 : -70 * 8 - gap * 8
  const finalX = direction === 'Left' ? -70 * 8 - gap * 8 : 0
  return (
    <div className="infiniteslider">
      <div className="infinitesliderinner">
        <div className="infinitesliderinnertrack" style={{ gap }}>
          <style>
            {`
          @keyframes scroll {
            0% {
              transform: translateX(${initialX}px);
            }
            100% {
              transform: translateX(${finalX}px);
            }
          }
        `}
          </style>
          {imgURLS.map((url) => (
            <img src={url}></img>
          ))}
          {imgURLS.map((url) => (
            <img src={url}></img>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfiniteSlider
