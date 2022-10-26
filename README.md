ER Diagram (https://lucid.app/lucidchart/f4c25a74-79d2-4712-9c55-e9b0e56c30da/edit?beaconFlowId=EB789654D574DCC5&invitationId=inv_5260d4ed-84ad-4ba7-9057-af6e59a1cb6f&page=0_0#)



<div className='<div class="input-group mb-3">'>
        <input 
              name='fullname'
              placeholder="Full Name"
              onChange={handelChange} 
              value={portfolioInfo.fullname}
              data-testid="nameInput"
          />
      </div>
      <div className='<div class="input-group mb-3">'>
        <input 
              name='job_title'
              placeholder='Job Title'
              onChange={handelChange}
              value={portfolioInfo.jobTitle} 
              data-testid="titleInput"
          />
      </div>
      <div className='<div class="input-group mb-3">'>
        <input 
              name='picture'
              placeholder='Picture URL' 
              onChange={handelChange}
              value={portfolioInfo.picture}
              data-testid="pictureInput"
          />
      </div>
        
        
      <div className='<div class="input-group mb-3">'> 
        <textarea 
            name='description' 
            placeholder='Description'
            onChange={handelChange}
            value={portfolioInfo.description}
            data-testid="descriptionTextarea"
        />
       </div>
        <button 
          className="btn btn-primary" 
          onClick={createPortfolio}
          data-testid="submitBtn">
     
          Submit
        </button>
        ///////////////////////////////
         <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text"
              name='fullname' 
              placeholder="Full Name"
              onChange={handelChange}
              value={portfolioInfo.fullname}
              data-testid="nameInput" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control 
              type="text"
              name='job_title' 
              placeholder="Job Title"
              onChange={handelChange}
              value={portfolioInfo.jobTitle} 
              data-testid="titleInput" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control 
              type="text"
              name='picture' 
              placeholder='Picture URL' 
              onChange={handelChange}
              values={portfolioInfo.picture}
              data-testid="pictureInput" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              name='description'
              placeholder='Description'
              as="textarea"  
              onChange={handelChange}
              values={portfolioInfo.description}
              data-testid="descriptionTextarea" />
          </Form.Group>
          <Button variant="primary" onClick={updatePortfolio} data-testid="submitBtn">
            Submit
          </Button>
        </Form>  