import type { ReactNode } from "react"
import type { ArrayType } from "../../models/ArrayType.ts"
import './ArrayItemComponent.css'

interface ArrayItemComponentProps{
    item: ArrayType,
    children: ReactNode,
}


export const ArrayItemComponent = ({item, children}: ArrayItemComponentProps) => {
    return (
        <div className='my-10 border-3'>
            <h3 className='text-2xl mb-2'>{item.title}</h3>
            <p>{item.hourDuration} годин({item.monthDuration} днів)</p>
            <div className='mt-5'>включає в себе:{children}</div>
        </div>
    )
}