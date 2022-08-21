import {FC} from "react"

interface NavInfoProps {
  content: {
    title: string
    list: string[]
  }
}

export const NavInfo: FC<NavInfoProps> = ({content}) => {
  return (
    <section>
      <h3 className={'title'}>{content.title}</h3>
      <ul>
        {content.list.map((li, i) =>
          <li key={li} className={'contacts_item'}>{li}</li>)}
      </ul>
    </section>
  )
}
