import logo from '@/assets/logo.png'
import Image from 'next/image';

export default function Logo() {
    return (
      <div style={{ width: 10, height: 10 }}>
        <Image
          src={logo}
          alt="Foodies Logo"
          width="50"
          height="50"
          priority
        />
      </div>
    );
  }
