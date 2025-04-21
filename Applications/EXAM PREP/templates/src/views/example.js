import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const exampleTemplate = (onSubmit) => html `
<section>
    <p>ExamPrep</p>
    <form @submit=${onSubmit}>
        <h2>Sample form</h2>
        <label>
            Data 1
            <input type="text" name="data1"> 
        </label>
        <label>
            Data 2
            <input type="text" name="data2"> 
        </label>
        <button >Submit button</button>
</form>

</section>
`;
export function displayContent (ctx){
    render(exampleTemplate(createSubmitHandler(onSubmit)));

}

function onSubmit (data, form) {
    console.log(data);
    form.reset();
}