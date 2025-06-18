import {coursesArray} from "../../Data/data.ts"
import { ArrayItemComponent } from '../ArrayItem-component/ArrayItemComponent.tsx'

export const ArrayComponent = () => {
    return (
        <div>
            {
                   coursesArray.map((value, index:number) => <ArrayItemComponent item={value} key={index}>
                    <ul>
                        {value.modules.map((mod:string, i:number) => <li key={i}>{mod}</li>)}
                    </ul>
                   </ArrayItemComponent>)
            }
        </div>
    )
}