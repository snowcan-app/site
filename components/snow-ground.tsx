export function SnowGround() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-5 pointer-events-none">
      {/* 쌓인 눈 레이어들 - 구름처럼 물결치는 모양 */}
      <div className="relative">
        {/* 뒷쪽 눈더미 - 가장 높은 레이어 */}
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-white via-white to-transparent opacity-70">
          <svg viewBox="0 0 1200 320" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,320 C80,280 160,300 240,270 C320,240 400,260 480,230 C560,200 640,220 720,190 C800,160 880,180 960,150 C1040,120 1120,140 1200,110 L1200,320 Z"
              fill="rgba(255,255,255,0.8)"
            />
          </svg>
        </div>

        {/* 중간 눈더미 */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-white via-white to-transparent opacity-85">
          <svg viewBox="0 0 1200 256" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,256 C100,220 200,240 300,210 C400,180 500,200 600,170 C700,140 800,160 900,130 C1000,100 1100,120 1200,90 L1200,256 Z"
              fill="rgba(255,255,255,0.9)"
            />
          </svg>
        </div>

        {/* 앞쪽 눈더미 - 가장 낮은 레이어 */}
        <div className="absolute bottom-0 w-full h-48 bg-white">
          <svg viewBox="0 0 1200 192" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,192 C120,160 240,180 360,150 C480,120 600,140 720,110 C840,80 960,100 1080,70 C1140,55 1200,65 1200,65 L1200,192 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* 추가 구름 같은 디테일 */}
        <div className="absolute bottom-0 w-full h-32">
          <svg viewBox="0 0 1200 128" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,128 C150,100 300,120 450,90 C600,60 750,80 900,50 C1050,20 1200,40 1200,40 L1200,128 Z"
              fill="rgba(255,255,255,0.95)"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
