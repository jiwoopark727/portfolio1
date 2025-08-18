import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function PassScrollAfterClick({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // 클릭 이벤트를 FallingText에 먼저 전달한 다음
    // 다음 프레임에서 pointer-events를 꺼버린다
    requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.pointerEvents = 'none';
      }
    });
  };

  return (
    <div ref={ref} onClick={handleClick} style={{ position: 'relative' }}>
      {children}
    </div>
  );
}
