import './infiniteslider.css'

type Props = {
  imgURLS?: string[]
  gap?: number
  direction?: 'Left' | 'Right'
  images?: { src: string; alt?: string }[]
  height?: number
  width?: number
  noPadding?: boolean
  glow?: boolean
  slow?: boolean
}

const InfiniteSlider = (props: Props) => {
  const {
    imgURLS,
    gap = 10,
    direction = 'Left',
    images,
    height = 110,
    width = 70,
    noPadding = false,
    glow = true,
    slow = false,
  } = props
  const initialX = direction === 'Left' ? 0 : -width * 8 - gap * 8
  const finalX = direction === 'Left' ? -width * 8 - gap * 8 : 0
  return (
    <div className="infiniteslider" style={{ height }}>
      <div
        className="infinitesliderinner"
        style={{
          height,
          paddingTop: noPadding ? '0px' : '10px',
          paddingBottom: noPadding ? '0px' : '10px',
        }}
      >
        {glow && (
          <style>
            {`
            .infinitesliderinner::before,
            .infinitesliderinner::after {
              background: linear-gradient(
                to right,
                #fff7f3 0%,
                rgba(255, 255, 255, 0) 100%
              );
              content: '';
              height: 100%;
              width: 15%;
              z-index: 2;
              position: absolute;
            }
            `}
          </style>
        )}
        <div className="infinitesliderinnertrack" style={{ gap, height }}>
          <style>
            {`@keyframes scroll {
                0% {transform: translateX(${initialX}px);}
                100% {transform: translateX(${finalX}px);}
              }
              .infinitesliderinnertrack {
                display: flex;
                flex-direction: row;
                animation: scroll ${slow ? 25 : 15}s linear infinite;
              }`}
          </style>
          {imgURLS?.map((url, index) => (
            <img key={index} style={{ height }} src={url}></img>
          ))}
          {imgURLS?.map((url, index) => (
            <img key={'a' + index} style={{ height, width }} src={url}></img>
          ))}
          {images?.map((image) => (
            <img style={{ width, height }} src={image.src} alt="" />
          ))}
          {images?.map((image) => (
            <img style={{ width, height }} src={image.src} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfiniteSlider
