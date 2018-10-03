import React, { Component } from 'react';

class Weare extends Component {
    render() {
        return (
            <div style={{ marginTop: '50px' }}>
                <h1><u>Who We Are</u></h1>
                <div className="Logo">
                    <img src="https://s3.amazonaws.com/thinkific-import/114168/96yAH4aMTCGRNKcyqztJ_iCON_logo1.png" width="30px" height="30px" />
                </div>
                <div className='whoweare'>
                    <div>
                        <a href="https://www.vrook.co/">VROOK</a> - founded by a group of Entrepreneurial Engineers, is treading its path towards transforming learning through Virtual Reality and Visualizations. With over 3 years of experience in understanding the higher education sector, the team has evolved with the market to meet the growing needs of the education industry.
                    </div>
                    <div>
                        With a diverse team comprising of passionate founders and committed employees, <a href="https://www.vrook.co/">VROOK</a> believes in inspiring students to learn and acquire skill sets which can empower them for a better future. We at <a href="https://www.vrook.co/">VROOK</a>, are guided by world class mentors who believe in our journey.
                    </div>
                    <div>
                        Each course consists of subject matter experts and content specialists who belong to faculty departments of reputed institutes. They are involved in curating the content of the courses provided in the learning platform.
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{flex:0.1}}><div style={{width:'4px',height:'10px',backgroundColor:'pink'}}></div></div>
                        <div style={{flex:30,paddingLeft:'5px'}}><a href="https://www.vrook.co/">VROOK</a> is a learning experience! The world of reality has its limit. But, the world of imagination is boundless.
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Weare;