export interface IPaginationProps {
  display: string;
  index: number;
  total: number;
  onPageIndex: (index: number) => void;
  pageSize: number;
}
