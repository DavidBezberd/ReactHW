import {coursesAndDurationArray} from "../../arrays.ts";
import type { CourseModel } from "../../models/CourseModel.ts";
import '../courses-component/CoursesComponent.css';
import { CourseComponent } from "../courses-component/courses-component.tsx";

export const CoursesComponent = () =>{
    return(
        <div>
            {
                coursesAndDurationArray.map((course: CourseModel, index: number) => {
                    return <CourseComponent course={course} key={index}/>})
            }
        </div>
    )
}