import {useEffect, useState} from "react";
import {Pagination} from "./Pagination";
import {Button} from "../elements/Button";

interface IComment {
  id: number
  body: string
  email: string
}

export const Response = () => {
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(arr => arr.json())
      .then(arr => setComments(arr))
  }, [])

  if (!comments.length) return null

  return (
    <section className={'section5'}>
      <img className={'img_add'} src="/images/flowers 1.png" alt=""/>
      <div className={'content responses'}>
        <h2 className={'h2'}>Відгуки</h2>
        <div className={'response'}>
          <img className={'photo'} src="/images/reviews-photo1.png" alt=""/>
          <div className={'response_item'}>
            <p className={'p'}>{comments[0].body}</p>
            <span>{comments[0].email}</span>
          </div>
        </div>
        <div className={'response'}>
          <img className={'photo'} src="/images/reviews-photo2.png" alt=""/>
          <div className={'response_item'}>
            <p className={'p'}>{comments[1].body}</p>
            <span>{comments[1].email}</span>
          </div>
        </div>
        <Pagination current={0}/>
        <h2 className={'h2'}>Додати відгук:</h2>
        <input type="text" placeholder={"Ваше ім'я"}/>
        <textarea placeholder={'Ваш відгук:'}></textarea>
        <Button text={'Відправити'} border={'border1'} background={'color1'}/>
      </div>
      <img className={'img_add'} src="/images/flowers 2.png" alt=""/>
    </section>
  )
}
