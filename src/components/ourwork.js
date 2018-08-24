import React,{Component} from 'react';

class OurWork extends Component{
    render(){
        return(
            <div style={{paddingBottom:'50px', paddingTop:'50px'}}>
                <div>
                    <h1>Our Work</h1>
                    <div className="Logo">
                        <img src="https://s3.amazonaws.com/thinkific-import/114168/96yAH4aMTCGRNKcyqztJ_iCON_logo1.png" width="30px" height="30px" />
                    </div>
                </div>
                <div style={{display:'flex',paddingTop:'20px'}}>
                    <div style={{flex:1}}>
                        <div style={{display:'flex',paddingLeft:'35px'}}>
                            <div style={{flex:0.1}}><div style={{width:'3px',height:'25px',backgroundColor:'pink'}}></div></div>
                            <div style={{flex:30,paddingLeft:'5px',textAlign:'left'}}>Our Previous Creation</div>
                        </div>
                        <div style={{textAlign:'left',paddingLeft:'35px',paddingTop:'25px'}}>
                        <img src="https://s3.amazonaws.com/thinkific-import/114168/qO2Qb0kPToasA8JvxHfB_logo-min.png" height="100px" width="200px" alt="BOOKSBEKA.COM" title="BOOKSBEKA.COM" class="img-responsive left" />
                        </div>
                        <div style={{textAlign:"left",padding:"10px 50px 10px 30px"}}>
                            Booksbeka.com is Karnataka's largest online store for engineering books, connecting students, colleges and suppliers. Founded in December 2015, Booksbeka.com is recognised for its innovative approach towards implementing business values and is responsive to changing customer needs. We aim at providing complete transparency in buying and selling of books. 
                        </div>
                    </div>
                    <div style={{flex:1}}>
                    <div style={{display:'flex',paddingLeft:'35px'}}>
                            <div style={{flex:0.1}}><div style={{width:'3px',height:'25px',backgroundColor:'pink'}}></div></div>
                            <div style={{flex:30,paddingLeft:'5px',textAlign:'left'}}>Our Non Profit Venture</div>
                        </div>
                        
                        <div style={{textAlign:'left',paddingLeft:'35px',paddingTop:'30px'}}>
                            <img src="https://s3.amazonaws.com/thinkific-import/114168/FokuDe9oRdeOqgd9zsCE_RAMOSE%20FOUNDATION%20LOGO.png" height="100px" width="200px" alt="Ramose Foundation" title="Ramose Foundation" class="img-responsive" />
                        </div>
                        <div style={{textAlign:"left",padding:"10px 60px 10px 30px"}}>
                            Ramose foundation is a non-profit organisation working towards the betterment of education. Founded in 2012, it has more than 100 volunteers across Karnataka. Through its book donation drive, Books Baro Andolan it has successfully established 12 free libraries and has donated 35,000 textbooks to the needy. 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OurWork;