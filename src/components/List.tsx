import { ReactNode } from 'react'

interface ListProps<T> {
    items: T[],
    render: (item:T)=>ReactNode
}

const List = <T,> ({ items, render}: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}
export default List

{/* <div class="news-item" id="newsInfo">
  <h2 class="title">News Title</h2>
  <p class="source">News Source</p>
  <p class="description">News Description</p>
  <p class="publishedAt">Published Date</p>
</div> */}