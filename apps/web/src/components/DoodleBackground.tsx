const TILE = 480

export default function DoodleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="doodle-drift text-mint"
        style={{
          position: 'absolute',
          top: -TILE,
          left: -TILE,
          width: `calc(100% + ${TILE * 2}px)`,
          height: `calc(100% + ${TILE * 2}px)`,
        }}
      >
        <defs>
          <pattern id="vet-doodle" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* paw print */}
              <g transform="translate(60,70) rotate(-15)">
                <ellipse cx="0" cy="18" rx="16" ry="13" />
                <circle cx="-16" cy="-8" r="6" />
                <circle cx="-5" cy="-17" r="6" />
                <circle cx="9" cy="-15" r="6" />
                <circle cx="19" cy="-5" r="6" />
              </g>

              {/* bone */}
              <g transform="translate(230,44) rotate(20)">
                <path d="M -26 -6 C -26 -14 -14 -14 -14 -6 L -14 6 C -14 14 -26 14 -26 6 Z" />
                <path d="M 26 -6 C 26 -14 14 -14 14 -6 L 14 6 C 14 14 26 14 26 6 Z" />
                <line x1="-14" y1="-4" x2="14" y2="-4" />
                <line x1="-14" y1="4" x2="14" y2="4" />
              </g>

              {/* dog head */}
              <g transform="translate(370,112) rotate(8)">
                <ellipse cx="-20" cy="6" rx="9" ry="16" transform="rotate(-25 -20 6)" />
                <ellipse cx="20" cy="6" rx="9" ry="16" transform="rotate(25 20 6)" />
                <circle cx="0" cy="0" r="19" />
                <circle cx="-6" cy="-3" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="6" cy="-3" r="1.6" fill="currentColor" stroke="none" />
                <ellipse cx="0" cy="9" rx="4" ry="3" />
              </g>

              {/* cat head */}
              <g transform="translate(96,224) rotate(-10)">
                <path d="M -16 -10 L -23 -27 L -6 -14 Z" />
                <path d="M 16 -10 L 23 -27 L 6 -14 Z" />
                <circle cx="0" cy="2" r="18" />
                <circle cx="-6" cy="0" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="6" cy="0" r="1.6" fill="currentColor" stroke="none" />
                <path d="M -3 8 L 0 11 L 3 8" />
                <line x1="-19" y1="5" x2="-31" y2="3" />
                <line x1="-19" y1="10" x2="-31" y2="12" />
                <line x1="19" y1="5" x2="31" y2="3" />
                <line x1="19" y1="10" x2="31" y2="12" />
              </g>

              {/* heart with pulse */}
              <g transform="translate(268,196)">
                <path d="M0 16 C -20 0 -20 -18 -6 -18 C -2 -18 0 -13 0 -9 C 0 -13 2 -18 6 -18 C 20 -18 20 0 0 16 Z" />
                <path d="M -22 -2 L -11 -2 L -7 -11 L -2 6 L 2 -7 L 6 -2 L 22 -2" />
              </g>

              {/* stethoscope */}
              <g transform="translate(404,266) rotate(-12)">
                <path d="M -14 -22 L -14 -6 C -14 8 -5 14 3 14 C 12 14 17 6 17 -3" />
                <line x1="3" y1="14" x2="3" y2="25" />
                <circle cx="3" cy="32" r="7" />
                <circle cx="-14" cy="-27" r="3" fill="currentColor" stroke="none" />
              </g>

              {/* syringe */}
              <g transform="translate(150,330) rotate(25)">
                <rect x="-24" y="-6" width="34" height="12" rx="2" />
                <line x1="-14" y1="-6" x2="-14" y2="6" />
                <line x1="-4" y1="-6" x2="-4" y2="6" />
                <line x1="10" y1="0" x2="32" y2="0" />
                <line x1="-32" y1="0" x2="-24" y2="0" />
                <rect x="-38" y="-4" width="6" height="8" rx="1" />
              </g>

              {/* pill capsule */}
              <g transform="translate(336,368) rotate(-20)">
                <rect x="-20" y="-9" width="40" height="18" rx="9" />
                <line x1="0" y1="-9" x2="0" y2="9" />
              </g>

              {/* magnifying glass */}
              <g transform="translate(42,404) rotate(10)">
                <circle cx="0" cy="0" r="14" />
                <line x1="10" y1="10" x2="23" y2="23" />
              </g>

              {/* DNA twist */}
              <g transform="translate(438,54) rotate(15)">
                <line x1="-10" y1="-32" x2="10" y2="-19" />
                <line x1="10" y1="-19" x2="-10" y2="-6" />
                <line x1="-10" y1="-6" x2="10" y2="7" />
                <line x1="10" y1="7" x2="-10" y2="20" />
                <line x1="-10" y1="20" x2="10" y2="33" />
                <line x1="-6" y1="-13" x2="6" y2="-13" />
                <line x1="-6" y1="14" x2="6" y2="14" />
              </g>

              {/* test tube */}
              <g transform="translate(178,430) rotate(-8)">
                <path d="M -8 -30 L -8 10 C -8 20 8 20 8 10 L 8 -30" />
                <line x1="-8" y1="4" x2="8" y2="4" />
                <circle cx="2" cy="11" r="2" fill="currentColor" stroke="none" />
              </g>

              {/* small filler marks: plus signs */}
              <g>
                <line x1="245" y1="55" x2="255" y2="55" />
                <line x1="250" y1="50" x2="250" y2="60" />
              </g>
              <g>
                <line x1="115" y1="150" x2="125" y2="150" />
                <line x1="120" y1="145" x2="120" y2="155" />
              </g>
              <g>
                <line x1="55" y1="320" x2="65" y2="320" />
                <line x1="60" y1="315" x2="60" y2="325" />
              </g>
              <g>
                <line x1="425" y1="400" x2="435" y2="400" />
                <line x1="430" y1="395" x2="430" y2="405" />
              </g>

              {/* filler dot cluster */}
              <g transform="translate(300,110)">
                <circle cx="0" cy="-10" r="2" />
                <circle cx="9" cy="-3" r="2" />
                <circle cx="9" cy="8" r="2" />
                <circle cx="0" cy="14" r="2" />
                <circle cx="-9" cy="8" r="2" />
                <circle cx="-9" cy="-3" r="2" />
              </g>

              {/* lone small circles */}
              <circle cx="230" cy="150" r="4" />
              <circle cx="386" cy="230" r="3" />
              <circle cx="20" cy="240" r="3" />
              <circle cx="410" cy="160" r="3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vet-doodle)" />
      </svg>
    </div>
  )
}
