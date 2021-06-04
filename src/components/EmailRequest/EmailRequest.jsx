import React,{ Component } from 'react';
import './custom.css';
import AlphaLearn from './AlphaLearn.jpeg';
import './bootstrap.min.css';

export default class EmailRequest extends Component{
    render(){
        return(
            <section>
                <div className="email-grid">
                    <div className="colla rounded align-self-end">
                        <p className="fs-3 text-primary  text-center">Alpha community and collaborations</p>
                        <p className="fs-6 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis repudiandae, ut soluta autem dolorum. Nesciunt dolore ipsum corporis modi magni labore voluptatibus, harum maiores!</p>
                    </div>
                    <img src={AlphaLearn} alt="Logo" className = "email-image"/>
                    <form className="body rounded align-self-center">
                        <div class="d-grid mx-auto">
                            <p class="form-label fs-3 text-center fst-normal text-primary">Get updates from AlphaLearn</p>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address..."/>
                            <button type="button" class="btn btn-primary text-center">Subscribe</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}