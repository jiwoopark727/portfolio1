// types.ts 또는 공통 타입 파일에
export type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement | null>;
};
