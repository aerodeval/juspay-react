import Avatar from '@mui/material/Avatar';

export default function ImageAvatar({ imgSrc, alt = "Avatar" }) {
  return (
    <div>
    <Avatar 
      alt={alt}
      src={imgSrc}
      sx={{ 
        width: 24,
        height: 24,
        borderRadius: '50% !important',
        overflow: 'hidden',
        '& img': {
          borderRadius: '50% !important',
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }
      }} 
    />
           <span style={{fontSize:"14px"}}>ByeWind</span>
    </div>
  );
}
