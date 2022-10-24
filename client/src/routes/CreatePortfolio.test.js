import { render, screen } from "@testing-library/react";
import axios from 'axios';
import CreatePortfolio from "./CreatePortfolio";

test('first test',() => {})

test('render correctly and has correct properties',() => {
    render(<CreatePortfolio portfolioInfo={
        { 
            fullname:'Ai Bate',
            job_title:'Chef',
            picture:'No picture',
            description:'She was awesome!'}
     }

    />);
    const name = screen.getByTestId("nameInput")
    expect(name.placeholder).toEqual("Full Name");
    

    const title = screen.getByTestId("titleInput")
    expect(title.placeholder).toEqual("Job Title");
    
    
    const description = screen.getByTestId("descriptionTextarea")
    expect(description.placeholder).toEqual("Description");
    
    const picture = screen.getByTestId("pictureInput");
    expect(picture.placeholder).toEqual("Picture URL");
    const submitBtn = screen.getByTestId("submitBtn");
    expect(submitBtn.textContent).toEqual("Submit");
})