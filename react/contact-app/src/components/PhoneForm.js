import React, { Component } from 'react';

class PhoneForm extends Component {
    
    state = {
        name: '',
        phone: '',

    }
    handleChange = (e) => {
        this.setState({
            //name: e.target.value
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        //page가 reloading되는것을 방지하기 위함
        e.preventDefault();
        
         //onCreate 함수호출
            // this.props.onCreate({
            //     name: this.state.name,
            //     phone: this.state.phone,
            // }); 아랫줄과 같은 뜻
        this.props.onCreate(this.state);
        // 기존 입력값 초기화
        this.setState({
            name: '',
            phone: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                  name="name"
                  placeholder="이름" 
                  onChange={this.handleChange} 
                  value={this.state.name} 
                />
                <input 
                  name="phone"
                  placeholder="전화번호"
                  onChange={this.handleChange} 
                  value={this.state.phone} 
                />
                <button type="submit">등록</button>
                {/* <div> 
                    {this.state.name} {this.state.phone}
                </div> */}
            </form>
        );
    }
}

export default PhoneForm;