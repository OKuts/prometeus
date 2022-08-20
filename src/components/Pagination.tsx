import {FC} from "react";

interface PaginationProps {
  current: number
}

export const Pagination: FC<PaginationProps> = ({current}) => {
  return (
    <div className={'pagination'}>
      <img src="/images/Arrow 2.png" alt=""/>
      {new Array(5).fill('').map((el, i) =>
        <div key = {i} className={i === current ? 'circle active' : 'circle'}></div>
      )}
      <img src="/images/Arrow 1.png" alt=""/>
    </div>
  )
}
