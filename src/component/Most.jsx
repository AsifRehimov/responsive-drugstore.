import Card from 'react-bootstrap/Card';

function Most() {
    return (
        <>
            <div className="most" id="most" name="most">
                <h3 className="header-most">Ən çox satılanlar</h3>
                <div className="container">
                    <div className="row justify-content-center" style={{ height: "auto" }}>                  
                        
                        
                        {/* <Row xl={4} md={2} lg={3} sm={1} className="col-sm-12 col-md-6 col-lg-4 col-xl-3" > */}
                          
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
                                    <Card.Img variant="top" src="https://melhem.az//uploads/product_images/2b28394a2c7f015ac1c3206b7fdd6210.jpg" />
                                    <Card.Body>
                                        <Card.Title>Primo</Card.Title>
                                        <h6 style={{color:"red", marginTop:'10px'}}>35.99 AZN</h6>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                           
                          
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2 ">
                                    <Card.Img variant="top" src="https://melhem.az//uploads/product_images/ac3155de844e1058c140375177f5f48e.jpg" />
                                    <Card.Body>
                                        <Card.Title>Lipril</Card.Title>
                                        <h6 style={{color:"red", marginTop:'10px'}}>12.99 AZN</h6>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                           
                          
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
                                    <Card.Img variant="top" src="https://melhem.az//uploads/product_images/a801b58a899eb58726577f2790e20ecb.jpg" />
                                    <Card.Body>
                                        <Card.Title>Livolen</Card.Title>
                                        <h6 style={{color:"red", marginTop:'10px'}}>54.40 AZN</h6>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                           
                          
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2">
                                    <Card.Img variant="top" src="https://melhem.az//uploads/product_images/1ad0b5c6dbd4b9ce0a25d72252b2984c.jpg" />
                                    <Card.Body>
                                        <Card.Title>Funqipar</Card.Title>
                                        <h6 style={{color:"red", marginTop:'10px'}}>30.99 AZN</h6>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}
export default Most;


            
