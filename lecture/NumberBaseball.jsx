import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
    
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruits = [
        {fruit: '사과', taste: '맛있다'},
        {fruit: '포도', taste: '달다'},
        {fruit: '바나나', taste: '부드럽다'},
        {fruit: '귤', taste: '시다'},
        {fruit: '수박', taste: '시원하다'},
        {fruit: '감', taste: '떫다'},
        {fruit: '자몽', taste: '쓰다'},
        ];

    render() {
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => {
                        return(
                            <Try key={v.friut + v.taste} value={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;