import { Box, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    label: 'Software Development',
    subtitle: 'Java, Android, iPhone, PHP, .Net, PhoneGap',
    draw(ctx, cx, cy) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 3.5
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'
      ctx.beginPath(); ctx.arc(cx - 4, cy + 4, 14, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.arc(cx - 4, cy + 4, 6, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx + 2, cy - 2); ctx.lineTo(cx + 20, cy - 20); ctx.stroke()
      ctx.beginPath(); ctx.arc(cx + 20, cy - 20, 5, 0, Math.PI * 2); ctx.stroke()
    },
  },
  {
    label: 'Software Solutions & Consultancy',
    subtitle: 'E-business, CRM, ERP, BroadBand',
    draw(ctx, cx, cy) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 3.5; ctx.lineCap = 'round'
      ctx.beginPath(); ctx.roundRect(cx - 22, cy - 18, 44, 30, 3); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy + 12); ctx.lineTo(cx, cy + 22); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx - 10, cy + 22); ctx.lineTo(cx + 10, cy + 22); ctx.stroke()
      ctx.beginPath(); ctx.arc(cx, cy - 8, 6, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cx - 8, cy + 8); ctx.quadraticCurveTo(cx, cy + 3, cx + 8, cy + 8); ctx.stroke()
    },
  },
  {
    label: 'Outsourcing Services',
    subtitle: 'Linux Administration, Application Migration',
    draw(ctx, cx, cy) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 3.5; ctx.lineCap = 'round'
      ctx.beginPath(); ctx.arc(cx, cy - 18, 7, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.arc(cx - 18, cy + 14, 7, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.arc(cx + 18, cy + 14, 7, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy - 11); ctx.lineTo(cx, cy + 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy + 2); ctx.lineTo(cx - 18, cy + 7); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy + 2); ctx.lineTo(cx + 18, cy + 7); ctx.stroke()
    },
  },
  {
    label: 'Enterprise Solutions',
    subtitle: 'E Governance, ERP, E-Business, CRM, BroadBand',
    draw(ctx, cx, cy) {
      ctx.fillStyle = '#fff'
      const bars = [{ x: -26, h: 16 }, { x: -10, h: 26 }, { x: 6, h: 36 }, { x: 22, h: 46 }]
      bars.forEach(b => ctx.fillRect(cx + b.x, cy + 26 - b.h, 12, b.h))
    },
  },
  {
    label: 'Offshore Development & Training',
    subtitle: 'Infrastructure Java, PHP',
    draw(ctx, cx, cy) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 3.5; ctx.lineCap = 'round'
      ctx.beginPath(); ctx.roundRect(cx - 24, cy - 20, 48, 34, 3); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy + 14); ctx.lineTo(cx, cy + 22); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx - 10, cy + 22); ctx.lineTo(cx + 10, cy + 22); ctx.stroke()
      ctx.beginPath(); ctx.arc(cx, cy - 3, 12, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy - 15); ctx.lineTo(cx, cy + 9); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx - 12, cy - 3); ctx.lineTo(cx + 12, cy - 3); ctx.stroke()
      ctx.beginPath(); ctx.ellipse(cx, cy - 3, 6, 12, 0, 0, Math.PI * 2); ctx.stroke()
    },
  },
]

function OctagonIcon({ service }) {
  const canvasRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const S = 150

  const drawOctagon = (canvas) => {
    const dpr = window.devicePixelRatio || 1
    canvas.width = S * dpr
    canvas.height = S * dpr
    canvas.style.width = S + 'px'
    canvas.style.height = S + 'px'
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    const cx = S / 2, cy = S / 2, R = 72, r = 64, ri = 57

    // Outer dark octagon
    ctx.fillStyle = '#7b1a1a'
    ctx.beginPath()
    for (let i = 0; i < 8; i++) {
      const a = Math.PI / 8 + (i * Math.PI) / 4
      i === 0
        ? ctx.moveTo(cx + R * Math.cos(a), cy + R * Math.sin(a))
        : ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a))
    }
    ctx.closePath(); ctx.fill()

    // Main red octagon
    ctx.fillStyle = '#c0392b'
    ctx.beginPath()
    for (let i = 0; i < 8; i++) {
      const a = Math.PI / 8 + (i * Math.PI) / 4
      i === 0
        ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
        : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
    }
    ctx.closePath(); ctx.fill()

    // Inner subtle ring
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i < 8; i++) {
      const a = Math.PI / 8 + (i * Math.PI) / 4
      i === 0
        ? ctx.moveTo(cx + ri * Math.cos(a), cy + ri * Math.sin(a))
        : ctx.lineTo(cx + ri * Math.cos(a), cy + ri * Math.sin(a))
    }
    ctx.closePath(); ctx.stroke()

    // Draw icon
    service.draw(ctx, cx, cy)
  }

  useEffect(() => {
    if (canvasRef.current) drawOctagon(canvasRef.current)
  }, [])

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        width: S,
        height: S,
        cursor: 'pointer',
      }}
    >
      {/* Octagon canvas — fades out on hover */}
      <Box
        sx={{
          position: 'absolute',
          top: 0, left: 0,
          transition: 'opacity 0.3s, transform 0.3s',
          opacity: hovered ? 0 : 1,
          transform: hovered ? 'scale(0.82)' : 'scale(1)',
          pointerEvents: 'none',
        }}
      >
        <canvas ref={canvasRef} />
      </Box>

      {/* Text info — fades in on hover */}
      <Box
        sx={{
          position: 'absolute',
          top: 0, left: 0,
          width: S,
          height: S,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 1,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.88)',
          transition: 'opacity 0.3s, transform 0.3s',
          pointerEvents: 'none',
        }}
      >
        <Typography sx={{
          color: '#c0392b',
          fontWeight: 700,
          fontSize: '0.88rem',
          textAlign: 'center',
          lineHeight: 1.35,
          mb: 0.8,
        }}>
          {service.label}
        </Typography>
        <Typography sx={{
          color: '#555',
          fontSize: '0.75rem',
          textAlign: 'center',
          lineHeight: 1.5,
        }}>
          {service.subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default function ServicesPage() {
  return (
    <Box>
      {/* Services Section */}
      <Box sx={{ background: '#fff', py: { xs: 5, md: 8 }, px: 4 }}>

        {/* Title with side lines */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 7,
          gap: 3,
        }}>
          <Box sx={{
            flex: 1,
            maxWidth: 320,
            height: '1px',
            background: 'linear-gradient(to right, transparent, #c0392b 50%)',
          }} />
          <Typography variant="h5" sx={{
            color: '#333',
            fontWeight: 400,
            fontSize: '1.6rem',
            letterSpacing: '2px',
            whiteSpace: 'nowrap',
          }}>
            Services
          </Typography>
          <Box sx={{
            flex: 1,
            maxWidth: 320,
            height: '1px',
            background: 'linear-gradient(to left, transparent, #c0392b 50%)',
          }} />
        </Box>

        {/* Octagon Icons Row */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: { xs: 3, md: 5 },
        }}>
          {services.map((service, idx) => (
            <OctagonIcon key={idx} service={service} />
          ))}
        </Box>
      </Box>

    </Box>
  )
}