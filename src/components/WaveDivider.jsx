export default function WaveDivider({ flip = false, color = '#faf5ff' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
        <path
          d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V100H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
